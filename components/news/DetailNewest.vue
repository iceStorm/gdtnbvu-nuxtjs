<template>
  <ul class="related-news">

    <li class="related-news-item" v-for="post in posts" :key="post.id">
      <nuxt-link :to="'/news/p/' + post.slug" class="related-news-item-thumbnail">
        <img :src="post.meta.thumbnail">
      </nuxt-link>

      <div class="related-news-item-meta">
        <nuxt-link :to="'/news/p/' + post.slug" class="related-news-item-meta-title">
          <h3 class="text" v-html="post.title.rendered"></h3>
        </nuxt-link>
        <h4 class="text related-news-item-meta-date">{{ getDateString(post.date) }}</h4>
        <div class="related-news-item-meta-excerpt text" v-html="post.excerpt.rendered"></div>
      </div>
    </li>

  </ul>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    this.posts = await this.$wp.$get('/articles?per_page=5');
    // console.log(this.posts);
  },
  methods: {
    getDateString(date) {
      return this.$moment(date).format('DD-MM-YYYY');
    },
  },
};
</script>

<style lang="scss">
.related-news {
  display: grid;
  gap: 30px;

  &-item {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 10px;
    list-style: none;

    &-thumbnail {
      width: 122px;
      height: 122px;
      border: 0.5px solid dodgerblue;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-meta {
      flex: 1 1 0;

      &-title {
        font-size: 14px;
        &:hover {
          text-decoration: underline;
        }

        h3 {
          font-weight: 500;
          text-transform: uppercase;
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

      &-date {
        font-weight: 300;
      }

      &-excerpt {
        // display: none;
        p {
          // padding-bottom: 0;
          // margin-bottom: 0;
          font-weight: 300;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-height: 20px;     /* fallback */
          max-height: 40px;      /* fallback */
          -webkit-line-clamp: 2; /* number of lines to show */
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
