<template>
  <q-page class="tw-container tw-py-3 tw-grid">
    <div v-if="notifications.length > 0 || readNotifications.length > 0">
      <div
        class="tw-flex tw-items-center tw-gap-1.5 tw-text-t06 tw-justify-center tw-mb-3"
        v-if="freeNotifications.length > 0"
        @click="storeOther.setReadNotifications()"
      >
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
            d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z"
            fill="#15BE44"
          />
        </svg>

        Отметить все как прочитанное
      </div>
      <div class="tw-grid tw-gap-3">
        <div v-for="item in freeNotifications" class="notification">
          <h2 class="tw-mb-1.5">
            {{ item.header }}
          </h2>
          <p class="tw-mb-2.5">
            {{ item.text }}
          </p>
          <p class="tw-text-t06 tw-text-text2">
            {{ item.date }}
          </p>
        </div>
        <div v-for="item in readNotifications" class="notification active">
          <h2 class="tw-mb-1.5">
            {{ item.header }}
          </h2>
          <p class="tw-mb-2.5">
            {{ item.text }}
          </p>
          <p class="tw-text-t06 tw-text-text2">
            {{ item.date }}
          </p>
        </div>
      </div>
    </div>
    <div v-else class="tw-grid tw-content-center tw-h-full">
      <h2 class="tw-mb-2.5 tw-text-center">Уведомлений нет</h2>
      <p class="tw-text-center">Здесь будут собраны все уведомления</p>
    </div>
  </q-page>
</template>
<script lang="ts" setup>
const storeOther = otherStore();
const { notifications, readNotifications, freeNotifications } =
  storeToRefs(storeOther);
onMounted(async () => {
  try {
    await storeOther.getNotification();
  } catch (e) {
    throw e;
  } finally {
  }
});
</script>
<style lang="scss" scoped>
.notification {
  @apply tw-py-3 tw-bg-blue-light -tw-mx-4 tw-px-4;
  &.active {
    @apply tw-bg-blue-light2;
  }
}
</style>
