import fetch from '@/utils/fetch'

/**
 * Created by Micheal Xiao on 2017/12/20.
 */
export function CreateDailyReport (argData) {
  let data = {
    'concealerSeries': 0,
    'dateTime': new Date(),
    'dayQuota': 0,
    'eyebrowLipsJawTimes': 0,
    'eyebrowLipsTimes': 0,
    'eyebrowSeries': 0,
    'eyebrowTimes': 0,
    'facePowderSeries': 0,
    // 'id': 0,
    'poreSeries': 0,
    'seasonNew': 0,
    'serviceSalesVolume': 0,
    'storeId': 'string',
    // 'taskId': 0,
    'userId': localStorage.getItem('userId') || 'm3'
  }
  data = $.extend(data, argData)

  return fetch({
    url: '/signin/api/reports',
    method: 'post',
    data: data,
  }).then(function (response) {
    console.log('填写日报')
    console.log(response)
    return response
  })
}

export function GetReportList (argParams) {
  let params = {
    userId: localStorage.getItem('userId') || 'm3',
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/signin/api/reports',
    method: 'get',
    params: params,
  }).then(function (response) {
    console.log('日报列表')
    console.log(response)
    return response
  })
}
