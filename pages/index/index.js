// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: false,
    // canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    selId: 1,
    selList: [
      {
        title: '直播',
        id: 0
      },
      {
        title: '推荐',
        id: 1
      },
      {
        title: '热门',
        id: 2
      },
      // {
      //   title: '追番',
      //   id: 3
      // },
      // {
      //   title: '影视',
      //   id: 4
      // },
      // {
      //   title: '建党伟业',
      //   id: 5
      // }
    ],
    clientHeight: 0,
    isFiexTab: false,//是否固定头部标签
    headTabHeight: 0,//头部tabbar高度
    swiperHieght: 0,//swiper页面高度
    scRefreshLoading2: false,
  },

  //推荐的滚动事件
  // scrollViewEv2: function(e){
  //   console.log(e.detail.scrollTop)
  // },

  //监听页面滚动，固定头部标签
  // onPageScroll: function (e) {
  //   if (e.scrollTop > this.data.headTabHeight) {
  //     this.setData({
  //       'isFiexTab': true
  //     });
  //   } else {
  //     this.setData({
  //       'isFiexTab': false
  //     });
  //   }
  // },

  goagent: function(){
    wx.navigateTo({
      url: '/pages/agent/index',
    })
  },

  //scroll-view模拟下拉刷新
  scViewRefresh2: function(){
    console.log("scroll-view触发下拉刷新");
    //调用组件中的方法
    this.selectComponent("#recommend")._loadMoreData();
  },

  setSwipHeight: function(){
    //关闭scroll-view loading 状态
    this.setData({
      scRefreshLoading2: false
    })
  },

  //下拉刷新调用子组件方法拿新数据
  onPullDownRefresh: function(){
    console.log("触发下拉刷新");
    if(this.data.selId == 1){//推荐标签
      //调用组件中的方法
      this.selectComponent("#recommend")._loadMoreData();
    } else {
      wx.stopPullDownRefresh()
    }
  },

  scViewScrollTolower1: function(){
    console.log("滚动到底部触发上拉刷新");
    //调用组件中的方法
    this.selectComponent("#live")._upLoadMoreData();
  },
  
  scViewScrollTolower2: function(){
    console.log("滚动到底部触发上拉刷新");
    //调用组件中的方法
    this.selectComponent("#recommend")._upLoadMoreData();
  },

  //上拉加载新数据 外层上拉刷新已经不触发
  onReachBottom: function(){
    console.log("触发上拉加载");
    if(this.data.selId == 0){//推荐标签
      //调用组件中的方法
      this.selectComponent("#live")._upLoadMoreData();
    } else if(this.data.selId == 1){//推荐标签
      //调用组件中的方法
      this.selectComponent("#recommend")._upLoadMoreData();
    }
  },

  //手动切换选项卡
  swiperchange(e){
    if(e.detail.source && e.detail.source =='touch'){
      this.setData({
        'selId': e.detail.current
      });
    }
  },

  //点击切换tab
  bingChangeTag(e){
    this.setData({
      selId: e.currentTarget.dataset.id
    });
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onTestPage(){
    wx.navigateTo({
      url: '/pages/header/index?id=123456&name=jhon',
    })
  },
  
  onLoad() {
    var that = this 
    /*
      获取swiper在屏幕中占得高度swiperHieght
    */
    let quert = wx.createSelectorQuery().in(this);
    let winHei = wx.getSystemInfoSync().windowHeight;
    quert.select('.topHeader').boundingClientRect(res => {
      that.setData({ 
        clientHeight: winHei - res.height
      }); 
    }).exec();

    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

    let utils = require('../../utils/util')
    wx.getSystemInfo({
      success: (result) => {
        console.log("导航栏的高度：" + utils.getRPX(100))
        this.setData({
          "headTabHeight": utils.getRPX(100)
        })
      },
    })

    // let version = wx.getSystemInfoSync().SDKVersion
    // console.log(version)
    // wx.showToast({
    //   title: version,
    // })
  },

  getStorg(){
    let name = wx.getStorageSync('name')
    console.log(name)
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    console.log('111111')
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        wx.setStorageSync('name', res.userInfo.nickName)

        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      },
      fail: res => {
        console.log("fail:" + res)
      }
    })
  },

  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
