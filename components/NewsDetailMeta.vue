<template>
  <div id="news-detail-content-title-meta">
    <div id="news-detail-content-title-meta-author">
      <img :src="post.author_meta.avatar_urls['24']">
      <span>{{ post.author_meta.name }}</span>
    </div>

    <div id="news-detail-content-title-meta-date">
      <img src="/icons/ion/outline/calendar-clear-outline.svg">
      <span>{{ post.date }}</span>
    </div>

    <div id="news-detail-content-title-meta-category">
      <img src="/icons/ion/outline/folder-open-outline.svg">
      <span>{{ post.category_meta[0].slug }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'post',
  ],
};
</script>

<style lang="scss">
#news-detail-content-title-meta {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;

    &:not(:first-child) {
      img {
        width: 20px;
      }
    }
  }
}
</style>
