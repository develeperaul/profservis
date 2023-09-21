import { defineStore } from "pinia";
import { news, newsDetail } from "src/api";
import { NewsItem } from "src/models";
export default defineStore("news", () => {
  const newsList = ref<NewsItem[]>();
  const getNews = async (id: 1 | 2 | 3) => (newsList.value = await news(id));
  const getNewsDetail = async (id: string) => (await newsDetail(id))[0];
  return {
    newsList,
    getNews,
    getNewsDetail,
  };
});
