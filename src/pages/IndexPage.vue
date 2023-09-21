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
          <base-circle />
          <p class="tw-text-white tw-text-t06 tw-font-semibold">
            Работаем круглосуточно
          </p>
        </div>
        <div class="tw-flex tw-gap-2 tw-items-center">
          <base-circle />
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
