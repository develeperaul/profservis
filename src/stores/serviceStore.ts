import { defineStore } from "pinia";
import { services } from "src/api";
import { Service } from "src/models";
export default defineStore("servise", () => {
  const serviceList = ref<Service[]>([]);
  const getServices = async () => {
    try {
      serviceList.value = await services();
    } catch (e) {
      throw e;
    }
  };
  return {
    serviceList,
    getServices,
  };
});
