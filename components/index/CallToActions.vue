<template>
  <div class="index-call-to-actions">
    <div v-for="button in buttons" :key="button.title">

      <a class="index-call-to-actions-button"  :href="button.url" target="_blank" v-if="button.external">
        <div v-html="button.icon" class="index-call-to-actions-button-icon"></div>
        <div class="index-call-to-actions-button-titles">
          <h3>{{ button[$i18n.locale].title }} </h3>
          <h4>{{ button[$i18n.locale].subTitle }} </h4>
        </div>
      </a>

      <nuxt-link class="index-call-to-actions-button"  :to="button.url" v-if="!button.external">
        <div v-html="button.icon" class="index-call-to-actions-button-icon"></div>
        <div class="index-call-to-actions-button-titles">
          <h3>{{ button[$i18n.locale].title }} </h3>
          <h4>{{ button[$i18n.locale].subTitle }} </h4>
        </div>
      </nuxt-link>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          url: this.$store.state.meta.contact.register_form,
          external: true,
          icon: '<ion-icon name="id-card-outline"></ion-icon>',
          vi: {
            title: 'Đăng ký ngay',
            subTitle: 'để trở thành thành viên',
          },
          en: {
            title: 'Register now',
            subTitle: 'to become a member',
          },
        },
        {
          url: '/ranking',
          icon: '<ion-icon name="bar-chart-outline"></ion-icon>',
          vi: {
            title: 'Điểm tích luỹ',
            subTitle: 'tra cứu BXH hoạt động',
          },
          en: {
            title: 'Accumulated points',
            subTitle: 'Looking up the activities ranking',
          },
        },
        {
          url: '/about',
          icon: '<ion-icon name="search-outline"></ion-icon>',
          vi: {
            title: 'Tìm hiểu thêm',
            subTitle: 'về Đội tình nguyện BVU',
          },
          en: {
            title: 'Explore more',
            subTitle: 'about the team',
          },
        },
        {
          url: '/contact',
          icon: '<ion-icon name="call-outline"></ion-icon>',
          vi: {
            title: 'Liên lạc Đội',
            subTitle: 'để cùng kết nối mọi hoạt động',
          },
          en: {
            title: 'Contact now',
            subTitle: 'to connect all activities',
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.index-call-to-actions {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 50px;

  &-button {
    background: var(--color-primary-dark);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    padding: 10px;
    color: white;
    border-radius: 3px;

    display: flex;
    align-items: center;
    gap: 15px;

    &:hover {
      opacity: 0.8;
    }

    ion-icon {
      font-size: 35px;
      transform: translateY(3px);
    }

    &-titles {
      h3, h4 {
        color: white;
        margin-bottom: 0;
      }

      h3 {
        font-weight: 800;
      }
    }
  }
}
</style>
