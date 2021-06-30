export default async ({ app }) => {
  app.router.afterEach((to, from) => {
    app.store.commit('menu/setActiveMenuItem', to.path);
  });
};
