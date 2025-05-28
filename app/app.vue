<script setup lang="ts">
const isDark = useDark()
onMounted(() => {
  isDark.value = true
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
