<script setup lang="ts">
const route = useRoute()

onMounted(() => {
  const param = route.query.p
  if (param === undefined) {
    navigateTo('/')
    return
  }
  const redirectPath = String(param)
  navigateTo(redirectPath)
})
</script>

<template>
  <div />
</template>
