<script setup lang="ts">
type GadgetList = {
  ProductName: string
  BrandName: string
  ImgLink: string
  Link: string
  IsCategory: string
  PostedDate: string
  Ranking: string
}
const { data: list } = await useFetch<GadgetList[]>('https://ririo.dev/db/pc-parts.json')
</script>

<template>
  <div>
    <h2 class="text-2xl text-center font-bold border-b-2 border-primary-500 pb-2 mb-4">
      PC Details
    </h2>
    <section class="md:grid grid-cols-2 my-4">
      <div>
        <h2 class="font-bold text-lg mb-2">
          ☆4代目Game&Stream PC
        </h2>
        <p>CPU：Intel(R) Core(TM) i7-8700K CPU @ 3.70GHz</p>
        <p>GPU：NVIDIA GeForce RTX 2080</p>
        <p>RAM：32GB, CORSAIR DDR4 VENGEANCE LPX Series 16GB×2</p>
        <p>SSD：1TB</p>
        <p class="mt-4">
          <span>購入時の記事は</span>
          <NuxtLink
            to="http://ririogame.hatenablog.com/entry/2018/10/08/223800"
            class="text-info-500 hover:underline font-bold"
            target="_blank"
          >
            こちら
          </NuxtLink>
        </p>
        <p>
          <span>使用ソフト：</span>
          <a href="https://soundengine.jp/wordpress/penguin_press/press_release/3554/">WIN SOCRE SHARE</a>
        </p>
      </div>
      <div>
        <img
          src="~/assets/img/pc-spec/pc-4th.png"
          alt="PC4世代目グラフ"
        >
      </div>
    </section>
    <section
      v-for="item in list"
      :key="item.ProductName"
      class="mb-4"
    >
      <h2
        v-if="item.IsCategory === 'TRUE'"
        class="text-xl font-bold text-primary"
      >
        {{ item.ProductName }}
      </h2>
      <div
        v-else
        class="md:flex gap-4 pb-8"
      >
        <div class="aspect-square w-40 bg-white flex justify-center m-auto md:m-0">
          <a
            :href="item.Link"
            target="_blank"
            class="self-center"
          >

            <img
              :src="item.ImgLink"
              alt="商品画像"
            >
          </a>
        </div>
        <div class="my-2">
          <div>
            <a
              :href="item.Link"
              target="_blank"
              class="text-lg font-bold text-primary-600 hover:underline hover:text-primary-700"
            >
              {{ item.ProductName }}
            </a>
            <div class="text-sm">
              posted at {{ item.PostedDate }}
            </div>
          </div>
          <div>
            <span>{{ item.BrandName }}</span><br>
            <span>売り上げランキング: <span class="font-bold">{{ item.Ranking }}</span></span>
          </div>
          <div>
            <div>
              <a
                :href="item.Link"
                target="_blank"
                class="text-info-600"
              >
                Amazon.co.jpで詳細を見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
