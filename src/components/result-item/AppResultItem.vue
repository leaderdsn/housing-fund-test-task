<template>
  <router-link
    class="app-result-item"
    :to="{ name: 'Карточка пользователя', query: { id: data?.id }}"
  >
    <div class="app-result-item__avatar">
      <img class="app-result-item__image" :src="noImage" alt="no-image">
    </div>
    <div class="app-result-item__data">
      <strong class="result-item__header">
        {{ data?.name }}
      </strong>
      <div class="app-result-item__description">
        {{ data?.email }}
      </div>
    </div>
  </router-link>
</template>

<script setup>
import noImage from '@/assets/noImage.svg'

defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="sass" scoped>
@import './AppResultItem'
</style>
