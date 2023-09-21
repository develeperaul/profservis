import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { PushNotifications } from "@capacitor/push-notifications";
import { fcm } from "src/api";
export default ({ app, router }) => {
  app.provide("$url", process.env.BASE_URL ? process.env.BASE_URL : "");
  app.config.globalProperties.$hapticsImpactMedium = hapticsImpactMedium;
  app.directive("haptics", {
    mounted: function (el, binding) {
      document.addEventListener("touchstart", hapticsImpactMedium);
    },
    unmounted: function (el) {
      document.removeEventListener("touchstart", hapticsImpactMedium);
    },
  });

  PushNotifications.requestPermissions().then(async (result) => {
    console.log(result.receive);
    if (result.receive === "granted") {
      await PushNotifications.register();
      await PushNotifications.createChannel({
        id: "relay",
        name: "relay",

        importance: 2,
        visibility: 2,
        lights: true,

        vibration: true,
      });
      // await PushNotifications.deleteChannel({
      //   id: "fcm_fallback_notification_channel",
      // });
      // await PushNotifications.deleteChannel({
      //   id: "PushDefaultForeground",
      // });
      console.log(await PushNotifications.listChannels());
    }
  });
  PushNotifications.addListener("registration", async (token) => {
    await fcm(token.value);
  });
  PushNotifications.addListener("pushNotificationReceived", (notification) => {
    // notification.vibration = true;
    console.info("notification : ", JSON.stringify(notification));
  });
  PushNotifications.addListener(
    "pushNotificationActionPerformed",
    (notification) => {
      router.push("/notifications");
    }
  );
};

async function hapticsImpactMedium(event) {
  await Haptics.vibrate({ duration: 20 });
}
