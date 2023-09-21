<template>
  <q-page class="tw-container tw-py-5">
    <div class="tw-flex tw-gap-5 tw-overflow-auto">
      <q-btn
        v-for="(item, index) in tabList"
        class="tw-text-t02 tw-normal-case tw-rounded tw-mb-4"
        :class="[
          item.id === tab.id
            ? 'tw-bg-red tw-text-white tw-shadow-lg'
            : 'tw-text-red tw-text-t02 ',
        ]"
        :outline="item.id !== tab.id"
        :unelevated="true"
        @click="tab = item"
      >
        <span :class="[item.id === tab.id ? 'tw-text-white' : 'tw-text-black']">
          {{ item.title }}
        </span>
      </q-btn>
    </div>

    <div class="tw-grid tw-gap-7.5">
      <div v-if="loadPage" v-for="n in 3">
        <q-skeleton height="180px" class="tw-mb-5" />
        <q-skeleton width="150px" class="tw-mb-2" />
        <q-skeleton type="text" class="tw-mb-0.5" />
        <q-skeleton type="text" class="tw-mb-0.5" />
        <q-skeleton type="text" class="tw-mb-3" />
        <q-skeleton type="rect" width="130px" class="tw-mb-0.5" />
      </div>
      <div v-else v-for="item in newsList">
        <div class="tw-rounded tw-overflow-hidden tw-mb-2.5 tw-shadow-card">
          <q-img :src="inject('$url') + item.img" class="tw-h-[180px]" />
        </div>
        <h2 class="tw-mb-1.5">{{ item.name }}</h2>
        <p class="tw-mb-1.5">
          {{ item.text }}
        </p>
        <router-link
          :to="{ name: 'news-page', params: { id: item.id } }"
          class="tw-text-text2 tw-underline"
        >
          Подробнее
        </router-link>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts" setup>
interface Tab {
  id: 1 | 2 | 3;
  name: string;
  title: string;
}
const tab = ref<Tab>({
  id: 1,
  name: "news",
  title: "Новости",
});
const tabList = [
  {
    id: 1,
    name: "news",
    title: "Новости",
  },
  {
    id: 2,
    name: "ads",
    title: "Объявления",
  },
  {
    id: 3,
    name: "actions",
    title: "Акции",
  },
] as Tab[];
const loadPage = ref(false);
const storeNews = newsStore();
const { newsList } = storeToRefs(storeNews);
onMounted(async () => {
  try {
    loadPage.value = true;
    await storeNews.getNews(tab.value.id);
  } catch (e) {
    throw e;
  } finally {
    loadPage.value = false;
  }
});
watch(tab, async (val) => {
  try {
    loadPage.value = true;
    await storeNews.getNews(val.id);
  } catch (e) {
    throw e;
  } finally {
    loadPage.value = false;
  }
});
</script>
<style lang="scss" scoped></style>
