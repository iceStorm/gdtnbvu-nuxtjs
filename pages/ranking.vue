<i18n>
{
  "vi": {
    "ranking": {
      "title": "Bảng xếp hạng điểm tích luỹ hoạt động"
    }
  },
  "en": {
    "ranking": {
      "title": "Cumulated activities scores"
    }
  }
}
</i18n>

<template>
  <div class="ranking">
    <div class="inner-page">

      <h1>{{ $t('ranking.title') }}</h1>

      <ul class="ranking-users">
        <li class="ranking-users-item"></li>
        <li class="ranking-users-item head" v-for="user in users.slice(0, 1)">
          <span>{{ user.scores }}</span>
          <h3>{{ user.name }}</h3>
        </li>
        <li class="ranking-users-item"></li>

        <li class="ranking-users-item" v-for="user in users.slice(1, 4)">
          <span>{{ user.scores }}</span>
          <h3>{{ user.name }}</h3>
        </li>
      </ul>

      <ul class="ranking-users">
        <li class="ranking-users-item" v-for="user in users.slice(3)">
          <span>{{ user.scores }}</span>
          <h3>{{ user.name }}</h3>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      const columns = this.table.cols;
      const { rows } = this.table;

      return rows
        .filter((row) => row.c[21].v > 0)
        .map((row) => ({
          name: row.c[1].v,
          scores: row.c[21].v,
        }));
    },
  },

  async asyncData({ $axios }) {
    const sheetId = '1YijhGiLBdxoCZI4DwGT7sFBOotAHNA9ZmqFxo-McuEo';
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

    const res = (await $axios.get(url));
    return { table: JSON.parse(res.data.substr(47).slice(0, -2)).table };
  },
};
</script>

<style lang="scss">
.ranking {
  .inner-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  &-users {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 35px;

    &:not(:last-child) {
      padding-bottom: 30px;
      border-bottom: 1px solid #eee;
    }

    &-item {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 15px;

      &:first-child {
      }
      &:nth-child(2) {
        grid-column: 2 / 3;
        // background: red;
      }

      &:nth-child(n + 5) {
        // &::before {
        //   content: "*";
        // }
      }

      h3 {
        font-weight: 700;
      }

      span {
        width: 35px;
        height: 35px;
        // padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;

        background: var(--color-primary-dark);
        color: white;
        font-weight: 700;
        border-radius: 4px;
      }
    }
  }
}
</style>
