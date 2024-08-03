import request from '@/utils/request'
//请求注册的post接口
export const userRegisterServer = ({ username, password }) => {
  return request.post('/api/reguser', { username, password })
}
//请求登录的post接口
export const userLoginServer = ({ username, password }) => {
  return request.post('/api/login', { username, password })
}
//请求获取用户信息的get接口
export const getUserInfoServer = () => {
  return request.get('/my/userinfo')
}
//更新用户信息（email，nickname，content）的post接口
export const updateUserInfoServer = ({ id, email, nickname, content }) => {
  return request.post('/my/userinfo', { id, email, nickname, content })
}

//重置用户密码的post接口
export const updatePwdServer = ({ oldPwd, newPwd }) => {
  return request.post('/my/updatepwd', { oldPwd, newPwd })
}
//注销用户的post接口

export const signOutServer = () => {
  return request.post('/my/signout')
}
//更换用户头像的post接口
export const updateAvatarServer = (avatar) => {
  return request.post('/my/avatar', { avatar })
}
