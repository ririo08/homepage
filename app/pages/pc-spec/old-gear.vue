<script setup lang="ts">
type PcList = {
  ProductName: string
  OS: string
  CPU: string
  GPU: string
  RAM: string
  Storage: string
  DetailLink: string
  ImgLink: string
}

type GadgetList = {
  Category: string
  ProductName: string
  PostedDate: string
  BrandName: string
  Ranking: string
  Link: string
  ImgLink: string
}
const { data: pcList } = await useFetch<PcList[]>('https://ririo.dev/db/pc-old-details.json')
const { data: gadgetList } = await useFetch<GadgetList[]>('https://ririo.dev/db/pc-old-gadget.json')
</script>

<template>
  <div>
    <h2 class="text-2xl text-center font-bold border-b-2 border-primary-500 pb-2 mb-4">
      旧使用機器
    </h2>
    <p>
      パソコンは上に行くほど、周辺機器は下に行くほど新しいものです。今は使ってないけどね。
    </p>
    <section
      v-for="item in pcList"
      :key="item.ProductName"
      class="md:grid grid-cols-2 my-4"
    >
      <div class="mb-4">
        <h2 class="font-bold text-lg mb-2">
          {{ item.ProductName }}
        </h2>
        <p>CPU: {{ item.CPU }}</p>
        <p>GPU: {{ item.GPU }}</p>
        <p>RAM: {{ item.RAM }}</p>
        <p>Storage: {{ item.Storage }}</p>
        <p
          v-if="item.DetailLink"
          class="mt-4"
        >
          <NuxtLink
            :to="item.DetailLink"
            class="text-info-500 hover:underline font-bold"
            target="_blank"
          >
            購入時の記事
          </NuxtLink>
        </p>
      </div>
      <div>
        <img
          :src="item.ImgLink"
          alt="PCグラフ"
        >
      </div>
    </section>
    <p>
      <span>使用ソフト：</span>
      <a href="https://soundengine.jp/wordpress/penguin_press/press_release/3554/">WIN SOCRE SHARE</a>
    </p>
    <section
      v-for="item in gadgetList"
      :key="item.ProductName"
      class="mb-4"
    >
      <h2
        class="text-xl font-bold text-primary"
      >
        {{ item.Category }}
      </h2>
      <div
        class="md:flex gap-4 pb-8"
      >
        <div class="aspect-square w-40 h-40 bg-white flex justify-center m-auto md:m-0">
          <a
            :href="item.Link"
            target="_blank"
            class="self-center block"
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
