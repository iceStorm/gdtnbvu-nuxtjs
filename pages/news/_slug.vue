<template>
  <div id="news-detail-page">
    <div id="news-detail-page-content">
      <div id="news-detail-page-content-title">
        <h2 class="title">{{ post.title.rendered }}</h2>
        <news-detail-meta :post="post" />
      </div>
      <div id="news-detail-page-content-body">
        <p v-html="post.meta.content"></p>
      </div>
      <div id="news-detail-page-content-comments"></div>
    </div>

    <div id="news-detail-page-sidebar">
      <h3>Sidebar</h3>
    </div>
  </div>
</template>

<script>
import NewsDetailMeta from '~/components/NewsDetailMeta.vue';
export default {
  components: { NewsDetailMeta },
  scrollToTop: false,
  data() {
    return {
    };
  },
  async asyncData({$wp, params}) {
    const post = (await $wp.$get(`/articles?slug=${params.slug}`))[0];
    console.log(post);

    return { post };
  },
};
</script>

<style lang="scss">
#news-detail-page {
  display: grid;
  grid-template-columns: 1.618fr 1fr;
  gap: 35px;

  &-content {


    &-title {
      padding-bottom: 50px;

      h2 {
        line-height: 1.5;
        padding-bottom: 20px;
      }
    }

    &-body {
      text-align: justify;
    }

    &-comments {

    }
  }

  &-sidebar {

  }
}
</style>
