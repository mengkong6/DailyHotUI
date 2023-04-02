import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      // 系统主题
      siteTheme: "light",
      // 新闻类别
      newsArr: [
        {
          label: "B站热搜",
          value: "bilibili",
          order: 0,
          show: true,
        },
        {
          label: "微博",
          value: "weibo",
          order: 1,
          show: true,
        },
        {
          label: "知乎",
          value: "zhihu",
          order: 2,
          show: true,
        },
        {
          label: "AcFun日榜",
          value: "acfun",
          order: 3,
          show: true,
        },
        {
          label: "百度",
          value: "baidu",
          order: 4,
          show: true,
        },
        {
          label: "少数派",
          value: "sspai",
          order: 5,
          show: false,
        },
        {
          label: "IT之家",
          value: "ithome",
          order: 6,
          show: true,
        },
        {
          label: "澎湃新闻",
          value: "thepaper",
          order: 7,
          show: false,
        },
        {
          label: "今日头条",
          value: "toutiao",
          order: 8,
          show: true,
        },
        {
          label: "百度贴吧",
          value: "tieba",
          order: 9,
          show: false,
        },
        {
          label: "稀土掘金",
          value: "juejin",
          order: 10,
          show: true,
        },
        {
          label: "腾讯新闻",
          value: "tencent",
          order: 11,
          show: false,
        },
        {
          label: "抖音",
          value: "douyin",
          order: 12,
          show: true,
        },
        {
          label: "搜狗新闻",
          value: "sougou",
          order: 13,
          show: false,
        },
        {
          label: "历史今日",
          value: "history",
          order: 14,
          show: false,
        },
        {
          label: "哔哩哔哩日榜",
          value: "biliall",
          order: 15,
          show: false,
        },
        {
          label: "掘金前端",
          value: "juejinqian",
          order: 16,
          show: false,
        },
        {
          label: "掘金后端",
          value: "juejinhou",
          order: 17,
          show: false,
        },
        {
          label: "掘金代码人生",
          value: "juejinlife",
          order: 18,
          show: false,
        },
        {
          label: "36氪",
          value: "36kr",
          order: 19,
          show: false,
        },
      ],
      // 链接跳转方式
      linkOpenType: "open",
      // 页头固定
      headerFixed: true,
      // 时间数据
      timeData: null,
    };
  },
  getters: {},
  actions: {
    // 更改系统主题
    setSiteTheme(val) {
      $message.info(`已切换至${val === "dark" ? "深色模式" : "浅色模式"}`, {
        showIcon: false,
      });
      this.siteTheme = val;
    },
  },
  persist: [
    {
      storage: localStorage,
      paths: ["siteTheme", "newsArr", "linkOpenType", "headerFixed"],
    },
  ],
});
