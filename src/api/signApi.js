/**
 * Created by Micheal Xiao on 2017/12/15.
 */
import fetch from '@/utils/fetch'

export function GetTaskList (argParams) {
  let params = {
    userId: localStorage.getItem('userId') || 'm3',
  }
  params = $.extend(params, argParams)

  return fetch({
    url: '/signin/api/tasks',
    method: 'get',
    params: params,
  }).then(function (response) {
    console.log('根据日期获取任务列表')
    console.log(response)
    return response
  })
}

export function GetSigns (argParams) {
  let params = {
    userId: localStorage.getItem('userId') || 'm3',
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/signin/api/sign-ins',
    method: 'get',
    params: params,
  }).then(function (response) {
    console.log('获取签到记录 by userId & [...]')
    console.log(response)
    return response
  })
}

export function GetSignOuts (argParams) {
  let params = {
    userId: localStorage.getItem('userId') || 'm3',
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/signin/api/sign-outs',
    method: 'get',
    params: params,
  }).then(function (response) {
    console.log('获取签退记录 by userId & [...]')
    console.log(response)
    return response
  })
}

export function SignIn (argData) {
  let data = {
    'address': 'string',
    'dateTime': new Date(),
    // 'id': 0,
    'in': true,
    'latitude': 0,
    'longitude': 0,
    'memo': 'string',
    'result': 'NORMAL',
    'storeId': 0,
    'storeName': 'string',
    'taskId': 2,
    'taskName': 'string',
    'userId': localStorage.getItem('userId') || 'm3'
  }
  data = $.extend(data, argData)

  return fetch({
    url: '/signin/api/sign-ins',
    method: 'post',
    data: data,
  }).then(function (response) {
    console.log('签到/签退API')
    console.log(response)
    return response
  })
}

export function EditTask (argData) {
  let data = {
    'endDateTime': '2017-12-18T06:54:00.950Z',
    'hours': 0,
    // "id": 0,
    'isToNotify': true,
    // "proposeDateTime": "2017-12-18T06:54:00.950Z",
    // "proposer": "string",
    'reason': 'string',
    'startDateTime': '2017-12-18T06:54:00.950Z'
  }
  data = $.extend(data, argData)

  return fetch({
    url: '/signin/api/tasks',
    method: 'put',
    data: data,
  }).then(function (response) {
    console.log('编辑任务')
    console.log(response)
    return response
  })
}
