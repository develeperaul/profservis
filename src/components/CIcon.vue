<script setup>
import { computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  custom: {
    type: Boolean,
    default: false,
  },
});
const computedName = computed(() => {
  if (props.custom) {
    return `svguse:#icon-${props.name}`;
  }
  return props.name;
});
</script>
<template>
  <q-icon :name="computedName" class="tw-text-red"> </q-icon>
</template>
