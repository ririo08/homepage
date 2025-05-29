<script setup lang="ts">
const counter = ref(Math.floor(Math.random() * 100000000) + 1)
</script>

<template>
  <div>
    <TextBalloon />
    <div class="text-center">
      あなたは{{ counter }}人目の訪問者です。
    </div>
  </div>
</template>

<style>
</style>
