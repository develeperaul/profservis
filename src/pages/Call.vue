<template>
  <q-page class="tw-container tw-pt-3 tw-pb-5" v-if="!openPageOther">
    <h2 class="tw-text-center tw-mb-3">Вызов специалиста</h2>
    <div class="tw-flex tw-items-center tw-gap-1.5">
      <base-circle bg="tw-bg-red" />
      <p class="tw-text-t03 tw-font-semibold">
        Заявки принимаются круглосуточно!
      </p>
    </div>
    <q-form
      greedy
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md tw-mt-4"
    >
      <div class="tw-grid tw-gap-1.5">
        <div>
          <div class="tw-font-semibold tw-text-t03 tw-mb-2.5">Тип услуги*</div>
          <q-select
            lazy-rules
            :rules="[(val, rules) => !!val || 'Выберите услугу']"
            filled
            v-model="requestModel.type"
            :options="serviceOptions"
            label="Выберите тип услуги"
            dense
            :loading="loadingService"
            bg-color="white"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Результатов не найдено
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <div>
          <div class="tw-font-semibold tw-text-t03 tw-mb-2.5">Описание*</div>
          <q-input
            filled
            bg-color="white"
            v-model="requestModel.description"
            lazy-rules
            :rules="[(val, rules) => !!val || 'Опишите работу']"
            label="Кратко опишите, что необходимо сделать"
          />
        </div>

        <div class="tw-overflow-hidden -tw-mx-4">
          <div class="tw-font-semibold tw-text-t03 tw-px-4">Фотографии</div>
          <div class="tw-flex tw-overflow-auto tw-gap-3 tw-px-4 tw-py-2.5">
            <button
              type="button"
              class="tw-w-[70px] tw-h-[70px] tw-rounded tw-overflow-hidden tw-shadow-input tw-text-t00 tw-shrink-0"
              @click="upload"
            >
              +
            </button>
            <div
              v-for="item in fileSystem"
              class="tw-w-[70px] tw-h-[70px] tw-rounded tw-overflow-hidden tw-relative tw-shrink-0"
            >
              <q-img :src="inject('$url') + item.url" />
              <q-btn
                @click="removePhoto(item.id)"
                icon="close"
                size="0.5rem"
                flat
                class="tw-absolute tw-right-0 tw-top-0 tw-text-white tw-p-1.5"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="tw-font-semibold tw-text-t03 tw-mb-2.5">Ваши данные</div>
          <div class="tw-grid tw-gap-0.5">
            <q-input
              filled
              bg-color="white"
              v-model="requestModel.name"
              label="Имя*"
              lazy-rules
              :rules="[(val, rules) => !!val || 'Заполните поле Имя']"
            />
            <q-input
              filled
              bg-color="white"
              v-model="requestModel.address"
              label="Адрес*"
              lazy-rules
              :rules="[(val, rules) => !!val || 'Заполните поле адрес']"
            />
            <q-input
              filled
              bg-color="white"
              v-model="requestModel.phone"
              mask="+7(###) ###-##-##"
              label="Номер телефона*"
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Заполните поле номер телефона',
                (val) =>
                  /(\+7)[\s(]*[0-9]{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/.test(
                    val
                  ) || 'Заполните поле номер телефона',
              ]"
              lazy-rules
              type="tel"
            />
          </div>
        </div>
      </div>
      <q-btn
        class="tw-bg-red tw-text-white tw-shadow-lg tw-text-t02 tw-uppercase tw-rounded tw-mb-4 tw-mt-5"
        :unelevated="true"
        type="submit"
      >
        Вызвать специалиста
      </q-btn>
      <div class="tw-grid tw-gap-1.5">
        <p class="tw-text-t04">*обязательное поле</p>
        <p class="tw-text-t04">
          **Стоимость выезда в район и другие города рассчитывается отдельно.
        </p>
        <p class="tw-text-t04">
          **Стоимость услуг будет определена по соглашению сторон
        </p>
      </div>
    </q-form>
    <q-inner-loading
      :showing="loadPage"
      label="Отправляю запрос..."
      label-style="font-size: 1.1em"
      dark
    />
  </q-page>
  <q-page class="tw-container tw-bg-red tw-grid tw-content-center" v-else>
    <div
      class="tw-grid tw-justify-center tw-justify-items-center tw-text-white tw-text-center"
    >
      <div
        class="tw-bg-blue tw-w-[163px] tw-h-[163px] tw-rounded-full tw-relative tw-overflow-hidden tw-shadow-md tw-mb-3"
      >
        <img
          src="~assets/images/men2.png"
          alt=""
          class="tw-absolute tw-bottom-0 tw-left-1/2 -tw-translate-x-1/2"
          width="88"
          height="172"
        />
      </div>
      <h2 class="tw-mb-1.5">Ваш запрос отправлен!</h2>
      <p class="tw-mb-6">
        Мы свяжемся с вами <br />
        в ближайшее время
      </p>
      <q-btn
        class="tw-bg-blue tw-shadow-lg tw-text-t02 tw-uppercase tw-rounded tw-mb-4"
        :unelevated="true"
        @click="$router.push('/')"
      >
        на главную
      </q-btn>
    </div>
  </q-page>
</template>
<script lang="ts" setup>
import { Camera, CameraResultType } from "@capacitor/camera";
const storeService = serviceStore();
const storeOther = otherStore();
const { serviceList } = storeToRefs(storeService);
const openPageOther = ref(false);
const requestModel = ref<{
  type: { label: string; value: string } | null;
  description: string;
  name: string;
  address: string;
  phone: string;
}>({
  type: null,
  description: "",
  name: "",
  address: "",
  phone: "",
});
const loadingService = ref(false);
const loadPage = ref(false);
const loadFile = ref(false);
const fileSystem = ref<{ id: string; url: string; file: File }[]>([]);
const upload = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    // allowEditing: true,
    resultType: CameraResultType.Uri,
  });
  let blob = await fetch(image.webPath).then((r) => r.blob());
  let f = new File([blob], `${image.webPath.split("/").pop()}`, {
    type: `image/${image.format}`,
  });
  try {
    loadFile.value = true;
    const fileData = await storeOther.uploadFile(f);
    fileSystem.value.push({ ...fileData, file: f });
  } catch (e) {
    throw e;
  } finally {
    loadFile.value = false;
  }
};
const removePhoto = (id: string) => {
  fileSystem.value = fileSystem.value.filter((item) => item.id !== id);
};
const serviceOptions = computed(() => {
  return serviceList.value.map((item) => {
    return { label: item.name, value: item.id };
  });
});

const onSubmit = async (v) => {
  try {
    loadPage.value = true;
    if (requestModel.value.type) {
      const photo = fileSystem.value.map((item) => item.id);
      const obj = {
        type: requestModel.value.type.value,
        description: requestModel.value.description,
        name: requestModel.value.name,
        address: requestModel.value.address,
        phone: requestModel.value.phone,
        photo: photo,
      };
      await storeOther.newRequest(obj);
      openPageOther.value = true;
    }
  } catch (e) {
    throw e;
  } finally {
    loadPage.value = false;
  }
};

const onReset = () => {
  // name.value = null
  // age.value = null
  // accept.value = false
};

onMounted(async () => {
  console.log(storeOther);
  if (serviceList.value.length === 0) {
    try {
      loadingService.value = true;
      await storeService.getServices();
    } catch (e) {
      throw e;
    } finally {
      loadingService.value = false;
    }
  }
});
</script>
<style lang="scss" scoped></style>
