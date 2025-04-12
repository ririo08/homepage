<script>
export default {
  data() {
    return { list: [] }
  },
  async fetch() {
    // const res = await this.$axios.$get('https://ririo.dev/db/pc-gadget.json')
    // this.list = res
  },
}
</script>

<template>
  <div>
    <div class="globalBox">
      <h1 class="globalBox-title">
        PC & Gear DETAIL
      </h1>
    </div>
    <p>
      旧使用機器は<NuxtLink to="/pcSpec/oldGear">
        こちら
      </NuxtLink>
    </p>
    <section class="pcSpec-list">
      <div class="pcSpec-description pcSpec-description_pc">
        <h2>☆4代目Game&Stream PC</h2>
        <p>CPU：Intel(R) Core(TM) i7-8700K CPU @ 3.70GHz</p>
        <p>GPU：NVIDIA GeForce RTX 2080</p>
        <p>RAM：32GB, CORSAIR DDR4 VENGEANCE LPX Series 16GB×2</p>
        <p>SSD：1TB</p>
        <p class="pcSpec-detail">
          詳細は<NuxtLink to="pcSpec/detail">
            <strong>こちら</strong>
          </NuxtLink>
        </p>
        <p>
          使用ソフト：<a
            href="https://soundengine.jp/wordpress/penguin_press/press_release/3554/"
          >WIN SOCRE SHARE</a>
        </p>
      </div>
      <div class="pcSpec-img">
        <img
          src="~assets/img/pcSpec/4thPC.png"
          alt="PC4世代目グラフ"
        >
      </div>
    </section>
    <section
      v-for="item in list"
      :key="item.ProductName"
      class="pcSpec-list"
    >
      <div class="pcSpec-description">
        <h2 v-if="item.IsCategory === 'TRUE'">
          ☆{{ item.ProductName }}
        </h2>
        <div
          v-else
          class="amazlet-box"
        >
          <div class="amazlet-image">
            <a
              :href="item.Link"
              name="amazletlink"
              target="_blank"
            >
              <img
                :src="item.ImgLink"
                alt="商品画像"
              >
            </a>
          </div>
          <div class="amazlet-info">
            <div class="amazlet-name">
              <a
                href="https://amzn.to/32coaxm"
                name="amazletlink"
                target="_blank"
              >
                {{ item.ProductName }}
              </a>
              <div class="amazlet-powered-date">
                posted at {{ item.PostedDate }}
              </div>
            </div>
            <div class="amazlet-detail">
              {{ item.BrandName }}<br>
              売り上げランキング: {{ item.Ranking }}<br>
            </div>
            <div class="amazlet-sub-info">
              <div class="amazlet-link">
                <a
                  :href="item.Link"
                  name="amazletlink"
                  target="_blank"
                >
                  Amazon.co.jpで詳細を見る
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
$themeColor: orange;
.pcSpec {
  &-list {
    display: flex;
    justify-content: space-between;
  }

  &-description {
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 0;

    &_pc {
      width: 50%;
    }

    h2 {
      margin-top: 20px;
      font-size: 16px;
      font-weight: bold;
      padding-bottom: 10px;
    }

    p {
      font-size: 14px;
      margin-bottom: 0.5rem;
    }
  }

  &-img {
    width: 50%;

    img {
      width: 100%;
    }
  }
}

/*! amazlet-css */
$amazletLinks: #915500;

.amazlet {
  &-box {
    display: flex;
    justify-content: left;
    margin-bottom: 50px;
  }

  &-image {
    background-color: #fff;
    display: flex;
    width: 160px;
    height: 160px;
    & a {
      display: block;
      margin: auto;
      & img {
        display: block;
        max-width: 100%;
        margin: auto;
      }
    }
  }

  &-info {
    padding-left: 20px;
  }

  &-name {
    font-size: 16px;
    a {
      color: $amazletLinks;
      font-weight: bold;
    }
  }

  &-powered-date {
    font-size: 12px;
  }

  &-detail {
    font-size: 14px;
  }

  &-link {
    a {
      color: $amazletLinks;
    }
  }
}

@media screen and (max-width: 768px) {
  .pcSpec-list {
    display: block;
    -webkit-box-pack: normal;
    -ms-flex-pack: normal;
    justify-content: normal;
  }
  .pcSpec-description {
    width: 100%;
  }
  .pcSpec-img {
    width: 100%;
    margin-top: 30px;
  }
}

@media screen and (max-width: 479px) {
  .amazlet-box {
    display: block;
  }
  .amazlet-info {
    padding: 5px;
  }
}
</style>
