<template>
  <q-page class="tw-container tw-py-5">
    <div
      class="tw-rounded-lg2 tw-shadow-base tw-p-3.5 tw-bg-red tw-text-white tw-relative tw-mb-7.5"
    >
      <div class="tw-grid tw-gap-[7px] tw-mb-4">
        <p>Вас заливают соседи? Прорвало трубу?</p>
        <p>Проблемы с электрикой/сантехникой?</p>
        <p>Засорилась канализация?</p>
      </div>
      <q-btn
        class="tw-bg-blue tw-shadow-lg tw-text-t02 tw-uppercase tw-rounded tw-mb-4"
        :unelevated="true"
        @click="$router.push({ name: 'call' })"
      >
        Вызвать специалиста
      </q-btn>
      <div>
        <div class="tw-flex tw-gap-2 tw-items-center tw-mb-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#243FAD" />
            <path
              d="M8.04447 13.5581V14.5318H4.116V13.7079L5.92557 11.8652C6.08539 11.6879 6.21427 11.5293 6.31223 11.3895C6.41018 11.2472 6.48107 11.1186 6.52489 11.0037C6.57129 10.8889 6.59449 10.7853 6.59449 10.6929C6.59449 10.5356 6.57 10.4045 6.52102 10.2996C6.47463 10.1923 6.40503 10.1111 6.31223 10.0562C6.22201 10.0012 6.10988 9.97378 5.97583 9.97378C5.84179 9.97378 5.7245 10.0112 5.62397 10.0861C5.52344 10.161 5.44482 10.2634 5.38811 10.3933C5.33398 10.5231 5.30691 10.6692 5.30691 10.8315H4C4 10.4969 4.08378 10.191 4.25133 9.91386C4.42146 9.6367 4.65732 9.41573 4.95892 9.25094C5.26051 9.08365 5.6098 9 6.00677 9C6.42178 9 6.76978 9.06242 7.05075 9.18727C7.33172 9.31211 7.5431 9.49313 7.68487 9.73034C7.82922 9.96504 7.9014 10.2484 7.9014 10.5805C7.9014 10.7703 7.87047 10.9526 7.8086 11.1273C7.74674 11.3021 7.65781 11.4757 7.54181 11.6479C7.42581 11.8177 7.28403 11.9925 7.11648 12.1723C6.95151 12.3521 6.76333 12.5431 6.55196 12.7453L5.82504 13.5581H8.04447Z"
              fill="white"
            />
            <path
              d="M12.7192 12.4007V13.3745H8.66699L8.58966 12.603L10.8516 9.07865H11.8801L10.7627 10.8502L9.8347 12.4007H12.7192ZM12.1508 9.07865V14.5318H10.8478V9.07865H12.1508Z"
              fill="white"
            />
            <path
              d="M15.6965 9.07865L13.7709 15H12.8429L14.7685 9.07865H15.6965Z"
              fill="white"
            />
            <path
              d="M20 9.07865V9.75281L17.8966 14.5318H16.5201L18.6274 10.0524H15.9401V9.07865H20Z"
              fill="white"
            />
          </svg>

          <p class="tw-text-white tw-text-t06 tw-font-semibold">
            Работаем круглосуточно
          </p>
        </div>
        <div class="tw-flex tw-gap-2 tw-items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#243FAD" />
            <g clip-path="url(#clip0_218_922)">
              <path
                d="M7.36489 9.94922H5.75708V10.7695H7.36489V9.94922Z"
                fill="white"
              />
              <path
                d="M7.36489 13.2305H5.75708V14.0508H7.36489V13.2305Z"
                fill="white"
              />
              <path
                d="M7.36496 11.5898H5V12.4102H7.36496V11.5898Z"
                fill="white"
              />
              <path
                d="M13.5927 6.59265C10.6063 6.59265 8.1853 9.01361 8.1853 12C8.1853 14.9864 10.6063 17.4074 13.5927 17.4074C16.5791 17.4074 19 14.9864 19 12C19 9.01361 16.5791 6.59265 13.5927 6.59265ZM15.2979 14.2208L13.0253 12.672V9.35355H13.8456V12.2383L15.7599 13.5429L15.2979 14.2208Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_218_922">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(5 5)"
                />
              </clipPath>
            </defs>
          </svg>

          <p class="tw-text-white tw-text-t06 tw-font-semibold">
            Быстро и качественно <br />
            выполняем заявки
          </p>
        </div>
      </div>
      <img
        src="~assets/images/men.png"
        alt=""
        class="tw-absolute tw-bottom-0 tw-right-0"
        width="116"
        height="175"
      />
    </div>
    <div>
      <h2 class="tw-mb-3.5">Наши услуги</h2>

      <div class="accordion">
        <div
          v-for="item in serviceList"
          class="item"
          :class="{ active: activeService === item.id }"
          @click="toggleService(item.id)"
        >
          <div class="item__head">
            <div class="item__head-content">
              <img
                :src="inject('$url') + item.img"
                alt=""
                class="tw-shrink-0"
              />

              <p>{{ item.name }}</p>
            </div>

            <div class="icon">
              <q-icon name="expand_more" size="1.5rem" />
            </div>
          </div>
          <div class="item__body">
            <p class="item__body-content">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const activeService = ref<string | null>();

const toggleService = (id: string) => {
  if (activeService.value && activeService.value === id)
    activeService.value = null;
  else {
    activeService.value = id;
  }
};
const storeService = serviceStore();
const { serviceList } = storeToRefs(storeService);
onMounted(async () => {
  await storeService.getServices();
});
</script>
<style lang="scss" scoped>
.accordion {
  @apply tw-grid tw-gap-[18px];
  .item {
    &__head {
      @apply tw-flex tw-items-center tw-justify-between;
      &-content {
        @apply tw-flex tw-gap-2.5 tw-items-center tw-mb-0;
        @apply tw-transition-all tw-duration-100 tw-ease-out;
      }
      .icon {
        @apply tw-transition-transform tw-duration-100 tw-ease-in;
      }
    }
    &__body {
      @apply tw-grid tw-grid-rows-[0fr] tw-overflow-hidden;
      @apply tw-transition-all tw-duration-100;
      &-content {
        @apply tw-min-h-0;
      }
    }
    &.active .item__head {
      @apply tw-mb-1.5;
    }
    &.active .item__body {
      grid-template-rows: 1fr;
    }
    &.active .icon {
      transform: rotate(180deg);
    }
  }
}
</style>
