<template>
  <aside class="app-sidebar">
    <form class="form" @submit.prevent>
      <label class="form__field">
        <h2>Поиск сотрудников</h2>
        <input class="form__input" type="text" placeholder="Введите имя сотрудника" v-model.trim="searchName" @keyup.enter="handleSearch">
      </label>
      <label class="form__field">
        <h2>Результаты</h2>
        <AppResultList />
      </label>
    </form>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import AppResultList from '@/components/result-list/AppResultList.vue'
import useFilters from '@/hooks/useFilters'
import { mapActions } from '@/utils/mapState'

const searchName = ref(null)
const { search } = mapActions()
const { applyFilters } = useFilters()

const handleSearch = (e) => {
  e.preventDefault()
  let username = searchName.value
  if (username) {
    username = username.split(',').map((item) => item.trim())
  }
  applyFilters({ username })
  search(username ? { username } : null)
}
</script>

<style lang="sass" scoped>
@import './AppSidebar'
</style>
