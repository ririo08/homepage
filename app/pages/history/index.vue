<script>
export default {
  data() {
    return { list: [], date: 0, year: 0 }
  },
  async fetch() {
    // const res = await this.$axios.$get(
    //   'https://ririo.dev/db/history-index.json'
    // )
    // this.list = res.reverse()
  },
  mounted() {
    const a = Date.parse('2013/02/03')
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
        HISTORY
      </h1>
      <p class="history-details_p">
        活動の記録です。現在{{ date }}日目（{{ year }}年目）！
      </p>
      <p class="history-details_p">
        YouTube Liveの記録はこちら →
        <NuxtLink to="/history/live">
          YouTube Live HISTORY
        </NuxtLink>
      </p>
      <p class="history-details_p">
        Twitchの過去の記録はこちら →
        <NuxtLink to="/history/twitch">
          Twitch Ririo08's HISTORY
        </NuxtLink>
      </p>
    </div>
    <div class="historyList">
      <ul class="historyList-ul">
        <span
          v-for="item in list"
          :key="item.Id"
        >
          <li
            v-if="item.IsYear === '1'"
            class="historyList-li history-red"
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

.history-red {
  margin-top: 3rem;
  color: #ec3d3d;
}

@media screen and (max-width: 768px) {
  .history-details_p {
    margin-left: 5px;
  }

  .historyList-ul {
    padding-left: 0.5rem;
  }

  .historyList-li {
    margin-bottom: 30px;
  }

  .historyList-li_date {
    display: block;
  }
}
</style>
