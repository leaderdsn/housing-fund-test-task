<template>
  <div class="app-result-list">
    <AppLoading v-if="isLoading" />
    <template v-else>
      <span v-if="!users">начните поиск</span>
      <span v-else-if="moreData?.length === 0">Ничего не найдено</span>
      <div class="app-result-list__area">
        <AppResultItem :data="user" v-for="user in moreData" :key="user?.id" />
        <AppBtnMore
          v-if="isMore"
          :loading="isLoading"
          @more="showMore"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import AppResultItem from '@/components/result-item/AppResultItem.vue'
import AppBtnMore from '@/components/btn-more/AppBtnMore.vue'
import { mapGetters } from '@/utils/mapState'

import AppLoading from '@/components/loading/AppLoading.vue'

const { users, isLoading } = mapGetters()
const pageSize = ref(5)

const moreData = computed(() => {
  return users.value?.slice(0, pageSize.value)
})

const showMore = () => {
  if (pageSize.value <= users.value?.length) {
    pageSize.value = pageSize.value + 2
  }
}

const isMore = computed(() => {
  return (
    pageSize.value < users.value?.length
  ) && (
    moreData.value?.length > 0
  )
})

</script>

<style lang="sass" scoped>
@import './AppResultList'
</style>
