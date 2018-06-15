require('es6-promise').polyfill()
import Axios from 'axios'
import store from '../store'
import qs from 'qs'
// import {toastText} from '@/utils'

// Axios.defaults.headers = {
//   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//   'X-Requested-With': 'XMLHttpRequest'
// }
// Axios.defaults.transformRequest =  [function (data) {
//   return qs.stringify(data)
// }]
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
    },
    transformRequest: [function (data) {
        return qs.stringify(data)
    }],
}
// Axios.defaults.timeout = 20000

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    store.commit('updateLoadingStatus', {isLoading: true})
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    store.commit('updateLoadingStatus', {isLoading: false})
    // 对响应数据做点什么
    // console.log(response.data)
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

//正式环境  sdk.uu66.com
//内网开发环境 10.10.40.33:8111
//沙箱环境 115.159.189.146:8001

const url = '115.159.189.146:8001'
const baseUrl = '10.10.40.33:8428'

export default {
    //
    getSideMenu: data => Axios.get('/static/sideMenu.json'),
    // getTotalData:data =>Axios.get('/advert/stat/show-total-data'),
    // getAppList:data =>Axios.get('/advert/common/app-list'),//获取游戏列表
    // getChannelList:data =>Axios.get('/advert/common/channel-list'),//获取游戏广告渠道列表

//mock接口
    getAppList:data =>Axios.get('/static/appList.json'),
    getChannelList:data =>Axios.get('/static/channelList.json'),




}

