export default defineNuxtRouteMiddleware((to) => {
  switch (to.path) {
    case '/pcSpec':
      return navigateTo('/pc-spec', { redirectCode: 301 })
    case '/pcSpec/oldGear':
      return navigateTo('/pc-spec/old-gear', { redirectCode: 301 })
    case '/pcSpec/detail':
      return navigateTo('/pc-spec/detail', { redirectCode: 301 })
    default:
      break
  }
})
