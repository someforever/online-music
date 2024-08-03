import request from '@/utils/request'
//请求写入问卷数据的post接口

export const postQuestionnaireServer = (data) => {
  return request.post('/api/questionnaire', data)
}
//请求获取问卷数据的get接口
export const getQuestionnaireServer = () => {
  return request.get('/api/questionnaire')
}

//获取用户总数和问卷总数的get
export const getUserAndQuestionnaireTotalServer = () => {
  return request.get('/api/totalquestionnaire')
}
