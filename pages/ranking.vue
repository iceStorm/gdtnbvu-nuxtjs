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

      <h1 class="title">{{ $t('ranking.title') }}</h1>

      <ul class="ranking-users">
        <!-- the 1st user -->
        <li class="ranking-users-item"></li>
        <li class="ranking-users-item head" v-for="user in users.slice(0, 1)">
          <span>{{ user.scores }}</span>
          <ion-icon name="trophy-outline"></ion-icon>
          <h3 class="text">{{ user.name }}</h3>
        </li>
        <li class="ranking-users-item"></li>

        <!-- next 3 users -->
        <li class="ranking-users-item secondary" v-for="user in users.slice(1, 4)">
          <span>{{ user.scores }}</span>
          <ion-icon name="medal-outline"></ion-icon>
          <h3 class="text">{{ user.name }}</h3>
        </li>
      </ul>

      <!-- remaining users -->
      <ul class="ranking-users">
        <li class="ranking-users-item" v-for="user in users.slice(4)">
          <span>{{ user.scores }}</span>
          <h3 class="text">{{ user.name }}</h3>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      const { rows } = this.table;
      // console.log(rows);

      return rows
        // .filter((row) => row.c[4].v > 0)
        .map((row) => ({
          name: row.c[1].v,
          scores: row.c[4].v,
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
    align-items: stretch;
    gap: 30px;
  }

  h1 {
    text-align: center;
    position: relative;
    font-weight: bolder;

    @media (min-width: 768px) {
      margin-bottom: 30px;
    }

    &::after {
      content: "";

      position: absolute;
      bottom: -10px;
      left: 50%;
      right: 0;
      transform: translateX(-50%);

      width: 50%;
      height: 1px;
      background: #ddd;
    }
  }

  &-users {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 35px;

    &:not(:last-child) {
      padding-bottom: 30px;
      border-bottom: 1px solid #ddd;
    }

    @media (max-width: 1024px) {
      // grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    }

    &-item {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 15px;
      padding-left: 50px;

      @media (max-width: 1024px) {
        align-items: flex-start;
        padding-left: 0px;

        &:nth-child(1), &:nth-child(3) {
          display: none;
        }
      }

      @media (max-width: 460px) {
        align-items: center;
        // padding-left: 5px;
      }

      &:nth-child(3n) {
        // justify-self: flex-end;
      }

      &:nth-child(2) {
        @media (min-width: 1025px) {
          grid-column: 2 / 3;
        }

        // grid-column: 1 / 3;
      }

      &:nth-child(n + 3) {
        // &::before {
        //   content: "*";
        // }
      }

      h3 {
        font-weight: 700;
        margin-bottom: 0;
      }

      span, ion-icon {
        width: 35px;
        height: 35px;
        // padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        background: var(--color-primary-dark);
        color: white;
        font-weight: 700;
        font-size: 12px;
        border-radius: 4px;
      }

      ion-icon {
        width: 20px;
        height: 20px;
        background: var(--color-primary);
        font-size: 20px;
        color: var(--color-text);
        padding: 7px;
      }

      &.head {
        span, ion-icon {
          background: rgb(255, 187, 0);
          color: black;
        }
      }

      &.secondary {
        span, ion-icon {
          background: var(--color-primary);
          color: black;
        }
      }
    }
  }
}
</style>
