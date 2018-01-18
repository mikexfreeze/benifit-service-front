/**
 * Created by Micheal Xiao on 2017/12/15.
 */
import fetch from '@/utils/fetch'

export function GetTaskList (argParams) {
  let params = {
    userId: localStorage.getItem('userRole') || 'Trainer',
  }
  params = $.extend(params, argParams)

  return fetch({
    url: '/signin/api/task-item-configs',
    method: 'get',
    data: params,
  }).then(function (response) {
    console.log('获取任务项列表')
    console.log(response)
    return response
  })
}
