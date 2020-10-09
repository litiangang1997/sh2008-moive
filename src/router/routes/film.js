export default {
  // 页面请求
  path: "/film",
  component: () => import("@/views/Film/Film"),
  redirect: "/film/nowplaying",
  // 子路由 嵌套路由
  children: [
    {
      path: "nowplaying",
      component: () => import("@/views/Film/NowPlaying"),
    },
    {
      path: "comingsoon",
      component: () => import("@/views/Film/ComingSoon"),
    },
  ],
};
