<template>
  <div id="root" :class="$store.state.colorMode.current">
    <Header />

    <main id="content">
      <div class="inner-page">
        <Nuxt />
      </div>
    </main>

    <scroll-top-button></scroll-top-button>
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ScrollTopButton from '~/components/ScrollTopButton.vue';

export default {
  components: {
    ScrollTopButton,
  },
  data() {
    return {
    };
  },
  async fetch() {
    this.setMeta(await this.$wp.$get('/meta'));
  },
  methods: {
    ...mapMutations({
      setMeta: 'setMeta',
    }),
  },
};
</script>

<style lang="scss">

.inner-page {
  width: 1168px;
  margin: auto;

  @media (max-width: 1167px) {
    width: 100%;
  }
}

@media (max-width: 1167px) {
  #content, #footer {
    .inner-page {
      padding: 25px !important;
    }
  }
}

#root {
  transition: background .45s;
  background: var(--bg);
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;

  #content {
    flex: auto;

    .inner-page {
      padding: 35px 0;
    }
  }
}

</style>
