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
  <div id="news-detail" class="inner-page">

    <div id="news-detail-head">
      <!-- navigation -->
      <div id="news-detail-head-navigation" ref="backButton">
        <div @click="$router.go(-1)">
          <img class="ionicon" src="/icons/ion/outline/arrow-back-outline.svg">
        </div>
      </div>

      <!-- content -->
      <article id="news-detail-head-content">
        <header>
          <h1 class="title" v-html="post.title.rendered"></h1>
          <news-detail-meta :post="post" />
        </header>

        <div v-html="post.content.rendered"></div>
        <!-- <Disqus class="disqus" /> -->
      </article>

      <!-- sidebar -->
      <aside id="news-detail-head-sidebar">
        <div id="news-detail-head-sidebar-newest">
          <h1 class="title" style="font-weight: 700;">
            {{ $t("sidebar.newestTitle") }}
          </h1>
          <news-detail-newest />
        </div>
        <!-- <div id="news-detail-page-content-sidebar-related">
          <h1 class="title">{{ $t("sidebar.relatedTitle") }}</h1>
          <ul></ul>
        </div> -->
      </aside>
    </div>

  </div>
</template>

<script>
export default {
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
    // console.log('params:', params);

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

<style lang="scss">
#news-detail {
  &-head {
    display: grid;
    grid-template-columns: 35px 1.618fr 1fr;
    gap: 35px;

    @media (max-width: 1024px) {
      grid-template-columns: unset !important;
    }

    &-navigation {
      &.hidden {
        visibility: hidden;
        opacity: 0;
      }

      @media (max-width: 1024px) {
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
      gap: 25px;
      overflow: hidden;

      @media (max-width: 425px) {
        gap: 30px;
      }

      > header {
        h1 {
          line-height: 1.5;
          // padding-bottom: 5px;
          font-size: 22px;

          @media (max-width: 768px) {
            line-height: 1.2;
          }
        }
      }

      > div {
        text-align: justify;
        // padding-bottom: 75px;

        img[class^=wp-image] {
          height: 100% !important;
          max-width: 100%;
        }
      }

      > .disqus {
      }
    }

    &-sidebar {
      position: sticky;
      top: 100px;

      @media (min-width: 1025px) {
        padding-left: 15px;
      }

      > * {
        h1 {
          position: relative;
          text-transform: uppercase;
          margin-bottom: 15px;

          display: flex;
          gap: 10px;

          font-size: 18px;
          border-bottom: 1px solid #eee;

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
    } // SIDEBAR
  }

}
</style>
