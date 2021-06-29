<i18n>
{
  "vi": {
    "sidebar": {
      "newestTitle": "Mới nhất",
      "relatedTitle": "Tin liên quan"
    }
  },
  "en": {
    "sidebar": {
      "newestTitle": "Newest",
      "relatedTitle": "Related"
    }
  }
}
</i18n>

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
      <div id="news-detail-page-content-comments">
          <Disqus />
      </div>
    </div>

    <div id="news-detail-page-sidebar">
      <div id="news-detail-page-sidebar-newest">
        <h2 class="title">{{ $t("sidebar.newestTitle") }}</h2>
        <ul></ul>
      </div>

      <div id="news-detail-page-sidebar-related">
        <h2 class="title">{{ $t("sidebar.relatedTitle") }}</h2>
        <ul></ul>
      </div>
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
  async asyncData({$wp, $config, params}) {
    const post = (await $wp.$get(`/articles?slug=${params.slug}`));
    console.log(post);

    if (post.length) {
      return { post: post[0] };
    }

    // toError();
    return $config.$nuxt.error({ statusCode: 404, message: 'Page not found.' });
  },
  methods: {
    toError() {
      this.$nuxt.error({ statusCode: 404, message: 'Page not found.' });
    },
  },
};
</script>

<style lang="scss">
#news-detail-page {
  display: grid;
  grid-template-columns: 1.618fr 1fr;
  gap: 50px;

  @media (max-width: 992px) {
    grid-template-columns: unset !important;
  }


  &-content {
    &-title {
      padding-bottom: 50px;

      h2 {
        line-height: 1.5;
        padding-bottom: 5px;
      }
    }

    &-body {
      text-align: justify;
      padding-bottom: 75px;
    }

    &-comments {

    }
  }

  &-sidebar {
    @media (max-width: 992px) {
      padding-top: 35px;
    }

    > * {
      h2 {
        padding-bottom: 20px;
      }
    }

    &-related {
      h2 {
        padding-top: 50px;
      }
    }
  }
}
</style>
