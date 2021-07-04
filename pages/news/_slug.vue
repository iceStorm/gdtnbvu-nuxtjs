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

    <!-- navigation -->
    <div id="news-detail-page-navigation" ref="backButton">
      <div @click="$router.go(-1)">
        <img class="ionicon" src="/icons/ion/outline/arrow-back-outline.svg">
      </div>
    </div>

    <div id="news-detail-page-content">
      <!-- content -->
      <article id="news-detail-page-content-body">
        <header>
          <h1 class="title" v-html="post.title.rendered"></h1>
          <news-detail-meta :post="post" />
        </header>
        <p v-html="post.meta.content"></p>
        <Disqus class="disqus" />
      </article>

      <!-- sidebar -->
      <aside id="news-detail-page-content-sidebar">
        <div id="news-detail-page-content-sidebar-newest">
          <h1 class="title">{{ $t("sidebar.newestTitle") }}</h1>
          <related-news />
        </div>

        <div id="news-detail-page-content-sidebar-related">
          <h1 class="title">{{ $t("sidebar.relatedTitle") }}</h1>
          <ul></ul>
        </div>
      </aside>
    </div>

  </div>
</template>

<script>
import RelatedNews from '~/components/RelatedNews.vue';
export default {
  components: { RelatedNews },
  scrollToTop: false,
  head() {
    return {
      title: this.post.title.rendered,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.title.rendered,
        },
      ],
    };
  },
  data() {
    return {
    };
  },
  async asyncData({ $wp, redirect, error, params }) {
    const post = (await $wp.$get(`/articles?slug=${params.slug}`));
    // console.log(post);

    if (post.length) {
      return { post: post[0] };
    }

    // toError();
    return redirect({ path: '/404' });
    // return error({ statusCode: 404, message: 'Page not found.' });
  },
  methods: {
    toError() {
      this.$nuxt.error({ statusCode: 404, message: 'Page not found.' });
    },
  },
};
</script>

<style lang="scss" scoped>
#news-detail-page {
  display: grid;
  grid-template-columns: 35px auto;
  gap: 75px;

  @media (max-width: 1192px) {
    grid-template-columns: 1.618fr 1fr;
  }

  @media (max-width: 992px) {
    grid-template-columns: unset !important;
  }

  &-navigation {
    &.hidden {
      visibility: hidden;
      opacity: 0;
    }

    @media (max-width: 1192px) {
      display: none !important;
    }

    > div {
      visibility: visible;
      opacity: 1;

      position: sticky;
      top: 100px;
      width: 30px;
      height: 30px;

      border-radius: 50%;
      border: 2px solid #eee;
      background: var(--bg-color);

      &:hover {
        background: var(--color-hover-gray);
      }

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 20px;
        cursor: pointer;
      }
    }
  }

  &-content {
    display: grid;
    gap: 70px;

    @media (max-width: 425px) {
      gap: 30px;
    }

    &-body {
      > header {
        padding-bottom: 50px;

        @media (max-width: 768px) {
          padding-bottom: 35px;
        }

        h1 {
          line-height: 1.5;
          padding-bottom: 5px;
          font-size: 26px;

          @media (max-width: 768px) {
            line-height: 1.2;
          }
        }
      }

      > p {
        text-align: justify;
        padding-bottom: 75px;
      }

      > .disqus {
      }
    }

    &-sidebar {
      @media (max-width: 992px) {
        padding-top: 35px;
      }

      > * {
        h1 {
          padding-bottom: 5px;
          position: relative;
          text-transform: uppercase;

          &::before {
            content: '';
            position: absolute;
          }
        }
      }

      &-related {
        h1 {
          padding-top: 50px;
        }
      }
    }
  }

}
</style>
