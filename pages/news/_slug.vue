  <template>
  <div class="news-page inner-page">
    <NewsCategoryPicker :current_category="current_category" />

    <div class="news-page-list">

      <div class="news-page-list-item" v-for="post in posts" :key="post.id">
        <nuxt-link :to=" 'news/p/'+post.slug ">
          <img :src="post.meta.thumbnail" class="thumbnail">
        </nuxt-link>

        <div class="news-page-list-item-meta">
          <nuxt-link :to=" 'news/p/'+post.slug " class="news-page-list-item-meta-title">
            <h3 class="title" v-html="post.title.rendered"></h3>
          </nuxt-link>

          <div class="news-page-list-item-meta-info">
            <!-- post category -->
            <nuxt-link class="news-page-list-item-meta-info-category"
            :to="{ name: 'news', params: { slug: post.category_meta[0].slug } }">
              <!-- <img src="/icons/ion/outline/folder-open-outline.svg" class="ionicon"> -->
              {{ post.category_meta[0].name }}
            </nuxt-link>

            <!-- post date -->
            <div class="news-page-list-item-meta-info-date">
              <!-- <img src="/icons/ion/outline/calendar-clear-outline.svg" class="ionicon"> -->
              {{ getDateString(post.date) }}
            </div>

            <!-- post author -->
            <div class="news-page-list-item-meta-info-author">
              <img :src="post.author_meta.avatar_urls['24']" style="border-radius: 50%;">
              {{ post.author_meta.name }}
            </div>
          </div>

          <h3 class="news-page-list-item-meta-excerpt" v-html="post.excerpt.rendered"></h3>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: false,
  head: {
    title: 'Tin tức',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Tin tức mới nhất.' },
    ],
  },

  data() {
    return {
      current_category: '',
    };
  },

  async asyncData({ $wp, params, redirect }) {
    // console.log('news category params:', params);

    let queryString = '';
    let articleType = null;

    if (params.slug) {
      // gettting the article type object
      try {
        const response = await $wp.get(`/article_types?slug=${params.slug}`);
        [articleType] = response.data;
        queryString = `?article_types=${articleType.id}`;
      } catch (error) {
        console.error(error);
        redirect({ path: '/404' });
      }
    }

    // default: per_page=10
    const posts = (await $wp.get(`/articles${queryString}`));
    // console.log('posts:', posts);

    articleType = articleType ? articleType.slug : '';
    // console.info(articleType);
    return { posts: posts.data, current_category: articleType };
  },

  methods: {
    getDateString(date) {
      return this.$moment(date).format('DD-MM-YYYY');
    },
  },
};
</script>

<style lang="scss">
.news-page {

  &.inner-page {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  &-list {
    display: flex;
    flex-direction: column;

    &-item {
      padding: 25px 0;
      border-bottom: 1px solid rgba(154, 154, 154, 0.5);

      display: flex;
      gap: 20px;

      img.thumbnail {
        height: 165px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        border: 2px solid dodgerblue;

        position: relative;
        z-index: 0;
        &::after {
          content: "";
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity .35s;
        }

        &:hover {
          &::after {
            opacity: 1;
          }
        }
      }

      &-meta {
        &-title {
          text-transform: uppercase;
          &:hover {
            text-decoration: underline;
          }
        }
        &-excerpt {
          font-weight: 300;
          padding-top: 20px;
        }

        &-info {
          display: flex;
          align-items: center;
          gap: 35px;

          > * {
            display: flex;
            align-items: center;
            gap: 5px;

            img {
              width: 20px;
              height: 20px;
            }
          }

          &-category {

          }
          &-date {

          }
          &-author {
            img {
              border-radius: 50%;
              border: 1px solid #eee;
            }
          }
        }
      }
    }
  }
}
</style>
