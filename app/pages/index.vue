<script setup lang="ts"></script>

<template>
  <div class="mainbox">
    <UButton label="テスト" />
    <div class="mainMovieSection">
      <h2 class="mainMovieSection-h2">
        最新の動画
      </h2>
      <div class="mainMovieSection-wrapper">
        <iframe
          class="mainMovieSection-wrapper_youTube"
          src="https://www.youtube.com/embed/videoseries?list=PL_KrJ2Q-UZsF6b9AXCOS1aKAFDW-VlMIW"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        />
      </div>
    </div>
    <div class="mainflex">
      <div class="mainflex1">
        <img
          src="~assets/img/topimage.webp"
          type="image/webp"
          alt="メインイメージ"
        >
      </div>
      <div class="mainflex2">
        <div class="section">
          <div class="mainHead">
            <h2>&nabla; 動画更新中！</h2>
          </div>
          <div class="playtitle">
            <dl>
              <dt>ショート動画</dt>
              <dd>
                <a
                  href="https://www.youtube.com/watch?v=fbCT2s9gQ9o&list=PL_KrJ2Q-UZsHLONny2JN01LP2gbNCZRzM"
                  target="_blank"
                >YouTube Playlist</a>
              </dd>
              <dt>プロジェクトセカイ</dt>
              <dd>
                <a
                  href="https://www.youtube.com/watch?v=4dNrvUDpTz4&list=PL_KrJ2Q-UZsHAZtegABz3BqmfVjG856UE"
                  target="_blank"
                >YouTube Playlist</a>
              </dd>
            </dl>
          </div>
        </div>
        <div class="section">
          <div class="mainHead">
            <h2>&nabla; YouTubeで絶賛配信中！</h2>
          </div>
          <div class="mainHead-twitchBox">
            <img
              src="https://yt3.googleusercontent.com/KwAJD21h7q5EjeuL88m9P1qZv_eJlcH0V6nYCnCK8hUnpuIAzmLNi_EEKmwnX_MTmTvAgrfjTw=s176-c-k-c0x00ffffff-no-rj"
              alt=""
            >
            <p class="mainHead-twitchBox_title">
              <a
                href="https://www.youtube.com/@RirioCH"
                target="_blank"
              >
                リリオ
              </a>
            </p>
          </div>
        </div>
        <div class="section">
          <div class="mainHead">
            <h2>&nabla; プロフィール</h2>
          </div>
          <p class="wasplayedTitle">
            <NuxtLink to="/profile">
              詳しくはこちらをチェック
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
