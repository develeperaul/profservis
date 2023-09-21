<template>
  <q-page class="tw-container tw-py-5">
    <q-btn flat class="tw-opacity-50 tw-p-0 tw-mb-3" @click="$router.go(-1)">
      <q-icon name="arrow_back" size="1.5rem" />
    </q-btn>
    <template v-if="loadPage && partner === null">
      <q-skeleton width="250px" class="tw-mb-3" />
      <q-skeleton width="150px" class="tw-mb-2" />
      <q-skeleton class="tw-mb-1.5" />
      <q-skeleton class="tw-mb-1.5" />
      <q-skeleton class="tw-mb-4" />
      <q-skeleton height="150px" class="tw-mb-5" />
      <q-skeleton width="150px" class="tw-mb-2.5" />
      <q-skeleton width="150px" class="tw-mb-1.5" />
      <q-skeleton width="150px" class="tw-mb-4" />
      <q-skeleton type="QBtn" />
    </template>
    <template v-else>
      <template v-if="partner">
        <h2 class="tw-mb-3" v-html="partner.name"></h2>
        <p class="tw-mb-2 tw-text-t03">Услуги компании:</p>
        <ul class="tw-grid tw-gap-1.5 tw-mb-4">
          <li
            v-for="item in partner.services"
            class="tw-list-disc tw-ms-4 tw-text-t03"
          >
            {{ item }}
          </li>
        </ul>
        <div class="tw-mb-5 tw-overflow-hidden tw-rounded-lg2 tw-shadow-card">
          <q-img class="tw-h-[269px]" :src="inject('$url') + partner.img" />
        </div>
        <h2 class="tw-mb-2.5">Контакты</h2>
        <a
          class="tw-mb-1.5 tw-text-t03 tw-inline-block"
          :href="`tel:${partner.phone}`"
          >{{ partner.phone }}</a
        >
        <p class="tw-mb-4 tw-text-t03">{{ partner.address }}</p>
        {{ popup }}
        <q-btn
          v-haptics
          class="tw-bg-red tw-text-white tw-shadow-lg tw-text-t02 tw-uppercase tw-rounded"
          :unelevated="true"
          @click="popup = true"
        >
          Обратный звонок
        </q-btn>
      </template>
    </template>
    <q-dialog v-model="popup" maximized>
      <div class="tw-relative">
        <div
          class="tw-bg-white tw-py-7.5 tw-px-5 tw-rounded-lg2 tw-absolute tw-bottom-10 tw-left-0 card-popup"
        >
          <q-btn
            class="tw-h-6 tw-w-6 tw-p-0 tw-absolute tw-top-2.5 tw-right-3"
            dense
            flat
            @click="popup = false"
          >
            <q-icon name="close" size="1.25rem" class="tw-opacity-50" />
          </q-btn>
          <h2 class="tw-mb-4">Обратный звонок</h2>
          <q-form greedy @submit.stop="onSubmit">
            <div class="tw-grid tw-gap-0.5">
              <q-input
                filled
                bg-color="white"
                v-model="requestCall.name"
                label="Имя*"
                lazy-rules
                :rules="[(val, rules) => !!val || 'Заполните поле Имя']"
              />
              <q-input
                filled
                bg-color="white"
                v-model="requestCall.phone"
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
            <q-btn
              class="tw-bg-red tw-text-white tw-shadow-lg tw-text-t02 tw-uppercase tw-rounded tw-mt-2.5"
              :unelevated="true"
              type="submit"
            >
              Заказать
            </q-btn>
          </q-form>
        </div>
        <q-inner-loading
          :showing="loadingCall"
          label="Отправляю запрос..."
          label-style="font-size: 1.1em"
          dark
        />
      </div>
    </q-dialog>
    <q-dialog v-model="popupThank" maximized>
      <div class="tw-relative">
        <div
          class="tw-bg-white tw-py-7.5 tw-px-5 tw-rounded-lg2 tw-absolute tw-bottom-1/2 tw-left-0 tw-translate-y-1/2 card-popup"
        >
          <q-btn
            class="tw-h-6 tw-w-6 tw-p-0 tw-absolute tw-top-2.5 tw-right-3"
            dense
            flat
            @click="popupThank = false"
          >
            <q-icon name="close" size="1.25rem" class="tw-opacity-50" />
          </q-btn>
          <h2 class="">Спасибо, ваша заявка отправлена</h2>
        </div>
      </div>
    </q-dialog>
  </q-page>
</template>
<script lang="ts" setup>
import { PartnerDetail } from "src/models";
const props = defineProps<{
  id: string;
}>();
const popupThank = ref(false);
const storePartner = partnerStore();
const partner = ref<PartnerDetail | null>(null);
const {
  onSubmit,
  popupCall: popup,
  requestCall,
  loadingCall,
} = useReccal(popupThank);

const loadPage = ref(false);
onMounted(async () => {
  try {
    loadPage.value = true;
    partner.value = await storePartner.getDetailPartner(props.id);
  } catch (e) {
    throw e;
  } finally {
    loadPage.value = false;
  }
});
</script>
<style lang="scss" scoped></style>
