import { computed } from 'vue';
<template>
  <div :class="`app-message ${status}`">
    <h2>{{ title }}</h2>
    <p>{{ data?.message }}</p>
    <button class="app-message__btn" @click="$emit('close', null)">Закрыть</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: () => ''
  },
  title: {
    type: String,
    default: () => ''
  },
  data: {
    type: String,
    default: () => ''
  }
})

defineEmits(['close'])

const status = computed(() => {
  switch (props.type) {
    case 'success':
      return 'app-message--success'
    case 'warning':
      return 'app-message--warning'
    case 'danger':
      return 'app-message--danger'
    case 'info':
      return 'app-message--info'
    default:
      return null
  }
})

</script>

<style lang="sass" scoped>
@import './AppMessage'
</style>
