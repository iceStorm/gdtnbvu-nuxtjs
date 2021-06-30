<template>
  <div id="root" :class="[{ mobile: classes.mobile }, classes.colorMode]">
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
export default {
  computed: {
    classes() {
      return {
        colorMode: this.$store.state.colorMode.current,
        mobile: this.$store.state.menu.mobile,
      };
    },
  },
};
</script>

<style lang="scss">
body.mobile {
  overflow-y: hidden;
}

.inner-page {
  width: 1168px;
  margin: auto;

  @media (max-width: 1167px) {
    width: 100%;
  }
}

@media (max-width: 1167px) {
  #content, #footer > :not(:last-child) {
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

  &.mobile {
    overflow-y: hidden;
  }

  #content {
    flex: auto;

    .inner-page {
      padding: 35px 0;
    }
  }
}

#root.dark {
  img.ionicon {
    filter: invert(1);
  }
}

</style>
