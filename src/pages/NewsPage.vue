<template>
  <q-page class="tw-container tw-py-5">
    <q-btn
      v-haptics
      flat
      class="tw-opacity-50 tw-p-0 tw-mb-3"
      @click="$router.go(-1)"
    >
      <q-icon name="arrow_back" size="1.5rem" />
    </q-btn>
    <template v-if="loadPage && newsDetail === null">
      <q-skeleton height="180px" class="tw-mb-5" />
      <q-skeleton width="150px" class="tw-mb-2" />
      <q-skeleton type="text" class="tw-mb-0.5" />
      <q-skeleton type="text" class="tw-mb-0.5" />
      <q-skeleton type="text" class="tw-mb-3" />
    </template>

    <template v-else>
      <template v-if="newsDetail">
        <div class="tw-mb-5 tw-overflow-hidden tw-rounded-lg2 tw-shadow-card">
          <q-img class="tw-h-[180px]" :src="inject('$url') + newsDetail.img" />
        </div>
        <h2 class="tw-mb-3" v-html="newsDetail.name"></h2>
        <div class="tw-mb-2 tw-text-t03" v-html="newsDetail.text"></div>
      </template>
    </template>
  </q-page>
</template>
<script lang="ts" setup>
import { NewsDetail } from "src/models";
const props = defineProps<{
  id: string;
}>();

const storeNews = newsStore();
const newsDetail = ref<NewsDetail | null>(null);
const loadPage = ref(false);
onMounted(async () => {
  try {
    loadPage.value = true;
    newsDetail.value = await storeNews.getNewsDetail(props.id);
  } catch (e) {
    throw e;
  } finally {
    loadPage.value = false;
  }
});
</script>
<style lang="scss" scoped></style>
