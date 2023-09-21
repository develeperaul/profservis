<template>
  <q-page class="tw-container tw-py-4">
    <div>
      <div class="tw-mb-5">
        <h2 class="tw-mb-1.5">Единый круглосуточный номер</h2>
        <p class="tw-mb-1.5">8 (800) 34-73-123</p>
        <p class="tw-text-t06 tw-text-text2">Звонок бесплатный</p>
      </div>
      <h2 class="tw-mb-1.5">Чат со специалистом</h2>
      <div class="tw-flex tw-gap-2.5 tw-mb-7">
        <button @click="openWatsApp">
          <base-circle bg="tw-bg-gray" size="lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 4.89998C8.9 0.999976 15.2 0.999976 19.1 4.89998C20.9 6.79998 22 9.29997 21.9 11.9C21.9 17.4 17.5 21.8 12 21.8C10.4 21.8 8.8 21.4 7.3 20.6L2 22L3.4 16.9C1.2 13 1.8 8.09998 5 4.89998ZM12 20.2C13.6 20.2 15.1 19.7 16.4 18.9C20.3 16.5 21.4 11.4 19 7.49998C16.6 3.69998 11.6 2.39998 7.7 4.89998C3.8 7.39998 2.6 12.4 5 16.4L5.2 16.7L4.4 19.7L7.5 18.9L7.8 19.1C9.1 19.8 10.5 20.2 12 20.2Z"
                fill="#4CAF50"
              />
              <path
                d="M16.6 14C16.4 13.9 15.1 13.3 14.9 13.2C14.7 13.1 14.5 13.1 14.3 13.3C14.1 13.5 13.7 14.1 13.5 14.3C13.4 14.5 13.2 14.5 13 14.4C12.3 14.1 11.6 13.7 11 13.2C10.5 12.7 10 12.1 9.6 11.5C9.5 11.3 9.6 11.1 9.7 11C9.8 10.9 9.9 10.7 10.1 10.6C10.2 10.5 10.3 10.3 10.3 10.2C10.4 10.1 10.4 9.89998 10.3 9.79998C10.2 9.69998 9.7 8.49998 9.5 7.99998C9.4 7.29998 9.2 7.29998 9 7.29998H8.5C8.3 7.29998 8 7.49998 7.9 7.59998C7.3 8.19998 7 8.89998 7 9.69998C7.1 10.6 7.4 11.5 8 12.3C9.1 13.9 10.5 15.2 12.2 16C12.7 16.2 13.1 16.4 13.6 16.5C14.1 16.7 14.6 16.7 15.2 16.6C15.9 16.5 16.5 16 16.9 15.4C17.1 15 17.1 14.6 17 14.2L16.6 14Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.4 18.9C15.1 19.7 13.6 20.2 12 20.2C10.5 20.2 9.1 19.8 7.8 19.1L7.5 18.9L4.4 19.7L5.2 16.7L5 16.4C2.6 12.4 3.8 7.39998 7.7 4.89998C11.6 2.39998 16.6 3.69998 19 7.49998C21.4 11.4 20.3 16.5 16.4 18.9ZM14.9 13.2C15.1 13.3 16.4 13.9 16.6 14L17 14.2C17.1 14.6 17.1 15 16.9 15.4C16.5 16 15.9 16.5 15.2 16.6C14.6 16.7 14.1 16.7 13.6 16.5C13.1 16.4 12.7 16.2 12.2 16C10.5 15.2 9.1 13.9 8 12.3C7.4 11.5 7.1 10.6 7 9.69998C7 8.89998 7.3 8.19998 7.9 7.59998C8 7.49998 8.3 7.29998 8.5 7.29998H9C9.2 7.29998 9.4 7.29998 9.5 7.99998C9.7 8.49998 10.2 9.69998 10.3 9.79998C10.4 9.89998 10.4 10.1 10.3 10.2C10.3 10.3 10.2 10.5 10.1 10.6C9.9 10.7 9.8 10.9 9.7 11C9.6 11.1 9.5 11.3 9.6 11.5C10 12.1 10.5 12.7 11 13.2C11.6 13.7 12.3 14.1 13 14.4C13.2 14.5 13.4 14.5 13.5 14.3C13.7 14.1 14.1 13.5 14.3 13.3C14.5 13.1 14.7 13.1 14.9 13.2Z"
                fill="#4CAF50"
              />
            </svg>
          </base-circle>
        </button>
        <button @click="openTelegramm">
          <base-circle bg="tw-bg-gray" size="lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9943 2C10.0165 2 8.08306 2.58649 6.43856 3.6853C4.79407 4.78412 3.51235 6.3459 2.75547 8.17317C1.9986 10.0004 1.80056 12.0111 2.18641 13.9509C2.57227 15.8907 3.52467 17.6725 4.9232 19.0711C6.32172 20.4696 8.10355 21.422 10.0434 21.8079C11.9832 22.1937 13.9938 21.9957 15.8211 21.2388C17.6484 20.4819 19.2101 19.2002 20.309 17.5557C21.4078 15.9112 21.9943 13.9778 21.9943 12C21.9944 10.6868 21.7358 9.38634 21.2333 8.17304C20.7308 6.95973 19.9942 5.8573 19.0656 4.92869C18.137 4.00008 17.0345 3.26349 15.8212 2.76098C14.6079 2.25847 13.3075 1.99989 11.9943 2ZM15.1738 17.1525C15.1363 17.2458 15.0794 17.33 15.0067 17.3996C14.9341 17.4691 14.8474 17.5223 14.7525 17.5556C14.6576 17.5889 14.5567 17.6015 14.4566 17.5926C14.3564 17.5837 14.2593 17.5535 14.1718 17.504L11.4571 15.3946L9.71479 17.002C9.67436 17.0319 9.62707 17.0511 9.57726 17.0579C9.52746 17.0647 9.47675 17.0589 9.42979 17.0409L9.76379 14.0525L9.77448 14.061L9.78131 14.002C9.78131 14.002 14.6663 9.55445 14.8653 9.36496C15.0668 9.17596 15.0003 9.13496 15.0003 9.13496C15.0118 8.90443 14.6388 9.13496 14.6388 9.13496L8.16627 13.299L5.47078 12.381C5.47078 12.381 5.05678 12.2325 5.01778 11.906C4.97678 11.582 5.48427 11.406 5.48427 11.406L16.2013 7.14849C16.2013 7.14849 17.0823 6.75597 17.0823 7.406L15.1738 17.1525Z"
                fill="#0092E4"
              />
            </svg>
          </base-circle>
        </button>
      </div>
      <div
        class="tw-rounded-lg2 tw-shadow-base tw-p-3.5 tw-bg-red tw-text-white tw-relative tw-mb-5"
      >
        <h2 class="tw-mb-2.5">Заказать звонок</h2>
        <q-btn
          class="tw-bg-blue tw-shadow-lg tw-text-t02 tw-uppercase tw-rounded"
          :unelevated="true"
          @click="popupCall = true"
        >
          Обратный звонок
        </q-btn>
      </div>
      <div
        class="tw-rounded-lg2 tw-shadow-base tw-p-3.5 tw-bg-red tw-text-white tw-relative tw-mb-7.5"
      >
        <h2 class="tw-mb-1.5">Оставить отзыв</h2>
        <p class="tw-mb-2.5">
          Для нас очень важна Ваша обратная связь о наших услугах, чтобы делать
          сервис еще лучше
        </p>
        <q-btn
          class="tw-bg-blue tw-shadow-lg tw-text-t02 tw-uppercase tw-rounded"
          :unelevated="true"
          @click="popupReview = true"
        >
          Оставить отзыв
        </q-btn>
      </div>
    </div>
    <div>
      <div>
        <div class="tw-mb-5">
          <h2 class="tw-mb-2.5">Контакты</h2>
          <p class="tw-mb-1.5 tw-font-semibold">
            ООО «АВАРИЙНАЯ СЛУЖБА «ПРОФСЕРВИС»
          </p>
          <p class="tw-mb-1.5">
            453130, Республика Башкортостан, г. Стерлитамак ул. Гоголя 124/2
          </p>
          <a href="mailto:info@edc-str.ru" class="tw-text-link">
            info@edc-str.ru</a
          >
        </div>
        <div>
          <p class="tw-mb-1.5">
            <span class="tw-font-semibold"> Директор: </span>
            <span> Хаертдинова Лиана Мидхатовна </span>
          </p>
          <a href="mailto:direktor.edc@mail.ru" class="tw-text-link">
            direktor.edc@mail.ru</a
          >
        </div>
      </div>
    </div>

    <q-dialog v-model="popupCall" maximized>
      <div class="tw-relative">
        <div
          class="tw-bg-white tw-py-7.5 tw-px-5 tw-rounded-lg2 tw-absolute tw-bottom-10 tw-left-0 card-popup"
        >
          <q-btn
            class="tw-h-6 tw-w-6 tw-p-0 tw-absolute tw-top-2.5 tw-right-3"
            dense
            flat
            @click="popupCall = false"
          >
            <q-icon name="close" size="1.25rem" class="tw-opacity-50" />
          </q-btn>
          <h2 class="tw-mb-4">Обратный звонок</h2>
          <q-form greedy @submit="onSubmit">
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

    <q-dialog v-model="popupReview" maximized>
      <div class="tw-relative">
        <div
          class="tw-bg-white tw-py-7.5 tw-px-5 tw-rounded-lg2 tw-absolute tw-bottom-10 tw-left-0 card-popup"
        >
          <q-btn
            class="tw-h-6 tw-w-6 tw-p-0 tw-absolute tw-top-2.5 tw-right-3"
            dense
            flat
            @click="popupReview = false"
          >
            <q-icon name="close" size="1.25rem" class="tw-opacity-50" />
          </q-btn>
          <h2 class="tw-mb-4">Обратный звонок</h2>
          <q-form greedy @submit="onSubmitReview">
            <div class="tw-grid tw-gap-0.5">
              <q-input
                filled
                bg-color="white"
                v-model="requestReview.name"
                label="Имя"
                lazy-rules
                :rules="[(val, rules) => !!val || 'Заполните поле Имя']"
              />
              <q-input
                filled
                bg-color="white"
                v-model="requestReview.phone"
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
              <q-input
                filled
                bg-color="white"
                v-model="requestReview.review"
                label="Отзыв"
                lazy-rules
                autogrow
                :rules="[(val, rules) => !!val || 'Заполните поле Отзыв']"
                input-class="!tw-min-h-[85px]"
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
          :showing="loadingReview"
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
import { Browser } from "@capacitor/browser";
const popupThank = ref(false);

const { onSubmit, popupCall, requestCall, loadingCall } = useReccal(popupThank);
const storeOther = otherStore();
const popupReview = ref(false);
const requestReview = ref({
  name: "",
  phone: "",
  review: "",
});
const loadingReview = ref(false);
const onSubmitReview = async () => {
  try {
    loadingReview.value = true;
    await storeOther.newReview({
      name: requestReview.value.name,
      phone: requestReview.value.phone,
      otziv: requestReview.value.review,
    });
    popupThank.value = true;
  } catch (e) {
    throw e;
  } finally {
    popupReview.value = false;
    loadingReview.value = false;
  }
};

const openTelegramm = async () => {
  await Browser.open({ url: "https://t.me/Thunder102" });
};
const openWatsApp = async () =>
  await Browser.open({ url: "https://wa.me/+79613639044" });
</script>
<style lang="scss" scoped></style>
