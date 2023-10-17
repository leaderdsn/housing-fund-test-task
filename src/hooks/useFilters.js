import { useRoute, useRouter } from 'vue-router'
import { mapMutations } from '@/utils/mapState'

const useFilters = () => {
  const route = useRoute()
  const router = useRouter()
  const { removeUsers } = mapMutations()

  const clearFilters = () => {
    router.push({ name: 'Главная', query: {} })
    removeUsers()
  }

  const applyFilters = (searchName) => {
    const query = Object.assign({}, route.query)
    if (searchName.username) {
      router.push({ query: { ...query, username: searchName.username } })
    } else {
      clearFilters()
    }
  }

  return {
    applyFilters
  }
}

export default useFilters
