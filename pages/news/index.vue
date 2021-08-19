  <template>
  <div class="news-page inner-page">
    <NewsCategoryPicker />
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
};
</script>

<style lang="scss">
</style>
