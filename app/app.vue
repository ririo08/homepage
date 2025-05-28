<script setup lang="ts">
const isDark = useDark()
onMounted(() => {
  isDark.value = false
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
