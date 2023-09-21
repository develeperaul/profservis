import { defineStore } from "pinia";
import {
  upload,
  getUrlId,
  createRequest,
  createReview,
  reccal,
  pushList,
} from "src/api";
import { Notification } from "src/models";
import { useStorage } from "@vueuse/core";
export default defineStore("other", () => {
  const notifications = ref<Notification[]>([]);
  const readNotificationsIdList = useStorage(
    "read-notifications-idlist",
    [] as string[]
  );
  const freeNotifications = computed(() => {
    return notifications.value.filter(
      (item) => readNotificationsIdList.value.indexOf(item.id) == -1
    );
  });
  const readNotifications = useStorage(
    "read-notifications",
    <Notification[]>[]
  );
  const setReadNotifications = () => {
    readNotifications.value = notifications.value;
    readNotificationsIdList.value = notifications.value.map((item) => {
      return item.id;
    });
  };
  const uploadFile = async (file: File) => {
    return (await upload(file))[0];
  };
  const getUrlIdPhoto = async (id: number) => {
    return await getUrlId(id);
  };
  const newRequest = async (obj: {
    type: string;
    description: string;
    photo: string[];
    name: string;
    address: string;
    phone: string;
  }) => {
    try {
      await createRequest(obj);
    } catch (e) {
      throw e;
    }
  };
  const newReview = async (obj: {
    name: string;
    phone: string;
    otziv: string;
  }) => {
    await createReview(obj);
  };
  const newReccal = async (obj: { name: string; phone: string }) => {
    await reccal(obj);
  };
  const getNotification = async () => {
    notifications.value = await pushList();
  };
  return {
    freeNotifications,
    readNotifications,
    readNotificationsIdList,
    notifications,
    uploadFile,
    getUrlIdPhoto,
    newRequest,
    newReview,
    newReccal,
    getNotification,
    setReadNotifications,
  };
});
