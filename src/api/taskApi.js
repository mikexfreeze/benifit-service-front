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

export function GetTodayTask (argParams) {
  let params = {
    userId: localStorage.getItem('userId') || 'm3',
    dateTime: new Date(),
  }
  params = $.extend(params, argParams)

  return fetch({
    url: '/signin/api/tasks',
    method: 'get',
    params: params,
  }).then(function (response) {
    console.log('获取今日任务')
    console.log(response)
    return response
  })
}

export function CreateTask (argData) {
  let data = {
    'composerId': 0,
    'createdDateTime': '2017-12-15T02:09:53.475Z',
    'endDateTime': '2017-12-15T02:09:53.475Z',
    'id': 0,
    'item': 'string',
    'periodId': 'string',
    'startDateTime': '2017-12-15T02:09:53.475Z',
    'storeId': 0,
    'userId': localStorage.getItem('userId') || 'm3',
  }
  data = $.extend(data, argData)

  return fetch({
    url: '/signin/api/tasks',
    method: 'post',
    data: data,
  }).then(function (response) {
    console.log('创建任务')
    console.log(response)
    return response
  })
}

export function EditTask (argData) {
  let data = {
    'composerId': 0,
    'createdDateTime': '2017-12-15T02:09:53.475Z',
    'endDateTime': '2017-12-15T02:09:53.475Z',
    'id': 0,
    'item': 'string',
    'periodId': 'string',
    'startDateTime': '2017-12-15T02:09:53.475Z',
    'storeId': 0,
    'userId': localStorage.getItem('userId') || 'm3',
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

export function DeleteTask (id) {
  return fetch({
    url: '/signin/api/tasks/' + id,
    method: 'delete',
  }).then(function (response) {
    console.log('删除任务 by id')
    console.log(response)
    return response
  })
}
