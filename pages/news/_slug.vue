<template>
  <div id="news-detail-page">
    <h1>Slug: {{ slug }}</h1>
    <h2>{{ post.title }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: '',
      post: {},
    };
  },
  async fetch() {
    const query = encodeURIComponent(`/articles?slug=${this.$route.params.slug}`);
    console.log(this.$route.params.slug, query);
    // this.post = await this.$wp.$get(`/articles`);
  },
};
</script>

<style lang="scss">

</style>
