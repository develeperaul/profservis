import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "call", name: "call", component: () => import("pages/Call.vue") },
      {
        path: "partners",
        name: "partners",
        component: () => import("pages/Partners.vue"),
      },
      {
        path: "partners/:id",
        name: "partner",
        component: () => import("pages/Partner.vue"),
        props: true,
        meta: { parent: "partner" },
      },
      { path: "contacts", component: () => import("pages/Contacts.vue") },
      { path: "news", name: "news", component: () => import("pages/News.vue") },
      {
        path: "news/:id",
        name: "news-page",
        component: () => import("pages/NewsPage.vue"),
        props: true,
        meta: { parent: "news" },
      },
    ],
  },
  {
    path: "/notifications",
    component: () => import("layouts/OtherLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Notifications.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
