<i18n>
{
  "vi": {
    "sidebar": {
      "newestTitle": "Bài đăng mới nhất",
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
  <div id="news-detail">

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

        <p v-html="post.meta.content"></p>
        <!-- <Disqus class="disqus" /> -->
      </article>
    </div>

    <!-- sidebar -->
    <aside id="news-detail-sidebar">
      <div id="news-detail-sidebar-newest">
        <h1 class="title" style="font-weight: 700;">
          <ion-icon name="sparkles"></ion-icon>
          {{ $t("sidebar.newestTitle") }}
        </h1>
        <related-news />
      </div>
      <!-- <div id="news-detail-page-content-sidebar-related">
        <h1 class="title">{{ $t("sidebar.relatedTitle") }}</h1>
        <ul></ul>
      </div> -->
    </aside>

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
    grid-template-columns: 35px auto;
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
      gap: 40px;

      @media (max-width: 425px) {
        gap: 30px;
      }

      > header {
        h1 {
          line-height: 1.5;
          padding-bottom: 5px;
          font-size: 22px;

          @media (max-width: 768px) {
            line-height: 1.2;
          }
        }
      }

      > p {
        text-align: justify;
        padding-bottom: 75px;

        img[class^=wp-image] {
          height: 100% !important;
        }
      }

      > .disqus {
      }
    }
  }

  &-sidebar {
    margin-top: 25px;
    padding-top: 15px;
    border-top: 1px solid rgba(156, 156, 156,.5);

    > * {
      h1 {
        padding-bottom: 5px;
        position: relative;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        gap: 10px;

        font-size: 18px;

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
</style>
