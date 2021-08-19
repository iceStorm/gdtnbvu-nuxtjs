<template>
  <div id="news-detail-content-title-meta">
    <div id="news-detail-content-title-meta-author">
      <img :src="post.author_meta.avatar_urls['24']" style="border-radius: 50%;">
      <span>{{ post.author_meta.name }}</span>
    </div>

    <div id="news-detail-content-title-meta-date">
      <img src="/icons/ion/outline/calendar-clear-outline.svg" class="ionicon">
      <span>{{ getDateString(post.date) }}</span>
    </div>

    <div id="news-detail-content-title-meta-category">
      <img src="/icons/ion/outline/folder-open-outline.svg" class="ionicon">
      <nuxt-link :to="'/news/'+post.category_meta[0].slug">
        <span class="link">{{ post.category_meta[0].name }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'post',
  ],
  computed: {
  },
  methods: {
    getDateString(date) {
      return this.$moment(date).format('DD-MM-YYYY');
    },
  },
};
</script>

<style lang="scss">
#news-detail-content-title-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;

  @media (max-width: 425px) {
    gap: 10px;
  }

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;

    &:first-child {
      @media (max-width: 425px) {
        flex-basis: 100%;
        order: 3;
        justify-content: flex-start;
      }
    }

    span:not([class^=link]) {
      line-height: 1;
      color: var(--color-text);
    }

    &:not(:first-child) {
      img {
        width: 20px;
      }
    }
  }
}
</style>
