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

export function GetMemberBonus (argParams) {
  let params = {
    openId: localStorage.getItem('openId') || 'open_id1',
    account: process.env.WC_ACCOUNT,
    bonusPointType: 'ALL',
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/member-center/api/member-bonus-point-histories',
    method: 'get',
    params: params,
  }).then(function (response) {
    console.log('获取会员积分')
    console.log(response)
    return response
  })
}

export function RegisterMember (argParams) {
  let params = {
    openId: localStorage.getItem('openId') || 'open_id19',
    account: process.env.WC_ACCOUNT,
    channel: "WECHAT",
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/member-center/api/register',
    method: 'post',
    data: params,
  }).then(function (response) {
    console.log('注册会员')
    console.log(response)
    return response
  })
}

