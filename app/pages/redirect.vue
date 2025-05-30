<script setup lang="ts">
const route = useRoute()

onMounted(() => {
  const param = route.query.p
  if (param === undefined) {
    navigateTo('/')
    return
  }
  const redirectPath = String(param).startsWith('/homepage')
    ? String(param).replace(/^\/homepage/, '') || '/'
    : String(param)

  switch (redirectPath) {
    case '/pcSpec':
      return navigateTo('/pc-spec', { redirectCode: 301 })
    case '/pcSpec/oldGear':
      return navigateTo('/pc-spec/old-gear', { redirectCode: 301 })
    case '/pcSpec/detail':
      return navigateTo('/pc-spec/detail', { redirectCode: 301 })
    default:
      return navigateTo('/', { redirectCode: 301 })
  }
})
</script>

<template>
  <div />
</template>
