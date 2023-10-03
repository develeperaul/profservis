<template>
  <q-page class="tw-container tw-pt-3 tw-pb-5" v-if="!openPageOther">
    <h2 class="tw-text-center tw-mb-3">Вызов специалиста</h2>
    <div class="tw-flex tw-items-center tw-gap-1.5">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="14" cy="14" r="14" fill="#B43B3B" />
        <path
          d="M9.38517 15.8177V16.9538H4.80196V15.9925L6.91312 13.8427C7.09958 13.6359 7.24995 13.4509 7.36423 13.2878C7.4785 13.1217 7.56121 12.9717 7.61233 12.8377C7.66646 12.7037 7.69353 12.5828 7.69353 12.475C7.69353 12.2915 7.66496 12.1386 7.60782 12.0162C7.55369 11.891 7.47249 11.7963 7.36423 11.7322C7.25897 11.6681 7.12815 11.6361 6.97177 11.6361C6.81538 11.6361 6.67855 11.6798 6.56126 11.7672C6.44397 11.8546 6.35225 11.974 6.28609 12.1255C6.22293 12.2769 6.19136 12.4474 6.19136 12.6367H4.66663C4.66663 12.2464 4.76437 11.8895 4.95984 11.5662C5.15833 11.2428 5.4335 10.985 5.78536 10.7928C6.13722 10.5976 6.54472 10.5 7.00785 10.5C7.49204 10.5 7.89803 10.5728 8.22583 10.7185C8.55364 10.8641 8.80024 11.0753 8.96564 11.3521C9.13405 11.6259 9.21826 11.9565 9.21826 12.3439C9.21826 12.5653 9.18217 12.778 9.11 12.9819C9.03782 13.1858 8.93407 13.3883 8.79873 13.5893C8.6634 13.7873 8.498 13.9913 8.30252 14.201C8.11005 14.4107 7.89051 14.6336 7.64391 14.8695L6.79583 15.8177H9.38517Z"
          fill="white"
        />
        <path
          d="M14.839 14.4675V15.6036H10.1114L10.0212 14.7035L12.6602 10.5918H13.8601L12.5564 12.6586L11.4738 14.4675H14.839ZM14.1759 10.5918V16.9538H12.6557V10.5918H14.1759Z"
          fill="white"
        />
        <path
          d="M18.3125 10.5918L16.066 17.5H14.9834L17.2299 10.5918H18.3125Z"
          fill="white"
        />
        <path
          d="M23.3333 10.5918V11.3783L20.8793 16.9538H19.2734L21.7319 11.7278H18.5967V10.5918H23.3333Z"
          fill="white"
        />
      </svg>

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
