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

export function GetTaskById (id) {
  return fetch({
    url: '/signin/api/tasks/' + id,
    method: 'get',
  }).then(function (response) {
    console.log('根据ID获取任务')
    console.log(response)
    return response
  })
}

export function CreateLeave (argData) {
  let data = {
    'endDateTime': '2017-12-18T06:54:00.950Z',
    'hours': 0,
    // 'id': 0,
    'isToNotify': true,
    'proposeDateTime': new Date(),
    'proposer': localStorage.getItem('userId') || 'm3',
    'reason': 'string',
    'startDateTime': '2017-12-18T06:54:00.950Z'
  }
  data = $.extend(data, argData)

  return fetch({
    url: '/signin/api/leaves',
    method: 'post',
    data: data,
  }).then(function (response) {
    console.log('创建请假')
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
