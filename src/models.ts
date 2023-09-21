export interface Service {
  id: string;
  name: string;
  text: string;
  img: string;
}

export interface NewsItem {
  id: string;
  name: string;
  text: string;
  img: string;
}

export interface NewsDetail {
  id: string;
  name: string;
  text: string;
  img: string;
}

export interface Partner {
  id: string;
  name: string;
  text: string;
  img: string;
}
export interface PartnerDetail {
  id: string;
  name: string;
  services: string[];
  phone: string;
  address: string;
  email: string;
  text: string;
  img: string;
}

export interface Notification {
  id: string;
  date: string;
  header: string;
  text: string;
}
