<template>
  <AppLoading v-if="isLoading" />
  <template v-else >
    <div class="app-user-card">
      <div class="app-user-card__avatar">
        <img  class="app-user-card__image" :src="cardImage" alt="card-image" >
      </div>
      <div class="app-user-card__data">
        <h2>{{ user?.name }}</h2>
        <span class="app-user-card__contact">
          <strong>email:</strong>
          {{ user?.email }}
        </span>
        <span class="app-user-card__contact">
          <strong>phone:</strong>
          {{ user?.phone }}
        </span>
        <h2>О себе:</h2>
        <p class="app-user-card__about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </template>
</template>

<script setup>
import cardImage from '@/assets/cardImage.svg'
import { onMounted, ref, watch } from 'vue'
import Users from '@/api/service/Users'
import { useRoute } from 'vue-router'
import AppLoading from '@/components/loading/AppLoading.vue'

const route = useRoute()
const user = ref(null)
const isLoading = ref(true)

const getData = async () => {
  isLoading.value = true

  await Users.getUsers({ ...route.query })
    .then(({ data }) => {
      user.value = data[0]
      isLoading.value = false
    })
    .catch(() => {
      isLoading.value = false
    })
}

watch(route, () => {
  getData()
})

onMounted(() => getData())
</script>

<style lang="sass" scoped>
@import './AppUserCard'
</style>
