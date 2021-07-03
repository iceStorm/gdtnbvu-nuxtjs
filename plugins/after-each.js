export default async ({ app }) => {
  app.router.afterEach((to, from) => {
    // console.log(to);
    app.store.commit('menu/setActiveMenuItem', `${to.path}`);
  });
};
