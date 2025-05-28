<script setup lang="ts">
const links = ref([
  { name: 'YouTube', url: 'https://www.youtube.com/c/RirioTV', description: 'メインチャンネル' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCyRnuuwAPPLaGLf_xGykMPA', description: '配信チャンネル' },
  { name: 'Discord', url: 'https://discord.gg/VafdUKx', description: '僕のDiscordサーバーです' },
  { name: 'Twitter', url: 'https://twitter.com/ririo08', description: '個人的な方' },
  { name: 'Twitter', url: 'https://twitter.com/RirioCH', description: 'オフィシャルな方' },
  { name: 'Github', url: 'https://github.com/ririo08', description: 'このホームページもこれ' },
  { name: 'Blog', url: 'https://rtalk.hatenablog.jp/', description: '個人的なブログ' },
  { name: 'Blog', url: 'http://ririogame.hatenablog.com/', description: '商品とかゲームとかを紹介するブログ' },
  { name: 'Annict.jp', url: 'https://annict.jp/@ririo08', description: 'アニメをまとめるやつ' },
])
</script>

<template>
  <div>
    <div>
      <h2 class="text-2xl text-center font-bold border-b-2 border-primary-500 pb-2 mb-4">
        リリオのプロフィール
      </h2>
      <img
        src="/img/icon.webp"
        alt="アイコン"
        class="w-full h-64 object-cover"
      >
      <p class="py-2">
        どうも、リリオです。
      </p>
      <p>
        毎晩21時くらいからゲーム配信をしているぞ。<br>
        Twitchで配信した録画を編集してYouTubeにアップロードするという形式を取っているので、新しいゲームをプレイできないのが悩みだ！<br>
        基本的に編集で忙しいので、SplatoonやMinecraftなど編集しなくても良さげなゲームをプレイしがちだ！<br>
        僕の動画制作スタイルは、基本ストーリーを楽しんでいくタイプなので、ストーリーを中心に、面白い部分を使って動画を作るぞ。<br>
        あと、こんな場所まで見に来てくれてありがとうな！
      </p>
      <div class="flex justify-center">
        <XPostEmbed />
      </div>
      <p>
        スプラトゥーン2のプレイ時間が3,000時間を超えて、最高値はXP2600になりました。<br>
        ガチマッチの頻度はそこまで高くなく、メインはナワバリバトルとリーグマッチが中心となっています。<br>
        スプラ配信をしている時はリグマを募集している時もあるので、よかったら見てくれよな。
      </p>
    </div>
    <div class="mt-4">
      <h2 class="text-xl">
        🥺リンク集
      </h2>
      <ul>
        <li
          v-for="link in links"
          :key="link.url"
          class="list-disc mt-1"
        >
          <a
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold text-info-500 hover:underline"
          >
            {{ link.name }}
          </a>
          <span class="ml-4">{{ link.description }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
