<script lang="js">
export default {
  data() {
    return { list: [] }
  },
  async fetch() {
    // const res = await this.$axios.$get("https://ririo.dev/db/movie-list.json")
    // this.list = res
  },
}
</script>

<template>
  <div>
    <div class="globalBox">
      <h2 class="globalBox-title">
        動画リスト
      </h2>
      <p>
        ここでは今までにプレイしたゲームの映像リンク等を貼っていきます。
        <br>
        実況は「実況動画」リンクから（リリオが編集して見やすくしたやつです。）
        <br>
        配信は「配信アーカイブ」リンクから！
        <br>
      </p>
      <p>
        現在
        <span
          id="movielist-jstarget"
          class="movielist-jstarget"
        >
          {{ list.length }}
        </span>
        シリーズを配信中！
      </p>
    </div>
    <div class="movielist-flex">
      <div class="movielist-entrylist">
        <p>0-1 A-Z あ-ん シリーズ順で並べています。</p>

        <dt
          class="listTable-title"
          style="color: rgb(185, 89, 9)"
        >
          一緒に見ようシリーズ
        </dt>
        <dd class="listTable-links youlink">
          <a
            href="https://www.youtube.com/playlist?list=PL_KrJ2Q-UZsG_1EC0W9k71ubsCSemBZZY"
            target="piframe"
          >
            YouTube
          </a>
        </dd>
        <div
          v-for="item in list"
          :key="item.Title"
        >
          <dt class="listTable-title">
            {{ item.Title }}
            <span
              v-if="item.NewFlag === '1'"
              class="new"
            >new</span>
          </dt>
          <dd class="listTable-links youlink">
            <a
              v-if="item.StreamLink"
              :href="item.StreamLink"
              target="_blank"
            >
              配信アーカイブ
            </a>
            <a
              v-if="item.MovieLink"
              :href="item.MovieLink"
              target="_blank"
            >
              実況動画
            </a>
          </dd>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$themeColor: orange;

.movielistContainer {
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-inline-size: 1000px;
}

.grayscreen {
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  background-color: #000;
  opacity: 0.5;
  z-index: 8;
  display: none;

  &-active {
    display: block;
  }
}

.movielist {
  &-entrylist {
    font-weight: bold;
    width: 100%;
    padding-left: 5px;

    p {
      font-weight: normal;
    }
  }

  &-jstarget {
    font-weight: bold;
    color: red;
  }
}

.listTable {
  &-links {
    display: block;
    padding-left: 20px;
    margin-bottom: 1.5rem;

    a {
      margin-left: 0.5rem;
    }
  }
}

.youlink a:hover {
  color: #ff0000;
}

.new {
  color: #ff4444;
  font-size: 0.8rem;
}
</style>
