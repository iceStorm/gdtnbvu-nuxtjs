export default async ({ app }) => {
  app.router.afterEach((to, from) => {
    console.log('to:', to);

    // console.log(app);
    app.store.commit('menu/setActiveMenuItem', to.path);
  });
};
