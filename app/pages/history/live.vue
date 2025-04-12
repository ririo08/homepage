<script>
export default {
  data() {
    return { list: [], date: 0, year: 0 }
  },
  async fetch() {
    // const res = await this.$axios.$get('https://ririo.dev/db/history-live.json')
    // this.list = res.reverse()
  },
  mounted() {
    const a = Date.parse('2019/09/09')
    const b = new Date()
    let c = (b - a) / 1000 / 60 / 60 / 24
    const d = Math.round(c / 365) * 1 + 1
    c = Math.floor(c)
    this.date = c
    this.year = d
  },
}
</script>

<template>
  <div>
    <div class="globalBox">
      <h1 class="globalBox-title">
        YouTube Live history
      </h1>
      <p class="history-details_p">
        活動の記録です。現在{{ date }}日目（{{ year }}年目）！<br>
        （）付きの配信時間はYouTubeではなくTwitchの配信時間となります。
      </p>
    </div>
    <div class="historyList">
      <ul class="historyList-ul">
        <span
          v-for="item in list"
          :key="item.Id"
        >
          <li
            v-if="item.IsYear"
            class="historyList-li historyRed"
          >
            <span class="historyList-li_date">
              {{ item.Date }}
            </span>
            {{ item.Detail }}
          </li>
          <li
            v-else
            class="historyList-li"
          >
            <span class="historyList-li_date">{{ item.Date }}</span>
            {{ item.Detail }}
          </li>
        </span>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.historyList {
  margin-top: 4rem;

  &-ul {
    list-style: none;
    margin-bottom: 2rem;
  }

  &-li {
    font-weight: bold;
    margin-bottom: 0.8rem;

    &_date {
      margin-right: 1rem;
    }
  }
}

.historyRed {
  color: #ec3d3d;
}
</style>
