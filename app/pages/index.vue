<script setup lang="ts">
const updatedMovies = ref([
  { title: 'ショート動画', url: 'https://www.youtube.com/watch?v=fbCT2s9gQ9o&list=PL_KrJ2Q-UZsHLONny2JN01LP2gbNCZRzM' },
  { title: 'プロジェクトセカイ', url: 'https://www.youtube.com/watch?v=4dNrvUDpTz4&list=PL_KrJ2Q-UZsHAZtegABz3BqmfVjG856UE' },
])
</script>

<template>
  <section>
    <h2 class="text-xl font-bold text-center text-primary-500">
      最新の動画
    </h2>
    <div class="px-4 md:px-10 py-2">
      <iframe
        src="https://www.youtube.com/embed/videoseries?list=PL_KrJ2Q-UZsEKOIT5Hgrx91ynT84tRG6t"
        class="aspect-video w-full"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 mt-4">
      <div>
        <img
          src="~assets/img/top-image.webp"
          type="image/webp"
          alt="メインイメージ"
        >
      </div>
      <div>
        <h2 class="text-xl font-bold border-b-2 border-primary-500 pb-2 mb-2">
          &nabla; 動画更新中！
        </h2>
        <dl class="font-bold text-lg">
          <template
            v-for="movie in updatedMovies"
            :key="movie.title"
          >
            <dt class="ml-8 mt-2">
              {{ movie.title }}
            </dt>
            <dd class="ml-16">
              <a
                :href="movie.url"
                target="_blank"
                class="text-info-500 font-bold hover:underline"
              >YouTube Playlist</a>
            </dd>
          </template>
        </dl>
        <h2 class="text-xl font-bold border-b-2 border-primary-500 pb-2 my-2">
          &nabla; YouTubeで絶賛配信中！
        </h2>
        <NuxtLink
          to="https://www.youtube.com/@RirioCH"
          target="_blank"
          class="flex gap-2 justify-center py-4 hover:underline text-info-500"
        >
          <UAvatar
            src="/homepage/img/icon.webp"
            size="3xl"
          />
          <span class="text-2xl font-bold self-center">リリオ</span>
          <UIcon
            name="lucide:youtube"
            class="size-7 self-center"
          />
        </NuxtLink>
        <h2 class="text-xl font-bold border-b-2 border-primary-500 pb-2 my-2">
          &nabla; プロフィール
        </h2>
        <NuxtLink
          to="/profile"
          class="text-info-500 font-bold hover:underline"
        >
          詳しくはこちらをチェック
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style>
</style>
