<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isAlwaysActive = breakpoints.greater('2xl')

const isActive = ref(false)

onMounted(() => {
  if (window.innerWidth >= 1700) {
    isActive.value = true
  }
})

function hideMenu() {
  if (window.innerWidth <= 1700) {
    isActive.value = false
  }
}

const links = [
  { label: 'リリオのプロフィール', path: '/profile' },
  { label: 'PCと周辺機器のページ', path: '/pc-spec' },
  { label: '動画リスト', path: '/movielist' },
  { label: '活動記録', path: '/history' },
  { label: 'YouTube チャンネル', path: 'https://www.youtube.com/@RirioCH' },
]

const colorMode = useColorMode()
const setMode = (mode: 'light' | 'dark' | 'system') => {
  colorMode.preference = mode
}
</script>

<template>
  <div
    :class="[
      'fixed left-0  lg:top-0 z-10 lg:h-full lg:border-t-0 flex bg-[var(--ui-bg)]',
      'transition-all duration-300 ease-out',
      'bottom-0 h-20 border-t-2 border-primary-500',
      isActive ? 'h-full' : '',
    ]"
  >
    <div
      class="w-12 h-full text-primary-500 cursor-pointer border-r-2"
      @click="isActive = !isActive"
    >
      <UIcon
        name="lucide:ellipsis-vertical"
        class="size-12 my-5"
      />
    </div>
    <nav
      :class="[
        'h-full overflow-hidden border-primary-500',
        'transition-all duration-300 ease-out',
        isAlwaysActive || isActive ? 'w-64 border-r-2' : 'w-0 border-r-0',
      ]"
    >
      <ul
        :class="[
          'space-y-4 pt-6 whitespace-nowrap px-4',
          'transition-opacity',
          isAlwaysActive || isActive ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div class="font-bold text-lg text-center">
          Links
        </div>

        <li
          v-for="link in links"
          :key="link.label"
          class="hover:underline border-b-2 border-primary-500 text-info-500 font-bold"
          @click="hideMenu"
        >
          <NuxtLink
            :to="link.path"
            :target="link.path.startsWith('http') ? '_blank' : undefined"
          >{{ link.label }}</NuxtLink>
        </li>
      </ul>

      <UButtonGroup class="flex justify-center mt-4">
        <UButton
          color="neutral"
          :variant="colorMode.preference ==='system' ? 'subtle' : 'outline'"
          icon="lucide:monitor"
          @click="setMode('system')"
        />
        <UButton
          color="neutral"
          :variant="colorMode.preference === 'light' ? 'subtle' : 'outline'"
          icon="lucide:sun"
          @click="setMode('light')"
        />
        <UButton
          color="neutral"
          :variant="colorMode.preference ==='dark' ? 'subtle' : 'outline'"
          icon="lucide:moon"
          @click="setMode('dark')"
        />
      </UButtonGroup>
    </nav>
  </div>
</template>

<style scoped>
</style>
