<script setup lang="ts">
type TwitchHistory = {
  Id: string
  Date: string
  Detail: string
  IsYear?: boolean
}

const list: TwitchHistory[] = [
  // 2021
  { Id: '2021-06-08', Date: '2021/06/08', Detail: 'Twitch BAN(DMCA)' },
  { Id: '2021-03-25', Date: '2021/03/25', Detail: 'Twitchで配信開始から4周年' },
  { Id: '2021-02-26', Date: '2021/02/26', Detail: '累計配信4,000時間突破' },
  // 2020
  { Id: '2020', Date: '2020', Detail: '配信時間：1,489時間 視聴数：9,749人', IsYear: true },
  { Id: '2020-06-06', Date: '2020/06/06', Detail: '累計配信3,000時間突破' },
  { Id: '2020-03-25', Date: '2020/03/25', Detail: 'Twitchで配信開始から3周年' },
  { Id: '2020-01-19', Date: '2020/01/19', Detail: '累計視聴数10,000回突破' },
  // 2019
  { Id: '2019', Date: '2019', Detail: '配信時間：1,105時間 視聴数：7,164人', IsYear: true },
  { Id: '2019-11-01', Date: '2019/11/01', Detail: '累計配信2,000時間突破' },
  { Id: '2019-03-25', Date: '2019/03/25', Detail: 'Twitchで配信開始から2周年' },
  { Id: '2019-01-17', Date: '2019/01/17', Detail: '累計視聴数5,000回突破' },
  { Id: '2019-01-16', Date: '2019/01/16', Detail: 'フォロワー100人突破' },
  // 2018
  { Id: '2018', Date: '2018', Detail: '配信時間：1,089時間 視聴数：6,678人', IsYear: true },
  { Id: '2018-11-02', Date: '2018/11/02', Detail: '累計配信1,000時間突破' },
  { Id: '2018-10-02', Date: '2018/10/02', Detail: '初サブスクライブ' },
  { Id: '2018-07-21', Date: '2018/07/21', Detail: 'フォロワー50人突破' },
  { Id: '2018-06-07', Date: '2018/06/07', Detail: '累計配信500時間突破' },
  { Id: '2018-03-25', Date: '2018/03/25', Detail: 'Twitchで配信開始から1周年' },
  { Id: '2018-03-21', Date: '2018/03/21', Detail: '累計配信250時間突破' },
  // 2017
  { Id: '2017', Date: '2017', Detail: '配信時間：102時間 視聴数：670人', IsYear: true },
  { Id: '2017-12-18', Date: '2017/12/18', Detail: 'フォロワー10人突破' },
  { Id: '2017-03-25', Date: '2017/03/25', Detail: 'Twitchにて「リリオ(ririo08)」で配信開始。' },
]
</script>

<template>
  <div>
    <h2 class="text-2xl text-center font-bold border-b-2 border-primary-500 pb-2 mb-4">
      Twitch Ririo08's HISTORY
    </h2>
    <p class="mt-4">
      Twitchでの活躍の記録です！1,536日間のお付き合い（4年2ヶ月）でした <br>
      記録に残る配信時間は3,785時間と5～600時間程度でした
    </p>

    <ul class="mt-8">
      <li
        v-for="item in list"
        :key="item.Id"
        :class="[
          'font-bold md:flex gap-x-4',
          item.IsYear ? 'text-red-600 mt-10' : 'mt-2',
        ]"
      >
        <p>
          {{ item.Date }}
        </p>
        <p>
          {{ item.Detail }}
        </p>
      </li>
    </ul>
  </div>
</template>
