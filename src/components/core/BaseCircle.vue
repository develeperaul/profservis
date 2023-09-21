<template>
  <div
    class="tw-grid tw-place-content-center tw-text-white tw-rounded-full"
    :class="[
      bg,
      size === 'base'
        ? 'tw-w-6 tw-h-6'
        : size === 'lg'
        ? ' tw-w-10.5 tw-h-10.5'
        : '',
    ]"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "base-circle",
});
</script>
<script setup lang="ts">
interface Props {
  bg?: string;
  size?: "base" | "lg";
}
const props = withDefaults(defineProps<Props>(), {
  bg: "tw-bg-blue",
  size: "base",
});
</script>
<style lang="scss" scoped></style>
