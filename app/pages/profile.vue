<template>
  <div>
    <div class="profile-details">
      <h1 class="global-details_h1">
        リリオのプロフィール
      </h1>
      <div class="profile-img" />
      <p class="profile-details_p">
        どうも、リリオです。
      </p>
      <p class="profile-details_p">
        毎晩21時くらいからゲーム配信をしているぞ。<br>
        Twitchで配信した録画を編集してYouTubeにアップロードするという形式を取っているので、新しいゲームをプレイできないのが悩みだ！<br>
        基本的に編集で忙しいので、SplatoonやMinecraftなど編集しなくても良さげなゲームをプレイしがちだ！<br>
        僕の動画制作スタイルは、基本ストーリーを楽しんでいくタイプなので、ストーリーを中心に、面白い部分を使って動画を作るぞ。<br>
        あと、こんな場所まで見に来てくれてありがとうな！
      </p>
      <blockquote class="twitter-tweet">
        <p
          lang="ja"
          dir="ltr"
        >
          11月のスコア出てた<br>まさかの500傑入った
          <a
            href="https://twitter.com/hashtag/Splatoon2?src=hash&amp;ref_src=twsrc%5Etfw"
          >#Splatoon2</a>
          <a href="https://t.co/VuNcYCNdcf">pic.twitter.com/VuNcYCNdcf</a>
        </p>
        &mdash; リリオ@金欠 (@ririo08)
        <a
          href="https://twitter.com/ririo08/status/1466049179848155136?ref_src=twsrc%5Etfw"
        >December 1, 2021</a>
      </blockquote>
      <!-- <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script> -->
      <p class="profile-details_p">
        スプラトゥーン2のプレイ時間が3,000時間を超えて、最高値はXP2600になりました。<br>
        ガチマッチの頻度はそこまで高くなく、メインはナワバリバトルとリーグマッチが中心となっています。<br>
        スプラ配信をしている時はリグマを募集している時もあるので、よかったら見てくれよな。
      </p>
    </div>
    <div class="profile-links">
      <h2 class="profile-links_h2">
        🥺リンク集
      </h2>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/c/RirioTV"
            target="_blank"
            rel="noopener noreferrer"
          >YouTube</a>メインチャンネル
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCyRnuuwAPPLaGLf_xGykMPA"
            target="_blank"
            rel="noopener noreferrer"
          >YouTube</a>配信チャンネル
        </li>
        <li>
          <a
            href="https://discord.gg/VafdUKx"
            target="_blank"
            rel="noopener noreferrer"
          >Discord</a>僕のDiscordサーバーです
        </li>
        <li>
          <a
            href="https://twitter.com/ririo08"
            target="_blank"
            rel="noopener noreferrer"
          >Twitter</a>個人的な方
        </li>
        <li>
          <a
            href="https://twitter.com/RirioCH"
            target="_blank"
            rel="noopener noreferrer"
          >Twitter</a>オフィシャルな方
        </li>
        <li>
          <a
            href="https://github.com/ririo08"
            target="_blank"
            rel="noopener noreferrer"
          >Github</a>このホームページもこれ
        </li>
        <li>
          <a
            href="https://rtalk.hatenablog.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >Blog</a>個人的なブログ
        </li>
        <li>
          <a
            href="http://ririogame.hatenablog.com/"
            target="_blank"
            rel="noopener noreferrer"
          >Blog</a>商品とかゲームとかを紹介するブログ
        </li>
        <li>
          <a
            href="https://annict.jp/@ririo08"
            target="_blank"
            rel="noopener noreferrer"
          >Annict.jp</a>アニメをまとめるやつ
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
$themeColor: orange;
@mixin gtitlerule {
  text-align: center;
  padding-bottom: 8px;
  border-bottom: 3px solid $themeColor;
}
.global {
  &-details {
    &_h1 {
      @include gtitlerule();
    }
  }
}
.profile {
  &-img {
    width: 80%;
    margin: auto;
    height: 300px;
    background-image: url(~assets/img/topimage.webp);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &-details {
    &_p {
      font-size: 14px;
      padding: 0 5px;
    }
  }

  &-links {
    padding-top: 20px;

    &_h2 {
      font-size: 20px;
    }

    ul {
      li {
        padding-bottom: 8px;

        a {
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
