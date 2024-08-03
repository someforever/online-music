<script setup>
import avatar from '@/assets/default.png'
import { useUserStore } from '@/stores'
import { ref, onMounted } from 'vue'
import {
  Link,
  User,
  Lock,
  Help,
  Remove,
  Message,
  Unlock,
  EditPen,
  PieChart,
  Plus,
  RemoveFilled
} from '@element-plus/icons-vue'
import {
  updateUserInfoServer,
  updatePwdServer,
  signOutServer,
  updateAvatarServer
} from '@/api/user'
import { getFamousSayingServer } from '@/api/famoussaying'
import { useRouter } from 'vue-router'
import { postQuestionnaireServer } from '@/api/questionnaire'
const router = useRouter()
//获取用户信息
const userStore = useUserStore()
//点击的是个人信息
const handleUserInfo = async () => {
  dialogFormVisible1.value = true
  await userStore.getUser()
  formModel1.value.email = userStore.user.email
  formModel1.value.nickname = userStore.user.nickname
  formModel1.value.content = userStore.user.content
}
const zhaohu = ref('')
let dt = new Date()
var h = dt.getHours()
if (h > 0 && h < 6) {
  zhaohu.value = '早上好'
} else if (h >= 6 && h < 12) {
  zhaohu.value = '上午好'
} else if (h >= 12 && h < 14) {
  zhaohu.value = '中午好'
} else if (h >= 14 && h < 18) {
  zhaohu.value = '下午好'
} else {
  zhaohu.value = '晚上好'
}
onMounted(async () => {
  await userStore.getUser()
  ElMessage({
    type: 'success',
    message: `${zhaohu.value},${userStore.user.nickname || userStore.user.username}`
  })
})

//ASD 更换头像模块
const dialogFormVisible4 = ref(false)
const imgUrl = ref('')
const openDialogAvatar = async () => {
  dialogFormVisible4.value = true
  // await userStore.getUser()
  imgUrl.value = userStore.user.user_pic ? userStore.user.user_pic : avatar
}
const onSelectFile = (uploadFile) => {
  //基于FileReader读取图片做预览
  const reader = new FileReader()
  // console.log(uploadFile)
  reader.readAsDataURL(uploadFile.raw)
  reader.onload = () => {
    imgUrl.value = reader.result
    console.log(imgUrl.value)
  }
}
const updateUserAvatar = async () => {
  await updateAvatarServer(imgUrl.value)
  await userStore.getUser()
  ElNotification({
    title: '（～￣▽￣～）',
    message: '更换头像成功!',
    type: 'success'
  })
  dialogFormVisible4.value = false
}
//ASD退出登录模块
const handleLogOut = () => {
  ElMessageBox.confirm('确认要退出登录吗？', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      userStore.removeToken()
      userStore.removeUser()
      router.push('/login')
      ElMessage({
        type: 'success',
        message: '退出登录成功!'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消'
      })
    })
}
//ASD时间胶囊模块
const TimeCapsuleVisible = ref(false)
var timeday = ref(0)
var timeweek = ref(0)
var timemonth = ref(0)
var timeyear = ref(0)
const customColor = (percentage) => {
  if (percentage < 25) {
    return 'rgb(103, 194, 58)'
  }
  if (percentage < 50) {
    return 'rgb(64, 158, 255)'
  }
  if (percentage < 75) {
    return 'rgb(230, 162, 60)'
  }
  return 'rgb(245, 108, 108)'
}
//时间
const addZero = (n) => {
  return n > 9 ? n : '0' + n
}
var t = null
t = setTimeout(time, 1000) //開始运行
function time() {
  clearTimeout(t) //清除定时器
  let dt = new Date()
  var y = addZero(dt.getFullYear())
  var mt = addZero(dt.getMonth() + 1)
  var day = addZero(dt.getDate())
  var h = addZero(dt.getHours()) //获取时
  var m = addZero(dt.getMinutes()) //获取分
  var s = addZero(dt.getSeconds()) //获取秒
  let dayOfWeek = dt.getDay()
  // 转换成中文星期
  let daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  let todayInChinese = daysOfWeek[dayOfWeek]
  document.querySelector('.date').innerHTML =
    y + '年' + mt + '月' + day + '日' + '<br>' + todayInChinese + '<br>' + h + ':' + m + ':' + s
  t = setTimeout(time, 1000) //设定定时器，循环运行
  timeday.value = (((dt.getHours() * 60 + dt.getMinutes()) / 60 / 24) * 100).toFixed(2)
  timeweek.value = ((dayOfWeek / 7) * 100).toFixed(2)
  timemonth.value = ((dt.getDate() / 30) * 100).toFixed(2)
  timeyear.value = ((((dt.getMonth() + 1) * 30 + dt.getDate()) / 360) * 100).toFixed(2)
}
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
//ASD修改基本信息的弹窗
const dialogFormVisible1 = ref(false)
const form1 = ref()
const formModel1 = ref({
  email: userStore.user.email,
  nickname: userStore.user.nickname,
  content: userStore.user.content
})

const rules1 = {
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    {
      pattern:
        /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/,
      message: '请输入正确的邮箱格式',
      trigger: 'blur'
    }
  ],
  nickname: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
    {
      max: 8,
      message: '昵称不能超过8个字符',
      trigger: 'blur'
    }
  ],
  content: [
    { required: true, message: '请输入个性签名', trigger: 'blur' },
    {
      max: 16,
      message: '个性签名不能超过16个字符',
      trigger: 'blur'
    }
  ]
}
const handleUpdateUserInfo = async () => {
  await form1.value.validate()
  await updateUserInfoServer({ id: userStore.user.id, ...formModel1.value })
  userStore.getUser()
  dialogFormVisible1.value = false
  // form1.value.resetFields()
  ElMessage({
    type: 'success',
    message: '修改个人信息成功!'
  })
}
const handleCancel = () => {
  dialogFormVisible1.value = false
  ElMessage({
    type: 'info',
    message: '已取消'
  })
}

//ASD获取名人名言模块
const FamousSaying = ref('')

const famoussayingfenweiRef = ref()
const getFamousSaying = async () => {
  const res = await getFamousSayingServer()
  FamousSaying.value = res.data.data.FamousSaying
  famoussayingfenweiRef.value.classList.add('famoussayingfenwei-bh')
  setTimeout(() => {
    famoussayingfenweiRef.value.classList.remove('famoussayingfenwei-bh')
  }, 300)
}
getFamousSaying()

//ASD重置密码模块
const dialogFormVisible2 = ref(false)
const form2 = ref()
const formModel2 = ref({
  oldPwd: '',
  newPwd: '',
  rePwd: ''
})
const rules2 = {
  // 原密码
  oldPwd: [
    { required: true, message: '请输入原密码', trigger: 'blur' },
    {
      pattern: /^\S{6,20}$/,
      message: '密码长度必须是6-20位的非空字符串',
      trigger: 'blur'
    }
  ],
  newPwd: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'))
        } else if (value === formModel2.value.oldPwd) {
          callback(new Error('新密码不能与原密码相同'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  rePwd: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入确认密码'))
        } else if (value !== formModel2.value.newPwd) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}
const handleResetPwd = async () => {
  await form2.value.validate()
  await updatePwdServer({
    oldPwd: formModel2.value.oldPwd,
    newPwd: formModel2.value.newPwd
  })

  dialogFormVisible2.value = false
  ElMessage({
    message: '重置密码成功',
    type: 'success'
  })
  userStore.removeUser()
  userStore.removeToken()

  router.push('/login')
}
const handleResetPwdCancel = () => {
  dialogFormVisible2.value = false
  form2.value.resetFields()
}

//ASD问卷反馈模块
const wenjuanfankuiBtn = () => {
  dialogFormVisible3.value = true
  ruleForm.value.name = userStore.user.username
}

const dialogFormVisible3 = ref(false)
const ruleForm = ref({
  name: '',
  Age3: '',
  gender: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  timeOfUse: '',
  liuchang: 0,
  duoyang: 0,
  qihe: 0,
  bianjie: 0,
  zongti: 0,
  desc: ''
})
const ruleFormRef = ref()
const handleResetBtn3 = () => {
  ruleFormRef.value.resetFields()
  ruleForm.value.liuchang = 0
  ruleForm.value.duoyang = 0
  ruleForm.value.qihe = 0
  ruleForm.value.bianjie = 0
  ruleForm.value.zongti = 0
}
const rules = {
  Age3: [
    {
      required: true,
      message: '请填写年龄',
      trigger: 'blur'
    }
  ],

  date1: [
    {
      type: 'date',
      required: true,
      message: '请选择日期',
      trigger: 'blur'
    }
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: '请选择时间',
      trigger: 'blur'
    }
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: '请选择喜欢的音乐类型',
      trigger: 'blur'
    }
  ],
  gender: [
    {
      required: true,
      message: '请选择性别',
      trigger: 'blur'
    }
  ],
  timeOfUse: [
    {
      required: true,
      message: '请选择使用时长',
      trigger: 'blur'
    }
  ],
  desc: [{ max: '30', message: '请输入30字以内的反馈内容', trigger: 'blur' }]
}
const handleOpinionSubmit = async () => {
  await ruleFormRef.value.validate()
  const arr = ruleForm.value.date1.toString().split(' ')[1]
  ruleForm.value.type.forEach((item) => {
    const [key, value] = item.split(':')
    ruleForm.value[key.trim()] = parseInt(value)
  })
  delete ruleForm.value.type
  const Age = ruleForm.value.Age3
  delete ruleForm.value.Age3
  const delivery = ruleForm.value.delivery === true ? 1 : 0
  delete ruleForm.value.delivery
  await postQuestionnaireServer({ ...ruleForm.value, date1: arr, Age, delivery })
  ElMessage({
    showClose: true,
    message: '问卷反馈成功',
    type: 'success'
  })
  ElNotification({
    title: 'Success',
    message: '非常感谢您的建议！',
    type: 'success'
  })
  dialogFormVisible3.value = false
}
//ASD注销账户模块
const handleSignOut = () => {
  ElMessageBox.confirm('确认要注销账号吗？', '注销账号', {
    confirmButtonText: '确认注销',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      ElMessageBox.confirm('注意，此操作不可恢复！', '再次确认注销', {
        confirmButtonText: '确认注销',
        cancelButtonText: '取消',
        type: 'error'
      })
        .then(async () => {
          await signOutServer()
          ElMessage({
            showClose: true,
            message: '注销成功',
            type: 'success'
          })
          userStore.removeUser()
          userStore.removeToken()
          router.push('/login')
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消注销'
          })
        })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消注销'
      })
    })
}
</script>
<template>
  <div v-if="userStore.token" class="personal-bg">
    <el-row class="elrow" justify="space-around">
      <el-col :span="12"
        ><div class="elcol-left">
          <div class="lieflex">
            <div class="firsthang">
              <div class="avatar" @click="openDialogAvatar">
                <el-avatar :size="115" :src="userStore.user.user_pic || avatar" />
              </div>
              <p class="nameStyle">{{ userStore.user.nickname || userStore.user.username }}</p>
            </div>

            <el-tooltip content="个性标签" placement="bottom"
              ><div class="secondhang">
                "{{ userStore.user.content ? userStore.user.content : '该用户尚未设置个性签名' }}"
              </div></el-tooltip
            >
            <div class="thirdhang">
              <el-icon size="25"><Message /></el-icon>{{ userStore.user.email || 'xxx@xx.com' }}
            </div>
          </div>
        </div></el-col
      >
      <el-col :span="12">
        <div class="elcol-right">
          <div class="logoutcss">
            <div
              @click="handleLogOut"
              style="display: flex; justify-self: center; align-items: center; gap: 2px"
            >
              <el-icon size="20"><RemoveFilled /></el-icon>退出
            </div>
          </div>
          <div class="rightfirst">
            <div @click="getFamousSaying" class="mingyan">
              {{ FamousSaying }}
            </div>
            <div
              v-loading="true"
              :element-loading-spinner="svg"
              element-loading-svg-view-box="-10, -10, 50, 50"
              element-loading-background="rgba(14, 13, 13, 0.114)"
              class="date"
            ></div>
          </div>
          <div style="position: absolute">
            <div ref="famoussayingfenweiRef" class="famoussayingfenwei">
              <img src="/images/名言切换氛围.png" alt="" />
            </div>
          </div>
          <div class="rightsecond">
            <div class="gongneng-font">
              <el-icon size="30"><Link /></el-icon>功能列表
            </div>
          </div>
          <div class="rightthird">
            <div @click="handleUserInfo" class="rightbox">
              <el-icon><User /></el-icon>个人信息
            </div>
            <div @click="dialogFormVisible2 = true" class="rightbox">
              <el-icon><Lock /></el-icon>重置密码
            </div>
            <div @click="TimeCapsuleVisible = !TimeCapsuleVisible" class="rightbox">
              <el-icon><Help /></el-icon>时间胶囊
            </div>
          </div>
          <div class="rightthird">
            <div @click="wenjuanfankuiBtn" class="rightbox">
              <el-icon><EditPen /></el-icon>问卷反馈
            </div>
            <div @click="router.push('/manage')" class="rightbox">
              <el-icon><PieChart /></el-icon>网站数据
            </div>
            <div @click="handleSignOut" class="rightbox">
              <el-icon><Remove /></el-icon>注销账号
            </div>
          </div>
        </div></el-col
      >
    </el-row>
    <!-- //* //ASD 更换头像的弹窗 -->
    <el-dialog v-model="dialogFormVisible4" title="更换头像" width="500">
      <el-upload
        :on-change="onSelectFile"
        :auto-upload="false"
        class="avatar-uploader"
        :show-file-list="false"
      >
        <img v-if="imgUrl" :src="imgUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
      <template #footer>
        <div class="dialog-footer">
          <el-button plain color="rgba(255, 55, 55, 0.594)" @click="dialogFormVisible4 = false"
            >取消</el-button
          >
          <el-button color="rgb(36, 46, 55)" plain type="primary" @click="updateUserAvatar">
            确认更换
          </el-button>
        </div>
      </template>
    </el-dialog>

    <!-- //* //ASD 修改用户信息弹窗 -->
    <el-dialog v-model="dialogFormVisible1" title="修改个人信息" width="500">
      <el-form ref="form1" :model="formModel1" :rules="rules1">
        <el-form-item style="margin-top: 20px" label="邮箱" prop="email">
          <el-input :prefix-icon="Message" v-model="formModel1.email"></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 30px" label="昵称" prop="nickname">
          <el-input :prefix-icon="User" v-model="formModel1.nickname"></el-input>
        </el-form-item>
        <el-form-item prop="content">
          <el-input
            v-model="formModel1.content"
            style="width: 470px; margin-top: 10px"
            type="textarea"
            placeholder="请输入您的个性标签内容"
            maxlength="16"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button plain color="rgba(255, 55, 55, 0.594)" @click="handleCancel">Cancel</el-button>
          <el-button color="rgb(36, 46, 55)" plain type="primary" @click="handleUpdateUserInfo">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
    <!-- //? //ASD 重置密码弹窗 -->
    <el-dialog v-model="dialogFormVisible2" title="重置密码" width="300">
      <el-form ref="form2" :model="formModel2" :rules="rules2">
        <el-form-item prop="oldPwd">
          <el-input
            type="password"
            placeholder="请输入原密码"
            show-password="true"
            :prefix-icon="Unlock"
            style="width: 300px; margin-top: 10px"
            v-model="formModel2.oldPwd"
          ></el-input>
        </el-form-item>
        <el-form-item prop="newPwd">
          <el-input
            type="password"
            placeholder="请输入新密码"
            show-password="true"
            :prefix-icon="Lock"
            style="width: 300px"
            v-model="formModel2.newPwd"
          ></el-input>
        </el-form-item>
        <el-form-item prop="rePwd">
          <el-input
            type="password"
            placeholder="请再次输入新密码"
            show-password="true"
            :prefix-icon="Lock"
            style="width: 300px"
            v-model="formModel2.rePwd"
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button plain color="rgba(255, 55, 55, 0.594)" @click="handleResetPwdCancel"
            >取消</el-button
          >
          <el-button color="rgb(36, 46, 55)" plain type="primary" @click="handleResetPwd">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>

    <!-- //* //ASD 时间胶囊弹窗 -->
    <div v-show="TimeCapsuleVisible" class="TimeCapsule">
      <div class="timeFont">&lt;时间胶囊&gt;</div>
      <div class="TimeCapsule-content">
        <div class="timeProgress">
          今日已过：
          <el-progress
            style="width: 600px"
            :text-inside="true"
            :stroke-width="32"
            striped-flow
            striped
            :duration="10"
            :color="customColor(timeday)"
            :percentage="parseFloat(timeday)"
          />
        </div>

        <div class="timeProgress">
          本周已过：
          <el-progress
            style="width: 600px"
            :text-inside="true"
            :stroke-width="32"
            striped-flow
            striped
            :duration="10"
            :color="customColor(timeweek)"
            :percentage="parseFloat(timeweek)"
          />
        </div>

        <div class="timeProgress">
          本月已过：
          <el-progress
            style="width: 600px"
            :text-inside="true"
            :stroke-width="32"
            striped-flow
            striped
            :duration="10"
            :color="customColor(timemonth)"
            :percentage="parseFloat(timemonth)"
          />
        </div>
        <div class="timeProgress">
          今年已过：<el-progress
            style="width: 600px"
            :text-inside="true"
            :stroke-width="32"
            striped-flow
            striped
            :duration="10"
            :color="customColor(timeyear)"
            :percentage="parseFloat(timeyear)"
          />
        </div>
      </div>
      <div style="flex: 2"></div>
    </div>
    <!-- //* //ASD 问卷反馈 -->

    <el-dialog
      style="padding-right: 30px"
      v-model="dialogFormVisible3"
      title="意见反馈"
      width="500"
    >
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item label="用户名">
          <el-input disabled v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="ruleForm.gender">
            <el-tooltip content="男" placement="top"><el-radio value="1">♂</el-radio></el-tooltip>
            <el-tooltip content="女" placement="top"> <el-radio value="0">♀</el-radio></el-tooltip>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="Age3">
          <el-select v-model="ruleForm.Age3" placeholder="Your Age">
            <el-option label="20岁以下" value="a" />
            <el-option label="20-29岁" value="b" />
            <el-option label="30-39岁" value="c" />
            <el-option label="40-49岁" value="d" />
            <el-option label="50岁以上" value="e" />
          </el-select>
        </el-form-item>

        <el-form-item label="填写时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                v-model="ruleForm.date1"
                type="date"
                label="Pick a date"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col class="text-center" :span="2">
            <span style="margin-left: 10px" class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                v-model="ruleForm.date2"
                label="Pick a time"
                placeholder="Pick a time"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="推荐意愿" prop="delivery">
          <el-tooltip content="是否愿意推荐给认识的人" placement="top">
            <el-switch v-model="ruleForm.delivery" />
          </el-tooltip>
        </el-form-item>
        <el-form-item label="Hobby Type" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox value="liuxing:1" name="type"> 流行音乐</el-checkbox>
            <el-checkbox value="yaogun:1" name="type"> 摇滚音乐 </el-checkbox>
            <el-checkbox value="jueshi:1" name="type">爵士音乐 </el-checkbox>
            <el-checkbox value="gudian:1" name="type"> 古典音乐 </el-checkbox>
            <el-checkbox value="xiha:1" name="type"> 嘻哈音乐 </el-checkbox>
            <el-checkbox value="dianzi:1" name="type"> 电子音乐 </el-checkbox>
            <el-checkbox value="xiangcun:1" name="type"> 乡村音乐 </el-checkbox>
            <el-checkbox value="minzu:1" name="type"> 民族音乐 </el-checkbox>
            <el-checkbox value="jinshu:1" name="type"> 金属音乐 </el-checkbox>
            <el-checkbox value="yaobai:1" name="type"> 摇摆音乐 </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="使用时间" prop="timeOfUse">
          <el-select v-model="ruleForm.timeOfUse" placeholder="Time Of Use Per Day">
            <el-option label="小于30分钟" value="1" />
            <el-option label="30-60分钟" value="2" />
            <el-option label="1-1.5小时" value="3" />
            <el-option label="1.5-2小时" value="4" />
            <el-option label="2-2.5小时" value="5" />
            <el-option label="2.5-3小时" value="6" />
            <el-option label="大于3小时" value="7" />
          </el-select>
        </el-form-item>
        <el-form-item style="padding-left: 104px">
          页面流畅度
          <el-rate
            style="margin-left: 10px"
            v-model="ruleForm.liuchang"
            :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
            show-text
          />
        </el-form-item>
        <el-form-item style="padding-left: 104px">
          板块多样度
          <el-rate
            style="margin-left: 10px"
            v-model="ruleForm.duoyang"
            :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
            show-text
          />
        </el-form-item>
        <el-form-item style="padding-left: 104px">
          内容契合度
          <el-rate
            style="margin-left: 10px"
            v-model="ruleForm.qihe"
            :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
            show-text
          />
        </el-form-item>
        <el-form-item style="padding-left: 104px">
          操作便捷度
          <el-rate
            style="margin-left: 10px"
            v-model="ruleForm.bianjie"
            :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
            show-text
          />
        </el-form-item>
        <el-form-item style="padding-left: 104px">
          总体满意度
          <el-rate
            style="margin-left: 10px"
            v-model="ruleForm.zongti"
            :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
            show-text
          />
        </el-form-item>
        <el-form-item label="其他意见" prop="desc">
          <el-input
            placeholder="Please Fill In Your Valuable Comments"
            v-model="ruleForm.desc"
            type="textarea"
          />
        </el-form-item>
        <el-form-item> </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleResetBtn3" plain type="warning">重置</el-button>
          <el-button plain color="rgba(255, 55, 55, 0.594)" @click="dialogFormVisible3 = false"
            >取消</el-button
          >
          <el-button color="rgb(36, 46, 55)" plain type="primary" @click="handleOpinionSubmit">
            提交
          </el-button>
        </div>
      </template>
    </el-dialog>

    <div class="foot">
      <div style="height: 20px"></div>
      <p>在线音乐屋版权所有</p>
      <p style="margin-top: 10px">Misappropriation without consent is prohibited</p>
      <div class="foot-tp"><img src="/images/音律1.png" /></div>
      <div class="foot-tp2"><img src="/images/音律2.png" /></div>
    </div>
  </div>
</template>
<style scoped>
.foot {
  /*底栏样式*/
  width: 100%;
  height: 100px;
  text-align: center;
  background-color: rgb(62, 78, 101);
  margin-top: 0px;
  color: #fff;
  font-size: 18px;
}

.foot-tp {
  /*底栏左边音律样式*/
  height: 100px;
  width: 500px;
  margin-top: -88px;
}

.foot-tp2 {
  /*底栏右边音律样式*/
  height: 100px;
  width: 500px;
  display: inline-block;
  margin-top: -94px;
  float: right;
}
.bg2 {
  /*更换的背景图片*/
  background-image: url('/images/beijing9.jpg');
}
.personal-bg {
  background: url('/images/个人中心背景.jpg');
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  background-size: 100% 140%;
  background-position: center center;
  /* background-repeat: round; */
}
.elrow {
  height: 700px;
}
.elcol-left {
  margin-top: 280px;
  margin-left: 100px;
}
.elcol-right {
}
.logoutcss {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  right: 30px;
  top: 30px;
  letter-spacing: 2px;
  gap: 2px;
  opacity: 0.8;
}
.logoutcss :hover {
  cursor: pointer;
  transform: scale(1.02);
  color: #f77575;
}
.lieflex {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.firsthang {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden; /* 隐藏超出容器的内容 */
  text-overflow: ellipsis; /* 当文本溢出时显示省略号 */
  /* white-space: nowrap; 禁止文本换行 */
}
.avatar {
}
.avatar:hover {
  cursor: pointer;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.nameStyle {
  font-family: 'Jokerman';
  font-size: 85px;
  margin-top: 0px;
  margin-left: 20px;
  background-image: linear-gradient(
    to right,
    rgb(251, 239, 213),
    rgb(216, 212, 200),
    rgb(75, 101, 114)
  ); /* 创建一个从左到右的线性渐变 */
  -webkit-background-clip: text; /* 让背景渐变仅作用于文本 */
  -webkit-text-fill-color: transparent; /* 文本颜色变为透明，显现背景渐变 */
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
}
.secondhang {
  width: 550px;
  height: 150px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: rgba(14, 13, 13, 0.714);
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.113)) invert(10%);
  font-size: 28px;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: '华文行楷';
}
.secondhang:hover {
  cursor: pointer;
  filter: invert(15%) brightness(110%);
  transform: scale(1.05);
}
.thirdhang {
  width: 250px;
  height: 50px;
  margin-top: 20px;
  margin-left: 300px;
  border-radius: 10px;
  background-color: rgba(14, 13, 13, 0.714);
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.113)) invert(10%);
  font-size: 18px;
  color: #fff;
  text-align: center;
  letter-spacing: 3px;
  font-family: '宋体';
  display: flex;
  justify-content: center;
  align-items: center;
}
.thirdhang:hover {
  cursor: pointer;
  filter: invert(15%) brightness(110%);
  transform: scale(1.05);
}
.rightfirst {
  margin-top: 160px;
  display: flex;
  justify-content: space-around;
}
.famoussayingfenwei {
  position: absolute;
  width: 380px;
  height: 180px;
  top: -180px;
  left: -16px;
  transition: all 0.3s;
  visibility: hidden;
  filter: brightness(0.85);
  opacity: 0.9;
}
.famoussayingfenwei img {
  width: 100%;
  height: 100%;
}
.famoussayingfenwei-bh {
  transform: scale(1.1);
  visibility: visible;
}
.mingyan:hover {
  cursor: pointer;
  filter: invert(15%) brightness(110%);
  transform: scale(1.05);
}
.mingyan {
  width: 350px;
  height: 150px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: rgba(14, 13, 13, 0.714);
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.113)) invert(10%);
  font-size: 20px;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.3em;
  font-family: '华文行楷';
}
.date {
  width: 350px;
  height: 150px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: rgba(14, 13, 13, 0.714);
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.113)) invert(10%);
  font-size: 25px;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 38px;
  font-family: '华文彩云';
  letter-spacing: 10px;
}
.date:hover {
  cursor: pointer;
  filter: invert(15%) brightness(110%);
  transform: scale(1.05);
}
.gongneng-font {
  font-size: 35px;
  color: rgb(254, 254, 254);
  margin-top: 20px;
  margin-left: 15px;
  font-family: '华文行楷';
  font-weight: 300;
}
.rightthird {
  display: flex;
  justify-content: space-around;
}

.rightbox {
  width: 212px;
  height: 120px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: rgba(14, 13, 13, 0.714);
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.113)) invert(10%);
  font-size: 25px;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 38px;
  font-family: '华文彩云';
  letter-spacing: 10px;
}
.rightthird :hover {
  cursor: pointer;
  filter: invert(15%) brightness(110%);
  transform: scale(1.05);
}
.TimeCapsule {
  width: 700px;
  height: 600px;
  border-radius: 10px;
  background-color: rgba(14, 13, 13, 0.714);
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.113)) invert(10%);
  font-size: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.timeFont {
  color: #fff;
  flex: 6;
  line-height: 38px;
  font-family: '华文彩云';
  letter-spacing: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.TimeCapsule-content {
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 99%;
}
.timeProgress {
  display: flex;
  font-size: 17px;
  font-family: '宋体';
  justify-content: space-around;
  align-items: center;
  font-weight: 700;
  color: #fff;
}
</style>
