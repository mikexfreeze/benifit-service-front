/**
 * Created by Micheal Xiao on 2017/12/15.
 */
import fetch from '@/utils/fetch'

export function GetStoreList (data = {}) {
  // let params = {
  //   userId: localStorage.getItem('userId') || 'm3',
  // }
  // params = $.extend(params, argParams)

  return fetch({
    url: '/signin/api/stores/list',
    method: 'post',
    data: data,
  }).then(function (response) {
    console.log('搜索或直接获取门店列表')
    console.log(response)
    return response
  })
}
