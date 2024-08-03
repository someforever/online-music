import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserInfoServer } from '@/api/user'
export const useUserStore = defineStore(
  'userStore',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    //获取用户信息
    const user = ref({})
    const getUser = async () => {
      const res = await getUserInfoServer()
      user.value = res.data.data
    }
    const removeUser = () => {
      user.value = {}
    }
    return {
      token,
      setToken,
      removeToken,
      getUser,
      user,
      removeUser
    }
  },
  {
    persist: true
  }
)
