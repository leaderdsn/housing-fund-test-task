<template>
  <AppMessage v-if="error" :data="error" title="Ошибка" type="danger" @close="setError" />
  <AppHeader />
  <main class="main">
    <div class="container">
      <AppSidebar />
      <router-view />
    </div>
  </main>
</template>

<script setup>
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
import AppHeader from '@/components/header/AppHeader.vue'
import AppMessage from '@/components/message/AppMessage.vue'
import { mapGetters, mapMutations } from '@/utils/mapState'

const { error } = mapGetters()
const { setError } = mapMutations()
</script>
