<i18n>
{
  "vi": {
    "news": {
      "allTitle": "Tất cả"
    }
  },
  "en": {
    "news": {
      "allTitle": "All"
    }
  }
}
</i18n>

<template>
  <div class="news-category-picker">

    <!-- pre-filled menu item: all articles -->
    <nuxt-link :class="{'news-category-picker-item': true, 'active': current_category.slug==''}" to="/news">
      <h3 class="title">{{ $t('news.allTitle') }}</h3>
    </nuxt-link>

    <nuxt-link :class="{'news-category-picker-item': true, 'active': current_category.slug==item.slug}"
      v-for="item in articleTypes" :key="item.id"
      :to="'/news/'+item.slug">
      <h3 class="title">{{ item.name }}</h3>
    </nuxt-link>

  </div>
</template>

<script>
export default {
  props: [
    'current_category',
  ],
  data() {
    return {
      articleTypes: [],
    };
  },
  async fetch() {
    this.articleTypes = await this.$wp.$get('/article_types');
  },
};
</script>

<style lang="scss">
.news-category-picker {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &-item {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px 15px;
    border-radius: 99px;
    background: rgb(231, 231, 231);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    background: var(--color-hover-gray);

    &.active {
      background: var(--color-primary);
    }

    h3 {
      margin-bottom: 0;
    }
  }
}
</style>
