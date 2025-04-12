<script setup lang="ts"></script>

<template>
  <div class="mainbox">
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

<style lang="scss">
$themeColor: orange;

.mainbox {
  margin: auto;
  max-width: 1000px;
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-text-size-adjust: 100％;
  position: relative;
}

.mainMovieSection {
  margin-top: 50px;
  margin-bottom: 50px;

  &-h2 {
    font-size: 20px;
    color: $themeColor;
    text-align: center;
    font-weight: bold;
  }

  &-wrapper {
    position: relative;
    width: 80%;
    margin: auto;

    &:before {
      content: '';
      display: block;
      padding-top: 56.25%;
    }

    &_youTube {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

.mainflex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.mainflex2 {
  width: 400px;
}

.section {
  padding-bottom: 20px;
}

.mainHead {
  border-bottom: 3px solid $themeColor;

  h2 {
    font-size: 1.4rem;
    font-weight: bold;
  }

  &-twitchBox {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    & img {
      border-radius: 50%;
      width: 70px;
      height: 70px;
    }

    &_title {
      font-size: 40px;
      margin-top: 3px;
      margin-left: 20px;
      font-weight: bold;
    }
  }
}

.playtitle {
  padding-left: 20px;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    padding-right: 15px;

    &:hover {
      color: $themeColor;
    }
  }

  dt {
    font-size: 1.1rem;
    padding-top: 15px;
    padding-bottom: 5px;
    font-weight: normal;
  }

  dd {
    padding-left: 30px;
    font-size: 1.1rem;

    a {
      padding-left: 10px;
    }
  }
}

.nasi {
  text-decoration: line-through !important;
}

@media screen and (max-width: 900px) {
  .mainMovieSection-wrapper {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .mainflex1 {
    margin-bottom: 100px;
  }
}

@media screen and (max-width: 479px) {
  header {
    width: 300px;
  }

  .mainHead {
    &-twitchBox {
      &_title {
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
}
</style>
