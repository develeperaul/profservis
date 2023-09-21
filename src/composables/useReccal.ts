export default (successCall: globalThis.Ref<boolean>) => {
  const storeOther = otherStore();
  const popupCall = ref(false);
  const requestCall = ref({
    name: "",
    phone: "",
  });
  // const successCall = ref(false)

  const loadingCall = ref(false);
  const onSubmit = async () => {
    try {
      loadingCall.value = true;
      await storeOther.newReccal({
        name: requestCall.value.name,
        phone: requestCall.value.phone,
      });
      successCall.value = true;
    } catch (e) {
      throw e;
    } finally {
      popupCall.value = false;
      loadingCall.value = false;
    }
  };
  return {
    popupCall,
    loadingCall,
    successCall,
    onSubmit,
    requestCall,
  };
};
