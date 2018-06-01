/**
 * Created by qgg on 2017/6/8.
 */
import Vue from 'vue'
//深拷贝
export const deepClone = function(initalObj,finalObj){
  let obj = finalObj || {};
  for(let i in initalObj){
    if(obj === initalObj[i]){
      continue;
    }
    if(typeof initalObj[i] === 'Object' ){
      obj[i] = initalObj.constructor === Array ? [] : {}
      deepClone(initalObj[i],obj[i])
    }else{
      obj[i] = initalObj[i]
    }
  }
  return obj;
}

export const setStorage = function(key, val){
  localStorage.setItem(key, JSON.stringify(val))
}

export const getStorage = function(key){
  if(localStorage.getItem(key) !== 'undefined'){
    return JSON.parse(localStorage.getItem(key))
  }else{
    return null
  }

}
export const removeStorage = function(key){
  localStorage.removeItem(key)
}
export const clearStorage = function(){
  localStorage.clear()
}
//是否在微信浏览器
export const isWeiXin = function(){
  let ua = window.navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    return true
  }else{
    return false
  }
}
//获取url中"?"符后的字串
export const getQueryString = function(name){
  var url = window.location.search;
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
    }
  }
  return theRequest[name] || theRequest;
}

export const toastText = function(text, width){
  let obj = {
    text: text,
    type: 'text'
  }
  if(width) obj.width = width
  return Vue.$vux.toast.show(obj)
}

export const toastSuccess = function(text){
  return Vue.$vux.toast.show({
    text: text,
    isShowMask: true
  })
}

export const confirm = function(title, content, callback){
  return Vue.$vux.confirm.show({
    title: title,
    content: content,
    onConfirm: function(){
      if(callback) callback()
    }
  })
}

//判断横竖屏
export const orient = function(lateral, vertical){
  if (window.orientation === 90 || window.orientation === -90 ){
    lateral && lateral()
  }
  if (window.orientation === 180 || window.orientation === 0) {
    vertical && vertical()
  }
}

export const setHtmlFontSize = function(imageWidth = 640, rem = 100){
  const html = document.querySelector('html')
  const htmlWidth = window.innerWidth
  html.style.fontSize = htmlWidth / (imageWidth / rem) + 'px'
}

//判断object/arr 是否为空
export const isEmpty = function (e) {
  for (let key in e){
    return false
  }
  return true
}

export const reload = function(){
  window.location.reload();
}

export const initWX =  function({appId, timestamp, nonceStr, signature}){

  var wx = Vue.wechat

  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId || '', // 必填，公众号的唯一标识
    timestamp: timestamp || '', // 必填，生成签名的时间戳
    nonceStr: nonceStr || '', // 必填，生成签名的随机串
    signature: signature || '',// 必填，签名，见附录1
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });

  wx.ready(function(){

    var link = location.href;
    var imgUrl = 'http://cdn.ksgame.com/ksgame/wap/dist/sharImg.png';

    var title = '《锦绣未央》手游官网-电视剧正版授权-精英技术封测预约开启';
    var desc = '锦绣未央手游是凯撒文化旗下热门手游之一，经典电视剧《锦绣未央》正版授权，女性专属定制的古风回合制RPG手游。古典唯美的画风、缠绵悱恻的剧情、超炫的连携技能特效、有趣的好感度培养、风格百变的服饰装扮、独具个性的府邸DIY、贵族独享的封地治理，给玩家不一般的古代贵族宫廷生活体验。';

    //分享到朋友圈
    wx.onMenuShareTimeline({
      title: title, // 分享标题
      link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    //分享给朋友
    wx.onMenuShareAppMessage({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgUrl, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    //分享到QQ
    wx.onMenuShareQQ({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    //分享到腾讯微博
    wx.onMenuShareWeibo({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    //分享到QQ空间
    wx.onMenuShareQZone({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });

  });

}
