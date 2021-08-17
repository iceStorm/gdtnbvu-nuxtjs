<template>
  <div class="members-page">

    <div class="members-page-category" v-for="(role, categoryKey) in getBoardMembers" :key=categoryKey>
      <h3 class="title members-page-category-title">{{ role.roleName }}</h3>

      <div class="members-page-category-members">
        <div class="members-page-category-members-item" v-for="member in role.members" :key="member.id">
          <img :src="member.meta.avatar">
          <h3 class="text">{{ member.title.rendered }}</h3>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  scrollToTop: false,
  head: {
    title: 'Các thành viên',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Các thành viên Ban Quản trị và thành viên nổi bật.' },
    ],
  },

  data() {
    return {
      boardMembers: [],
    };
  },

  computed: {
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

  async asyncData({ $wp }) {
    const boardMembers = (await $wp.$get('/members?per_page=100'));
    // console.log('boardMembers from API:', boardMembers);

    return { boardMembers };
  },

  methods: {
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
  },
};
</script>

<style lang="scss">
.members-page {
  display: flex;
  flex-direction: column;
  gap: 50px;

  &-category {
    &-title {
      text-transform: uppercase;

      padding-bottom: 5px;
      margin-bottom: 20px;

      border-bottom: 1px solid rgba(154, 154, 154, 0.26);
    }

    &-members {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 10px;

      &-item {
        display: flex;
        flex-direction: column;
        gap: 5px;

        width: 200px;
        background: rgb(248, 248, 248);
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

        h3 {
          text-align: center;
          font-size: 13px;
        }

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 1px solid rgba(154, 154, 154, 0.5);
        }
      }
    }
  }
}
</style>
