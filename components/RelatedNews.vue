<template>
  <ul class="related-news">

    <li class="related-news-item" v-for="post in posts" :key="post.id">
      <nuxt-link :to="'/news/' + post.slug" class="related-news-item-link">
        <img class="related-news-item-thumbnail" :src="post.meta.thumbnail">
        <h3 class="related-news-item-title">
          <p v-html="post.title.rendered"></p>
        </h3>
      </nuxt-link>
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
    this.posts = await this.$wp.$get('/articles?per_page=3');
    // console.log(this.posts);
  },
};
</script>

<style lang="scss">
.related-news {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;

  &-item {
    list-style: none;
    background: red;
    height: 200px;
    overflow: hidden;
    position: relative;

    &-link {
      position: relative;
      z-index: 1;
      display: block;
      height: 100%;

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
          background: rgba(0, 0, 0, 0.5);
        }
      }

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      > h3 {
        font-size: 14px;
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        right: 0;

        padding: 75px 15px 10px;
        margin-bottom: 0;
        background: linear-gradient(to top, black, transparent);

        p {
          color: white;
          font-weight: 500;
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
    }
  }
}
</style>
