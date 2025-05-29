<script setup lang="ts">
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void
      }
    }
  }
}
onMounted(() => {
  if (import.meta.client) {
    // すでに読み込まれていなければ追加
    if (!document.getElementById('twitter-wjs')) {
      const script = document.createElement('script')
      script.id = 'twitter-wjs'
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      document.body.appendChild(script)
    }
    else if (window.twttr && window.twttr.widgets) {
      // すでに読み込まれている場合は再描画
      window.twttr.widgets.load()
    }
  }
})
</script>

<template>
  <blockquote class="twitter-tweet">
    <p
      lang="ja"
      dir="ltr"
    >
      11月のスコア出てた<br>まさかの500傑入った <a href="https://twitter.com/hashtag/Splatoon2?src=hash&amp;ref_src=twsrc%5Etfw">#Splatoon2</a> <a href="https://t.co/VuNcYCNdcf">pic.twitter.com/VuNcYCNdcf</a>
    </p>&mdash; リリオ (@ririo08) <a href="https://twitter.com/ririo08/status/1466049179848155136?ref_src=twsrc%5Etfw">December 1, 2021</a>
  </blockquote>
</template>
