<template>
  <div class="members-page">

    <div class="members-page-category" v-for="(members, categoryKey) in getBoardMembers" :key=categoryKey>
      <h3 class="title members-page-category-title">{{ categoryKey }}</h3>

      <div class="members-page-category-members">
        <div class="members-page-category-members-item" v-for="member in members" :key="member.id">
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
      const boardMemberCategories = {};

      this.boardMembers.forEach((member) => {
        // console.log(member.meta.name, member.member_roles[0]);

        if (boardMemberCategories[member.meta.role] === undefined) {
          boardMemberCategories[member.meta.role] = [];
        }
        boardMemberCategories[member.meta.role].push(member);
      });

      // sort descending
      const memberCategories = Object.keys(boardMemberCategories).reverse();
      const result = {};
      memberCategories.forEach((roleId) => {
        console.log(roleId);
        result[roleId] = boardMemberCategories[roleId];
      });

      // console.log('result:', result);
      return result;
    },
  },

  async asyncData({ $wp }) {
    const boardMembers = (await $wp.$get('/members?per_page=100'));
    // console.log('boardMembers from API:', boardMembers);

    return { boardMembers };
  },

  methods: {
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

      border-bottom: 1px solid rgba(154, 154, 154, 0.5);
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

        h3 {
          text-align: center;
        }

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;

          border-radius: 4px;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        }
      }
    }
  }
}
</style>
