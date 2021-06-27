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
    <h1 class="title"><strong>{{ $t('newsGrid.title') }}</strong></h1>
    <div id="posts-grids">
      <div class="posts-grid left">
        <a v-for="post in leftPosts" :key="post.id"
          :href="'/news/' + post.slug" class="posts-grid-item"
          >

          <img :src="post.meta.wide_thumbnail || post.meta.thumbnail"
          class="posts-grid-item-thumbnail">
          <span class="posts-grid-item-title">{{ post.meta.title }}</span>
        </a>
      </div>

      <div class="posts-grid right">
        <a v-for="post in rightPosts" :key="post.id"
          :href="'/news/' + post.slug" class="posts-grid-item"
          >
          <img :src="post.meta.wide_thumbnail || post.meta.thumbnail"
          class="posts-grid-item-thumbnail">
          <span class="posts-grid-item-title">{{ post.meta.title }}</span>
        </a>
      </div>
    </div>

    <nuxt-link to="/news" id="btn-news-grid-view-more" class="">
      <strong>{{ $t('newsGrid.viewMoreTitle') }}</strong>
    </nuxt-link>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    leftPosts() {
      return this.posts.slice(0, 3);
    },
    rightPosts() {
      return this.posts.slice(-3);
    },
  },
  async fetch() {
    this.posts = await this.$wp.$get('/articles?per_page=6');
  },
});
</script>

<style lang="scss">
:root {
  --news-grid-gap: 35px;

  @media (max-width: 576px) {
    --news-grid-gap: 15px;
  }
}

#news-grid {
  h1 {
    text-align: center;
  }

  #btn-news-grid-view-more {
    // display: inline-block;

    margin-bottom: 25px;
    float: right;
    text-align: right;

    font-size: 18px;
    font-weight: bold;
    color: #000;

    // background: url('/patterns/underline-3.svg');
  }
}

#posts-grids {
  padding: 30px 0;
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
      position: relative;
      overflow: hidden;
      // border-radius: 6px;
      // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

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
        &::after {
          background: rgba(0, 0, 0, 0.5);
        }
      }

      .posts-grid-item-thumbnail {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .posts-grid-item-title {
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 5px 10px;

        background: rgba(154, 231, 255, 0.5);
        backdrop-filter: blur(20px) saturate(180%);

        font-weight: 500;
        color: white;
        text-shadow: 2px 2px 5px gray;

        line-height: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
