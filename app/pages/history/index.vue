<script setup lang="ts">
type History = {
  Id: string
  Date: string
  Detail: string
  Link: string
  IsYear: string
}

const { data: list } = await useFetch<History[]>('https://ririo.dev/db/history-index.json', { default: () => [] })

const sortedList = computed(() =>
  list.value.slice().reverse(),
)

const date = ref(0)
const year = ref(0)

// TODO: 計算方法作り直す
onMounted(() => {
  const a = Date.parse('2013/02/03')
  const b = new Date()
  let c = (b.getTime() - a) / 1000 / 60 / 60 / 24
  const d = Math.round(c / 365) * 1 + 1
  c = Math.floor(c)
  date.value = c
  year.value = d
})
</script>

<template>
  <div>
    <h2 class="text-2xl text-center font-bold border-b-2 border-primary-500 pb-2 mb-4">
      HISTORY
    </h2>
    <p class="mt-4">
      活動の記録です。現在{{ date }}日目（{{ year }}年目）！
    </p>
    <p class="mt-4">
      YouTube Liveの記録はこちら →
      <NuxtLink
        to="/history/live"
        class="text-info-500 hover:underline"
      >
        YouTube Live HISTORY
      </NuxtLink>
    </p>
    <p class="mt-4">
      Twitchの過去の記録はこちら →
      <NuxtLink
        to="/history/twitch"
        class="text-info-500 hover:underline"
      >
        Twitch Ririo08's HISTORY
      </NuxtLink>
    </p>
    <ul>
      <li
        v-for="item in sortedList"
        :key="item.Id"
        :class="[
          'font-bold md:flex gap-x-4',
          item.IsYear === '1' ? 'text-red-600 mt-10' : 'mt-2',
        ]"
      >
        <p>
          {{ item.Date }}
        </p>
        <p>
          <a
            :href="item.Link || undefined"
            :class="item.Link && 'text-primary hover:underline'"
            target="_blank"
          >{{ item.Detail }}</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<style></style>
