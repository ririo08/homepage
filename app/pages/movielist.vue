<script setup lang="ts">
type MovieListItem = {
  Title: string
  StreamLink?: string
  MovieLink?: string
  NewFlag?: string
}
const { data: list } = await useFetch<MovieListItem[]>('https://ririo.dev/db/movie-list.json', { default: () => [] })
const computedList = computed(() => {
  const _list = [...list.value]
  _list.unshift({
    Title: '一緒に見ようシリーズ',
    StreamLink: 'https://www.youtube.com/playlist?list=PL_KrJ2Q-UZsG_1EC0W9k71ubsCSemBZZY',
    MovieLink: '',
    NewFlag: '',
  })
  return _list
})
</script>

<template>
  <section>
    <div>
      <h2 class="text-2xl text-center font-bold border-b-2 border-primary-500 pb-2 mb-4">
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
      <p class="mt-2">
        現在
        <span class="font-bold text-primary">
          {{ list.length }}
        </span>
        シリーズを配信中！
      </p>
    </div>
    <div class="mt-2">
      <p class="my-2">
        0-1 A-Z あ-ん シリーズ順で並べています。
      </p>
      <dl>
        <template
          v-for="item in computedList"
          :key="item.Title"
        >
          <dt class="font-bold">
            {{ item.Title }}
            <span
              v-if="item.NewFlag === '1'"
              class="text-red-500 font-bold text-sm ml-2"
            >new</span>
          </dt>
          <dd class="flex gap-2 ml-4 mb-4 mt-1">
            <a
              v-if="item.StreamLink"
              :href="item.StreamLink"
              target="_blank"
              class="transition-colors text-info-500 font-bold hover:underline hover:text-red-500"
            >
              配信アーカイブ
            </a>
            <a
              v-if="item.MovieLink"
              :href="item.MovieLink"
              target="_blank"
              class="transition-colors text-info-500 font-bold hover:underline hover:text-red-500"
            >
              実況動画
            </a>
          </dd>
        </template>
      </dl>
    </div>
  </section>
</template>

<style lang="scss">
// $themeColor: orange;

// .movielistContainer {
//   margin-inline-start: auto;
//   margin-inline-end: auto;
//   max-inline-size: 1000px;
// }

// .grayscreen {
//   position: absolute;
//   inline-size: 100%;
//   block-size: 100%;
//   background-color: #000;
//   opacity: 0.5;
//   z-index: 8;
//   display: none;

//   &-active {
//     display: block;
//   }
// }

// .movielist {
//   &-entrylist {
//     font-weight: bold;
//     width: 100%;
//     padding-left: 5px;

//     p {
//       font-weight: normal;
//     }
//   }

//   &-jstarget {
//     font-weight: bold;
//     color: red;
//   }
// }

// .listTable {
//   &-links {
//     display: block;
//     padding-left: 20px;
//     margin-bottom: 1.5rem;

//     a {
//       margin-left: 0.5rem;
//     }
//   }
// }

// .youlink a:hover {
//   color: #ff0000;
// }

// .new {
//   color: #ff4444;
//   font-size: 0.8rem;
// }
</style>
