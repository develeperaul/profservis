<template>
  <q-page class="tw-container tw-py-5">
    <div class="tw-grid tw-gap-6">
      <div
        v-if="loadPage"
        class="tw-shadow-card tw-py-4 tw-px-3 tw-rounded-lg2"
        v-for="n in 3"
      >
        <q-skeleton height="150px" class="tw-mb-2.5" />
        <q-skeleton width="150px" class="tw-mb-2" />
        <q-skeleton />
      </div>

      <div
        v-else
        class="tw-shadow-card tw-py-4 tw-px-3 tw-rounded-lg2"
        v-for="item in partnerList"
        @click="$router.push({ name: 'partner', params: { id: item.id } })"
      >
        <div class="tw-rounded-lg2 tw-overflow-hidden tw-mb-2.5">
          <q-img :src="inject('$url') + item.img" />
        </div>
        <h2 class="tw-mb-2" v-html="item.name"></h2>
        <p>
          {{ item.text }}
        </p>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts" setup>
const loadPage = ref(false);
const storePartner = partnerStore();
const { partnerList } = storeToRefs(storePartner);
onMounted(async () => {
  if (partnerList.value.length === 0) {
    try {
      loadPage.value = true;
      await storePartner.getPartnerList();
    } catch (e) {
      throw e;
    } finally {
      loadPage.value = false;
    }
  }
});
console.log(storePartner);
</script>
<style lang="scss" scoped></style>
