<script setup lang="ts"></script>

<template>
  <UContainer class="mb-20">
    <Header />
    <GlobalMenu />
    <main class="my-4">
      <slot />
    </main>
    <footer class="text-center">
      <small>@リリオ 2025</small>
    </footer>
  </UContainer>
</template>

<style>
</style>
