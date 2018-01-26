/**
 * Created by Micheal Xiao on 2018/1/26.
 */
import fetch from '@/utils/fetch'

export function GetReportList (argParams) {
  let params = {
    userId: localStorage.getItem('openId') || 'm3',
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/members/open-id/{openId}',
    method: 'get',
    params: params,
  }).then(function (response) {
    console.log('获取会员信息')
    console.log(response)
    return response
  })
}