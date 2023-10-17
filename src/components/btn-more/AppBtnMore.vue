<template>
  <button
    class="app-btn-more"
    @click="more"
  >
    {{ loading ? 'Loading...' : 'Show more' }}
  </button>
</template>
<script setup>

defineProps({
  loading: {
    type: Boolean,
    default: () => false
  }
})

const emits = defineEmits(['more'])

const more = () => {
  emits('more')
}
</script>

<style lang="sass">
@import './AppBtnMore'
</style>
