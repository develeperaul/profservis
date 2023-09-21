import ky from "ky";
import {
  Service,
  NewsItem,
  NewsDetail,
  Partner,
  PartnerDetail,
  Notification,
} from "src/models";
const api = ky.create({
  prefixUrl: process.env.BASE_URL + process.env.BASE_URL_PREFIX,
});

export const fcm = (token: string) => {
  const body = new FormData();
  body.append("token_fcm", token);
  return api.post("fcm.php", { body }).json();
};

export const services = (): Promise<Service[]> =>
  api("services_list.php").json();

export const news = (tab: 1 | 2 | 3): Promise<NewsItem[]> =>
  api(`news_list.php?id=${tab}`).json();
export const newsDetail = (id: string): Promise<NewsDetail[]> =>
  api(`news_element.php?id=${id}`).json();
export const partners = (): Promise<Partner[]> =>
  api("partners_list.php").json();
export const partnerDetail = (id: string): Promise<PartnerDetail[]> =>
  api(`partners_element.php?id=${id}`).json();
export const upload = (file: File): Promise<{ id: string; url: string }[]> => {
  const body = new FormData();
  body.append("photo", file);
  return api.post("upload_file.php", { body }).json();
};
export const getUrlId = (id: number): Promise<void> =>
  api(`get_file.php?id=${id}`).json();
export const createReview = (obj: {
  name: string;
  phone: string;
  otziv: string;
}): Promise<void> => {
  const { name, phone, otziv } = obj;
  const body = new FormData();
  body.append("name", name);
  body.append("phone", phone);
  body.append("otziv", otziv);
  return api.post("feedback.php", { body }).json();
};

export const reccal = (obj: { name: string; phone: string }): Promise<void> => {
  const { name, phone } = obj;
  const body = new FormData();
  body.append("name", name);
  body.append("phone", phone);
  return api.post("recall.php", { body }).json();
};
export const createRequest = (obj: {
  type: string;
  description: string;
  photo: string[];
  name: string;
  address: string;
  phone: string;
}): Promise<void> => {
  const body = new FormData();

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((val, index) => {
        body.append(key + "[]", val);
      });
    } else {
      body.append(key, obj[key]);
    }
  }

  return api.post("create_request.php", { body }).json();
};

export const pushList = (): Promise<Notification[]> => {
  return api("push_list.php").json();
};
