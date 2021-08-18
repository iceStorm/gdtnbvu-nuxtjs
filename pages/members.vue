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
            <div class="members-page-boards-members-item" v-for="member in getBoardHeadMembers" :key="member.id">
              <img :src="member.meta.avatar">
              <h3 class="text">{{ member.meta.role }}</h3>
              <h3 class="text">{{ member.title.rendered }}</h3>
            </div>
          </div>

          <div class="members-page-boards-members-others">
            <!-- Không phải Đội Trưởng/Đội Phó -->
            <div class="members-page-boards-members-item" v-for="(member, index) in getBoardOtherMembers" :key="member.id" :data-aos="index < 3 ?'':'zoom-out'">
              <img :src="member.meta.avatar">
              <h3 class="text">{{ member.meta.role }}</h3>
              <h3 class="text">{{ member.title.rendered }}</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- thành viên nổi bật -->
      <div class="members-page-stars" v-if="false">
        <h1 class="title">{{ $t('members.starsTitle') }}</h1>
        <!--  -->
      </div>

    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: false,
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
      boardMembers: [],
    };
  },

  computed: {
    getBoardHeadMembers() {
      let boardHeadMembers = Object.values(this.getBoardMembers())
        .filter((role) => role.roleId === 32 || role.roleId === 35 || role.roleId === 36 || role.roleId === 37)
        .map((role) => role.members);

      boardHeadMembers = [].concat.apply([], boardHeadMembers);
      // console.log(boardHeadMembers);

      return boardHeadMembers;
    },
    getBoardOtherMembers() {
      let boardOtherMembers = Object.values(this.getBoardMembers())
        .filter((role) => role.roleId !== 32 && role.roleId !== 35 && role.roleId !== 36 && role.roleId !== 37)
        .map((role) => role.members);

      boardOtherMembers = [].concat.apply([], boardOtherMembers);
      return boardOtherMembers;
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

      // console.log('roles:', roles);
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
      padding-bottom: 20px;
      margin-bottom: 30px;

      text-align: center;
      position: relative;
      z-index: 2;

      &::before {
        content: "*";

        position: absolute;
        z-index: 1;
        top: 70%;
        left: calc(50% - 10px);
      }

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

        img {
          width: 150px;
          height: 150px;

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
        grid-template-columns: repeat(6, 1fr);
        gap: 30px;
        justify-items: center;
        grid-template-areas:
        "ngocmai ngocmai ngoctai ngoctai duydat duydat"
        "thutrinh thutrinh congdi congdi quoccuong quoccuong";

        > div[class$=item] {
          // Đội Trưởng
          &:nth-child(1) {
            grid-area: ngoctai;
          }
          &:nth-child(2) {
            grid-area: ngocmai;
          }
          &:nth-child(3) {
            grid-area: duydat;
          }

          &:nth-last-child(1) {
            grid-area: quoccuong;
          }
          &:nth-last-child(2) {
            grid-area: congdi;
          }
          &:nth-last-child(3) {
            grid-area: thutrinh;
          }
        }

        @media (max-width: 650px) {
          grid-template-areas:
          "ngoctai ngoctai ngoctai ngocmai ngocmai ngocmai"
          "duydat duydat duydat thutrinh thutrinh thutrinh"
          "congdi congdi congdi quoccuong quoccuong quoccuong";
        }
        @media (max-width: 430px) {
          grid-template-areas:
          "ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai"
          "ngocmai ngocmai ngocmai ngocmai ngocmai ngocmai"
          "duydat duydat duydat duydat duydat duydat"
          "thutrinh thutrinh thutrinh thutrinh thutrinh thutrinh"
          "congdi congdi congdi congdi congdi congdi"
          "quoccuong quoccuong quoccuong quoccuong quoccuong quoccuong";
        }
      }

      &-others {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 30px;
        justify-items: center;

        padding-top: 35px;
        border-top: 1px solid rgba(154, 154, 154, 0.35);
      }
    }
  }

  &-stars {

  }
}
</style>
