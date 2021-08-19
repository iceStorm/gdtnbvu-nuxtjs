  <i18n>
{
  "vi": {
    "news": {
      "viewMoreTitle": "Xem thêm"
    }
  },
  "en": {
    "news": {
      "viewMoreTitle": "View more"
    }
  }
}
</i18n>

  
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
            <!-- post date -->
            <div class="news-page-list-item-meta-info-date">
              <!-- <img src="/icons/ion/outline/calendar-clear-outline.svg" class="ionicon"> -->
              <span class="text">{{ getDateString(post.date) }}</span>
            </div>

            <!-- post category -->
            <nuxt-link class="news-page-list-item-meta-info-category"
            :to="{ name: 'news', params: { slug: post.category_meta[0].slug } }">
              <!-- <img src="/icons/ion/outline/folder-open-outline.svg" class="ionicon"> -->
              #{{ post.category_meta[0].name }}
            </nuxt-link>

            <!-- post author -->
            <!-- <div class="news-page-list-item-meta-info-author">
              <img :src="post.author_meta.avatar_urls['24']" style="border-radius: 50%;">
              <span class="text">{{ post.author_meta.name }}</span>
            </div> -->
          </div>

          <h3 class="news-page-list-item-meta-excerpt text" v-html="post.excerpt.rendered"></h3>
        </div>
      </div>

    </div>

    <button class="news-page-view-more-btn"
      @click="fetchMorePosts()"
      v-if="current_page_index < total_pages">
      <h3>{{ $t('news.viewMoreTitle') }}</h3>
    </button>
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
      posts: [],
      current_category: '',
      current_page_index: 1,
      total_pages: 1,
    };
  },

  async asyncData({ $wp, params, redirect, store }) {
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

    const perPage = `${queryString ? '&' : '?'}per_page=${store.state.configs.news.perPage}`;
    const posts = await $wp.get(`/articles${queryString}${perPage}`);

    // pagination
    const totalPages = posts.headers['x-wp-totalpages'];
    console.info('totalPages:', totalPages);

    // retrieving current post category
    articleType = articleType ? articleType.slug : '';
    // console.info(articleType);

    return { posts: posts.data, current_category: articleType, total_pages: totalPages };
  },

  methods: {
    getDateString(date) {
      return this.$moment(date).format('DD-MM-YYYY');
    },
    async fetchMorePosts() {
      console.info('fetching more posts...');

      const articleTypes = this.current_category ? `?article_types=${this.current_category}` : '';
      const perPage = `${articleTypes ? '&' : '?'}per_page=${this.$store.state.configs.news.perPage}`;
      const nextPosts = await this.$wp.get(`/articles${articleTypes}${perPage}&page=${this.current_page_index + 1}`);

      this.posts.push(...nextPosts.data);
      this.current_page_index += 1;
      console.log(nextPosts);
      console.log(this.posts);
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

  &-view-more-btn {
    padding: 10px 25px;
    border-radius: 99px;
    background: var(--color-primary);
    color: #000000;

    width: fit-content;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      margin-bottom: 0;
    }

    &:hover {
      background: #38c7da;
      // color: white;
    }
  }

  &-list {
    display: flex;
    flex-direction: column;

    &-item {
      padding: 25px 0;
      border-bottom: 1px solid rgba(154, 154, 154, 0.5);

      display: flex;
      gap: 20px;

      @media (max-width: 470px) {
        flex-direction: column;
      }

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
        flex: 1 1 0;

        &-title {
          text-transform: uppercase;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-height: 20px;     /* fallback */
          max-height: 40px;      /* fallback */
          -webkit-line-clamp: 2; /* number of lines to show */
          -webkit-box-orient: vertical;

          &:hover {
            text-decoration: underline;
          }
        }
        &-excerpt {
          p {
            padding-bottom: 0;
            margin-bottom: 0;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-height: 20px;     /* fallback */
            max-height: 40px;      /* fallback */
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
          }

          font-weight: 300;
          padding-top: 20px;
        }

        &-info {
          display: flex;
          align-items: center;
          gap: 35px;
          // padding-top: 10px;

          @media (max-width: 530px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
          }

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
