<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "base-icon",

  props: {
    prefix: {
      type: String,
      default: "icon",
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#333",
    },
  },
  setup(props) {
    const symbolId = computed(() => `svguse:#${props.prefix}-${props.name}`);
    return { symbolId };
  },
});
</script>
