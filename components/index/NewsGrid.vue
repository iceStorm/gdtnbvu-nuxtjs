<i18n>
{
  "vi": {
    "newsGrid": {
      "title": "Tin tức mới nhất",
      "viewMoreTitle": "Xem thêm"
    }
  },
  "en": {
    "newsGrid": {
      "title": "Newest articles",
      "viewMoreTitle": "View more"
    }
  }
}
</i18n>

<template>
  <div id="news-grid">
    <div class="inner-page">
      <IndexCallToActions />

      <h1 class="title"><strong>{{ $t('newsGrid.title') }}</strong></h1>
      <div id="posts-grids">
        <div class="posts-grid left">

          <v-skeleton-loader class="posts-grid-item" type="card" v-for="i in 3" :key="i" v-if="!posts.length">
          </v-skeleton-loader>

          <nuxt-link
            v-if="posts.length"
            v-for="(post, index) in leftPosts"
            :key="post.id"
            :to="'/news/p/' + post.slug"
            class="posts-grid-item">
            <img :src="index === 0 ? post.meta.wide_thumbnail : post.meta.thumbnail" class="posts-grid-item-thumbnail" loading="lazy">
            <span class="posts-grid-item-title">
              <p v-html="post.title.rendered"></p>
            </span>
          </nuxt-link>
        </div>

        <div class="posts-grid right">
          <v-skeleton-loader class="posts-grid-item" type="card" v-for="i in 3" :key="i" v-if="!posts.length">
          </v-skeleton-loader>

          <nuxt-link
            v-if="posts.length"
            v-for="(post, index) in rightPosts"
            :key="post.id"
            :to="'/news/p/' + post.slug"
            class="posts-grid-item">
            <img :src="index === 0 ? post.meta.wide_thumbnail : post.meta.thumbnail" class="posts-grid-item-thumbnail" loading="lazy">
            <div class="posts-grid-item-title">
              <p v-html="post.title.rendered"></p>
            </div>
          </nuxt-link>
        </div>
      </div>

      <nuxt-link to="/news" id="btn-news-grid-view-more" class="">
        <strong class="more">{{ $t('newsGrid.viewMoreTitle') }}</strong>
      </nuxt-link>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    leftPosts() {
      return this.posts.slice(0, 1).concat(this.posts.slice(2, 4));
    },
    rightPosts() {
      return this.posts.slice(1, 2).concat(this.posts.slice(4, 6));
    },
  },
  async fetch() {
    this.posts = await this.$wp.$get('/articles?per_page=6');

    // const leftPost = this.posts.slice(0, 1).concat(this.posts.slice(2, 4));
    // const rightPost = this.posts.slice(1, 2).concat(this.posts.slice(3, 5));

    // console.log(leftPost, rightPost);
  },
};
</script>

<style lang="scss">
:root {
  --news-grid-gap: 35px;
  --news-grid-radius: 0px;

  @media (max-width: 576px) {
    --news-grid-gap: 15px;
  }
}

#news-grid {
  position: relative;
  &::before {
    content: "";

    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: url('/pages/index/news-grid/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.35;
  }

  &::after {
    content: "";

    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(to bottom, transparent, white);
    // opacity: 0.15;
  }

  h1 {
    text-align: center;
  }

  #btn-news-grid-view-more {
    // display: inline-block;

    margin-bottom: 25px;
    float: right;
    text-align: right;

    font-size: 16px;
    color: #000;

    // background: url('/patterns/underline-3.svg');
  }
}

#posts-grids {
  padding: 10px 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--news-grid-gap);
  transition: all .35s ease-in-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;;
  }

  img {
    max-width: 100%;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--news-grid-gap);

    .posts-grid-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;

      position: relative;
      overflow: hidden;
      min-height: 150px;
      border-radius: var(--news-grid-radius);

      border: none;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      border: 0.5px solid rgba(255, 255, 255, 0.267);

      &:nth-child(1) {
        grid-column: 1 / span 2;
      }

      &::after {
        content: "";

        position: absolute;
        z-index: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        background: transparent;
        transition: all .25s ease-in-out;
      }

      &:hover {
        p {
          color: var(--color-primary);
        }

        &::after {
          background: rgba(65, 45, 45, 0.25);
        }
      }

      &-thumbnail {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &-title {
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        right: 0;

        padding: 75px 15px 10px;
        background: linear-gradient(to top, black, transparent);

        p {
          color: white;
          font-weight: 600;
          text-transform: uppercase;
          text-shadow: 2px 2px 5px gray;
          margin-bottom: 0;

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-height: 20px;     /* fallback */
          max-height: 40px;      /* fallback */
          -webkit-line-clamp: 2; /* number of lines to show */
          -webkit-box-orient: vertical;

          @media (max-width: 425px) {
            line-height: 17px;     /* fallback */
            max-height: 32px;      /* fallback */
            font-size: 10px;
          }
        }
      }
    } // .posts-grid-item
  } // .posts-grid
}
</style>
