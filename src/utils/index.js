/**
 * @description 格式化时间戳
 * @return yyyy-mm-dd hh:mm:ss
 * @param time 时间戳
 * @param type1 日期格式
 * @param type2 时间格式
 * @return {*}
 */
export function formatDate(time, type1 = '-', type2 = ':') {
  if (!time) {
    return new Error('不能为空')
  }
  let res = new Date(time)
  let Y = res.getFullYear()
  let M = res.getMonth() + 1 < 10 ? '0' + res.getMonth() + 1 : res.getMonth() + 1
  let D = res.getDay() < 10 ? '0' + res.getDay() : res.getDay()
  let h = res.getHours() < 10 ? '0' + res.getHours() : res.getHours()
  let m = res.getMinutes() < 10 ? '0' + res.getMinutes() : res.getMinutes()
  let s = res.getSeconds() < 10 ? '0' + res.getSeconds() : res.getSeconds()
  return `${Y}${type1}${M}${type1}${D} ${h}${type2}${m}${type2}${s}`
}
