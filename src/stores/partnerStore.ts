import { defineStore } from "pinia";
import { partners, partnerDetail } from "src/api";
import { Partner, PartnerDetail } from "src/models";
export default defineStore("partner", () => {
  const partnerList = ref<Partner[]>([]);
  const getPartnerList = async () => {
    partnerList.value = await partners();
  };
  const getDetailPartner = async (id: string) => (await partnerDetail(id))[0];
  return {
    partnerList,
    getPartnerList,
    getDetailPartner,
  };
});
