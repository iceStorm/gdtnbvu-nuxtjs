<i18n>
{
  "vi": {
    "members": {
      "boardsTitle": "Các thành viên Ban Quản Trị",
      "starsTitle": "Các thành viên nổi bật"
    }
  },
  "en": {
    "members": {
      "boardsTitle": "Board Members",
      "starsTitle": "Stars"
    }
  }
}
</i18n>

<template>
  <div class="members-page">
    <div class="inner-page">

      <!-- thành viên trong Ban Quản trị -->
      <div class="members-page-boards">
        <h1 class="title">{{ $t('members.boardsTitle') }}</h1>

        <div class="members-page-boards-members">
          <div class="members-page-boards-members-head">
            <!-- Đội Trưởng/Đội Phó -->
            <div class="members-page-boards-members-item" v-for="(member, index) in getBoardHeadMembers" :key="member.id">
              <img :src="member.meta.avatar" @click="currentSlideshowIndex = index">
              <h3 class="text">{{ member.meta.role }}</h3>
              <h3 class="text">{{ member.title.rendered }}</h3>
            </div>
          </div>

          <div class="members-page-boards-members-others">
            <!-- Không phải Đội Trưởng/Đội Phó -->
            <div class="members-page-boards-members-item"
              v-for="(member, index) in getBoardOtherMembers" :key="member.id"
              :data-aos="index < 3 ?'':'zoom-out'">
              <img :src="member.meta.avatar" @click="currentSlideshowIndex = getBoardHeadMembers.length + index">
              <h3 class="text">{{ member.meta.role }}</h3>
              <h3 class="text">{{ member.title.rendered }}</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- images slideshow -->
      <client-only>
        <vue-gallery-slideshow :images="slideImages" :index="currentSlideshowIndex" @close="currentSlideshowIndex = null"></vue-gallery-slideshow>
      </client-only>

    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  scrollToTop: false,
  components: {
    VueGallerySlideshow,
  },
  head() {
    return {
      title: 'Các thành viên Ban Quản Trị',
      meta: [
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: 'Các thành viên Ban Quản trị và thành viên nổi bật.' },
      ],
      link: [
        { hid: 'aos-css-member', rel: 'stylesheet', href: '/libs/aos/aos.css' },
      ],
      script: [
        {
          hid: 'aos-js-member',
          src: '/libs/aos/aos.js',
          defer: true,
          callback: () => { this.initAOS(); },
        },
      ],
    };
  },

  data() {
    return {
      currentSlideshowIndex: null,
    };
  },

  computed: {
    getBoardHeadMembers() {
      let boardHeadMembers = Object.values(this.getBoardMembers())
        .filter((role) => role.roleId === 32 || role.roleId === 34 || role.roleId === 37 || role.roleId === 88 || role.roleId === 89)
        .map((role) => role.members);

      boardHeadMembers = [].concat.apply([], boardHeadMembers);
      // console.log(boardHeadMembers);

      return boardHeadMembers;
    },
    getBoardOtherMembers() {
      let boardOtherMembers = Object.values(this.getBoardMembers())
        .filter((role) => role.roleId !== 32 && role.roleId !== 34 && role.roleId !== 36 && role.roleId !== 37 && role.roleId !== 88 && role.roleId !== 89)
        .map((role) => role.members);

      boardOtherMembers = [].concat.apply([], boardOtherMembers);
      return boardOtherMembers;
    },
    slideImages() {
      const members = [...this.getBoardHeadMembers, ...this.getBoardOtherMembers];
      return members.map((member) => member.meta.avatar);
    },
  },

  async asyncData({ $wp }) {
    const boardMembers = (await $wp.$get('/members?per_page=100'));
    // console.log('boardMembers from API:', boardMembers);

    return { boardMembers };
  },

  methods: {
    initAOS() {
      console.log('initializing AOS [members]...');
      AOS.init({
        once: true,
      });
    },
    getMemberRoles(members) {
      const roles = {};

      members.forEach((member) => {
        if (member.member_roles[0] !== 2 && !Object.keys(roles).includes(member.member_roles[0])) {
          roles[member.member_roles[0]] = {
            roleId: member.member_roles[0],
            roleName: member.meta.role,
          };
        }
      });

      return roles;
    },
    getBoardMembers() {
      // getting roles
      const roles = this.getMemberRoles(this.boardMembers);
      const roleIds = Object.keys(roles).map((role) => parseInt(role, 10));

      this.boardMembers.forEach((member) => {
        if (roleIds.includes(member.member_roles[0])) {
          if (!roles[member.member_roles[0]].members) {
            roles[member.member_roles[0]].members = [];
          }

          roles[member.member_roles[0]].members.push(member);
        }
      });

      // console.log('member roles:', roles);
      return roles;
    },
  },
};
</script>

<style lang="scss">
.members-page {
  position: relative;
  &::before {
    content: "";

    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: url('/pages/members/5655510.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.25;
  }

  .inner-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    position: relative;
    z-index: 1;
  }

  &-boards {
    .title {
      padding-bottom: 5px;
      margin-bottom: 30px;

      text-align: center;
      position: relative;
      z-index: 2;

      // &::before {
      //   content: "*";

      //   position: absolute;
      //   z-index: 1;
      //   top: 70%;
      //   left: calc(50% - 10px);
      // }

      &::after {
        content: "";

        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        height: 1px;

        transform: scale(0);
        transform-origin: center;

        background: rgba(154, 154, 154, 0.35);
        animation: spanWidth 2s forwards;
      }

      @keyframes spanWidth {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
    }

    &-members {
      display: flex;
      flex-direction: column;
      gap: 35px;

      &-item {
        display: flex;
        flex-direction: column;
        width: 200px;

        @media (max-width: 430px) {
          width: 150px;
        }

        img {
          cursor: pointer;
          width: 150px;
          height: 150px;

          @media (max-width: 430px) {
            width: 120px;
            height: 120px;
          }

          margin: auto;
          margin-bottom: 10px;

          object-fit: cover;
          border-radius: 50%;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        }

        h3 {
          text-align: center;
          font-size: 13px;
          margin-bottom: 0;

          &:first-child {
            // font-size: 9px !important;
          }

          &:last-child {
            font-weight: bolder;
          }
        }
      }

      &-head {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 30px;
        justify-items: center;
        grid-template-areas:
        "ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai"
        "ngocmai ngocmai ngocmai duydat duydat duydat hoanglong hoanglong hoanglong dinhthuy dinhthuy dinhthuy"
        "thutrinh thutrinh thutrinh thutrinh congdi congdi congdi congdi quoccuong quoccuong quoccuong quoccuong"
        "quangchuong quangchuong quangchuong quangchuong tanhien tanhien tanhien tanhien nhatphuoc nhatphuoc nhatphuoc nhatphuoc";

        > div[class$=item] {
          // Đội Trưởng
          &:nth-child(1) {
            grid-area: ngoctai;
          }
          &:nth-child(2) {
            grid-area: dinhthuy;
          }
          &:nth-child(3) {
            grid-area: hoanglong;
          }
          &:nth-child(4) {
            grid-area: duydat;
          }
          &:nth-child(5) {
            grid-area: ngocmai;
          }

          // doi pho danh du
          &:nth-last-child(4) {
            grid-area: quoccuong;
            @media (min-width: 900px) {
              grid-column: 8 / span 4;
            }
          }
          &:nth-last-child(5) {
            grid-area: congdi;
          }
          &:nth-last-child(6) {
            grid-area: thutrinh;

            @media (min-width: 900px) {
              grid-column: 2 / span 4;
            }
          }

          // co van
          &:nth-last-child(1) {
            grid-area: quangchuong;
            @media (min-width: 900px) {
              grid-column: 8 / span 4;
            }
          }
          &:nth-last-child(2) {
            grid-area: tanhien;
          }
          &:nth-last-child(3) {
            grid-area: nhatphuoc;

            @media (min-width: 900px) {
              grid-column: 2 / span 4;
            }
          }
        }

        @media (max-width: 900px) {
          grid-template-areas:
          "ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai"
          "ngocmai ngocmai ngocmai ngocmai duydat duydat duydat duydat hoanglong hoanglong hoanglong hoanglong"
          "dinhthuy dinhthuy dinhthuy dinhthuy thutrinh thutrinh thutrinh thutrinh congdi congdi congdi congdi"
          "quoccuong quoccuong quoccuong quoccuong quangchuong quangchuong quangchuong quangchuong tanhien tanhien tanhien tanhien"
          "nhatphuoc nhatphuoc nhatphuoc nhatphuoc nhatphuoc nhatphuoc nhatphuoc nhatphuoc nhatphuoc nhatphuoc nhatphuoc nhatphuoc";
        }
        @media (max-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
          column-gap: 5px;
          grid-template-areas:
          "ngoctai ngoctai"
          "ngocmai duydat"
          "hoanglong dinhthuy"
          "thutrinh congdi"
          "quoccuong quangchuong"
          "tanhien nhatphuoc";
        }
      }

      &-others {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 30px;
        justify-items: center;

        padding-top: 35px;
        border-top: 1px solid rgba(154, 154, 154, 0.35);

        @media (max-width: 768px) {
          column-gap: 5px;
        }
      }
    }
  }

}
</style>
