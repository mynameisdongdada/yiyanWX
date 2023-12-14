function t(t) {
  return (t = t.toString())[1] ? t : "0" + t;
}
const formatTime = date => {
  const year = date.getFullYear();
  return [year].map(formatNumber);
}
const formatTime2 = date => {
  const month = date.getMonth() + 1;
  return [month].map(formatNumber);
}
const formatTime3 = date => {
  const day = date.getDate();
  return [day].map(formatNumber);
}

const formatDate4 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')

}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  formatTime2: formatTime2,
  formatTime3: formatTime3,
  formatDate4: formatDate4,
  getDates: getDates,
  stringIsNull: function (t) {
    if ("" == t) return !0;
    return new RegExp("^[ ]+$").test(t);
  }
}
//todate默认参数是当前日期，可以传入对应时间 todate格式为2018-10-05
function getDates(days, todate) {
    var dateObj = dateLater(todate, days);
  return dateObj;
}
function dateLater(dates, later) {
  let dateObj = {};
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate() + later);
  let day = date.getDay();
  let yearDate = date.getFullYear();
  let month = ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1);
  let dayFormate = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
  dateObj.time = yearDate + '-' + month + '-' + dayFormate;
  dateObj.week = show_day[day];
  return dateObj;
}
