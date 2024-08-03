<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { userRegisterServer, userLoginServer } from '@/api/user.js'
import { useUserStore } from '@/stores/index'
import { useRouter } from 'vue-router'
const isRegister = ref(false)
const cardRef = ref(null)
const leftRef = ref(null)
const rightRef = ref(null)

const handleRegister = () => {
  isRegister.value = true
  cardRef.value.classList.add('card-bh')
  leftRef.value.style.opacity = '1'
  rightRef.value.style.opacity = '0'
}
const handleLogin = () => {
  isRegister.value = false
  cardRef.value.classList.remove('card-bh')
  rightRef.value.style.opacity = '1'
  leftRef.value.style.opacity = '0'
}
//表单校验部分
const form = ref()
const formModel = ref({
  username: '',
  password: '',
  repassword: ''
})
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 15, message: '用户名必须是5-15位字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^\S{6,20}$/, message: '密码必须是6-20位非空字符', trigger: 'blur' }
  ],
  repassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    { pattern: /^\S{6,20}$/, message: '密码必须是6-20位非空字符', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== formModel.value.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}
const register = async () => {
  await form.value.validate()
  await userRegisterServer(formModel.value)

  ElMessage({
    showClose: true,
    message: '注册成功',
    type: 'success'
  })
  // alert('注册成功')
  isRegister.value = false
  cardRef.value.classList.remove('card-bh')
  rightRef.value.style.opacity = '1'
  leftRef.value.style.opacity = '0'
}
watch(isRegister, () => {
  formModel.value = {
    username: '',
    password: '',
    repassword: ''
  }
})
//登录方法
const userStore = useUserStore()
const router = useRouter()
const login = async () => {
  await form.value.validate()
  const res = await userLoginServer(formModel.value)
  userStore.setToken(res.data.token)
  // console.log(res)
  ElMessage({
    showClose: true,
    message: '登录成功',
    type: 'success'
  })
  // alert('登录成功')
  router.push('/')
}
</script>
<template>
  <div class="login-bg">
    <div class="box">
      <div ref="leftRef" class="left">
        <div class="topFont">
          <p>欢迎来到</p>
          <p>音乐屋</p>
        </div>
        <div class="smallFont">旋律之中，品味音符的跳跃</div>
        <div class="centerPic">
          <img src="/images/吉他黑色.png" width="100px" height="200px" />
        </div>
        <div class="bottomFont">已有账号</div>
        <div class="bottomBtn" @click="handleLogin"><button>去登录</button></div>
        <div style="flex: 1"></div>
      </div>
      <div ref="rightRef" class="right">
        <div class="topFont">
          <p>欢迎来到</p>
          <p>音乐屋</p>
        </div>
        <div class="smallFont">来到这里，享受音乐的快乐</div>
        <div class="centerPic"><img src="/images/钢琴白色.png" width="100px" height="200px" /></div>
        <div class="bottomFont">
          没有账号？<el-link
            @click="router.push('/')"
            style="font-size: 13px"
            type="primary"
            :underline="false"
            >游客模式</el-link
          >
        </div>

        <div class="bottomBtn" @click="handleRegister"><button>去注册</button></div>
        <div style="flex: 1"></div>
      </div>
      <div ref="cardRef" class="card">
        <!-- //* //ASD 这里是注册表单 -->
        <el-form
          ref="form"
          :model="formModel"
          :rules="rules"
          v-if="isRegister === true"
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          "
        >
          <h1 style="color: #fff; margin-top: 120px; letter-spacing: 6px">SIGN UP</h1>
          <el-form-item prop="username">
            <el-input
              v-model="formModel.username"
              :prefix-icon="User"
              style="margin-top: 30px"
              placeholder="用户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="formModel.password"
              :prefix-icon="Lock"
              type="password"
              style="margin-top: 30px"
              placeholder="密码"
              :show-password="true"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="repassword">
            <el-input
              v-model="formModel.repassword"
              :prefix-icon="Lock"
              type="password"
              style="margin-top: 30px"
              placeholder="再次输入密码"
              :show-password="true"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              @click="register"
              color="rgb(210, 204, 235)"
              size="large"
              class="button"
              type="primary"
              plain
              round
              auto-insert-space
              style="margin-top: 20px"
              >注册</el-button
            >
          </el-form-item>
        </el-form>

        <!-- //* //ASD 这里是登录表单 -->
        <el-form
          v-else
          :model="formModel"
          :rules="rules"
          ref="form"
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          "
        >
          <h1 style="color: #fff; margin-top: 120px; letter-spacing: 6px">LOGIN</h1>
          <el-form-item prop="username">
            <el-input
              v-model="formModel.username"
              :prefix-icon="User"
              style="margin-top: 30px"
              placeholder="用户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="formModel.password"
              :prefix-icon="Lock"
              type="password"
              style="margin-top: 30px"
              placeholder="密码"
              :show-password="true"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              @click="login"
              color="rgb(210, 204, 235)"
              size="large"
              class="button"
              type="primary"
              plain
              round
              auto-insert-space
              style="margin-top: 20px"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.login-bg {
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, rgb(224, 234, 250), rgba(252, 217, 217, 0.653));
}
.box {
  width: 700px;
  height: 500px;
  background-color: #fff;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 500px;
  transition: all ease-in-out 0.6s;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 500px;
  transition: all ease-in-out 0.6s;
}
.topFont {
  flex: 2;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  color: rgb(120, 122, 126);
  letter-spacing: 5px;
}
.topFont p:nth-child(2) {
  color: rgba(39, 230, 247, 0.406);
}
.smallFont {
  flex: 1;
  display: flex;
  align-items: center;
  font-family: 'YouYuan';
  font-size: 14px;
}
.centerPic {
  flex: 6;
  display: flex;
  align-items: center;
}
.centerPic img {
  position: relative;
  width: 200px;
  height: 200px;
}
.bottomFont {
  flex: 2;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 350;
  color: #aeaaaa;
  letter-spacing: 2px;
}
.bottomBtn {
  flex: 0.3;
  display: flex;
  align-items: flex-start;
  background: linear-gradient(75deg, #2bdcec9f, #ff11cb48);
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  letter-spacing: 2px;
  width: 40px;
  padding: 10px 20px 10px 20px;
}
.bottomBtn:hover {
  cursor: pointer;
}
.bottomBtn button {
  border: none;
  color: #fff;
  background-color: transparent;
}
.bottomBtn button:hover {
  cursor: pointer;
}
.card {
  position: absolute;
  width: 300px;
  height: 600px;
  top: -50px;
  left: 25px;
  border-radius: 30px;
  background: linear-gradient(45deg, #a9ebf1, #f3b3e5);
  transition: all ease-in-out 1s;
}
::v-deep .el-input__wrapper {
  border-bottom: 2px solid #fff;
  background-color: transparent !important;
  outline: none;
  box-shadow: 0px 0px 0px;
  border-radius: 0px;
}
.card-bh {
  left: 350px;
}
</style>
