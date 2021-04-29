Page({
  data: {
    isFiexTab: false,//是否固定头部标签
    selId: 0,
    selList: [
      {
        title: '频道',
        id: 0
      },
      {
        title: '分区',
        id: 1
      }
    ],
    channelType: [
      {
        img: '../../images/tjv7q-mgdhv.png',
        tit: '搞笑'
      },
      {
        img: '../../images/tbln7-8rxsq.png',
        tit: '鬼畜'
      },
      {
        img: '../../images/tclkr-46iu3.png',
        tit: '更多频道'
      },
    ],
    channelArea: [
      {
        img: '../../images/area01.png',
        tit: '番剧'
      },
      {
        img: '../../images/area02.png',
        tit: '国创'
      },
      {
        img: '../../images/area03.png',
        tit: '放映厅'
      },
      {
        img: '../../images/area04.png',
        tit: '纪录片'
      },
      {
        img: '../../images/area05.png',
        tit: '漫画'
      },
      {
        img: '../../images/area06.png',
        tit: '专栏'
      },
      {
        img: '../../images/area07.png',
        tit: '直播'
      },
      {
        img: '../../images/area08.png',
        tit: '课堂'
      },
      {
        img: '../../images/area09.png',
        tit: '动画'
      },
      {
        img: '../../images/area10.png',
        tit: '音乐'
      },
      {
        img: '../../images/area11.png',
        tit: '舞蹈'
      },
      {
        img: '../../images/area12.png',
        tit: '游戏'
      },
      {
        img: '../../images/area13.png',
        tit: '知识'
      },
      {
        img: '../../images/area14.png',
        tit: '数码'
      },
      {
        img: '../../images/area15.png',
        tit: '汽车'
      },
      {
        img: '../../images/area16.png',
        tit: '生活'
      },
      {
        img: '../../images/area17.png',
        tit: '美食'
      },
      {
        img: '../../images/area18.png',
        tit: '动物圈'
      },
      {
        img: '../../images/area19.png',
        tit: 'VLOG'
      },
      {
        img: '../../images/area20.png',
        tit: '鬼畜'
      },
      {
        img: '../../images/area21.png',
        tit: '时尚'
      },
      {
        img: '../../images/area22.png',
        tit: '娱乐'
      },
      {
        img: '../../images/area23.png',
        tit: '音乐PLUS'
      },
      {
        img: '../../images/area24.png',
        tit: '影视'
      }
    ],
    swiHei: 0,
    historyRecord: [
      {
        bgImg: '../../images/tezft-vdznf.png',
        img: '../../images/th4e6-2qann.png',
        name: '明日方舟',
        time: '04-11浏览'
      },
      {
        bgImg: '../../images/tgj4a-8jjgs.png',
        img: '../../images/t0ki9-oxhm4.png',
        name: '英雄联盟',
        time: '2002-03-21浏览'
      },
      {
        bgImg: '../../images/t5e23-ozl7l.png',
        img: '../../images/t72x3-5ysdz.png',
        name: 'mur猫',
        time: '2020-03-05浏览'
      },
      {
        bgImg: '../../images/t5e23-ozl7l.png',
        img: '../../images/tjv7q-mgdhv.png',
        name: '搞笑',
        time: '2020-02-03浏览'
      },
      {
        bgImg: '../../images/tezft-vdznf.png',
        img: '../../images/headImg.png',
        name: '番剧',
        time: '2020-01-20浏览'
      }
    ],
    hotChannel: [
      {
        img: '../../images/tjv7q-mgdhv.png',
        tit: '搞笑'
      },
      {
        img: '../../images/tyvoi-gjy1s.png',
        tit: '美食'
      },
      {
        img: '../../images/tbln7-8rxsq.png',
        tit: '鬼畜'
      },
      {
        img: '../../images/tw7ig-0pp57.png',
        tit: '天宫赐福'
      },
      {
        img: '../../images/t0ki9-oxhm4.png',
        tit: '英雄联盟'
      },
    ],
    channelList: [
      {
        type: '搞笑',
        time: '9分钟更新',
        buttonTet: '+99 进入频道',
        videoList: [
          {
            img: '../../images/t2nvv-kmqg3.png',
            tit: '【熟肉|原神】外国玩家MicMix分析原神角色的死亡亡动画'
          },
          {
            img: '../../images/t2nvv-kmqg3.png',
            tit: '原神岩神瞳位置大全！130个岩神瞳一集视频一个神瞳~超详细'
          }
        ],
        more: '精选视频6.1万个>'
      },
      {
        type: '鬼畜',
        time: '8分钟更新',
        buttonTet: '+99 进入频道',
        videoList: [
          {
            img: '../../images/t47ih-viljk.png',
            tit: '想变瘦多喝水！一周5款瘦身刮油茶，让喝水不再变胖'
          },
          {
            img: '../../images/t47ih-viljk.png',
            tit: '原神岩神瞳位置大全！130个岩神瞳一集视频一个神瞳~超详细'
          }
        ],
        more: '精选视频1.3万个>'
      }
    ],
    channelList2: [
      {
        type: '原神',
        time: '9分钟更新',
        buttonTet: '26万 订阅',
        videoList: [
          {
            img: '../../images/t2nvv-kmqg3.png',
            tit: '【熟肉|原神】外国玩家MicMix分析原神角色的死亡亡动画'
          },
          {
            img: '../../images/t2nvv-kmqg3.png',
            tit: '原神岩神瞳位置大全！130个岩神瞳一集视频一个神瞳~超详细'
          }
        ],
        more: '精选视频6.1万个>'
      },
      {
        type: '美食',
        time: '8分钟更新',
        buttonTet: '162万 订阅',
        videoList: [
          {
            img: '../../images/t47ih-viljk.png',
            tit: '想变瘦多喝水！一周5款瘦身刮油茶，让喝水不再变胖'
          },
          {
            img: '../../images/t47ih-viljk.png',
            tit: '原神岩神瞳位置大全！130个岩神瞳一集视频一个神瞳~超详细'
          }
        ],
        more: '精选视频1.3万个>'
      }
    ],
    pageScrollHeight: 0,
    screenHei: 0
  },
  //随机获取5个频道
  getRandomChannel(){
    let list = [
      {
        img: '../../images/tjv7q-mgdhv.png',
        tit: '搞笑'
      },
      {
        img: '../../images/tyvoi-gjy1s.png',
        tit: '美食'
      },
      {
        img: '../../images/tbln7-8rxsq.png',
        tit: '鬼畜'
      },
      {
        img: '../../images/tw7ig-0pp57.png',
        tit: '天宫赐福'
      },
      {
        img: '../../images/t0ki9-oxhm4.png',
        tit: '英雄联盟'
      },
      {
        img: '../../images/t72x3-5ysdz.png',
        tit: 'mur猫'
      },
      {
        img: '../../images/th4e6-2qann.png',
        tit: '明日方舟'
      },
      {
        img: '../../images/headImg.png',
        tit: '番剧'
      }
    ];
    list.sort(function(){ return 0.5 - Math.random() })
    let newList = [];
    for(let n = 0; n < 5; n++){
      newList[n] = list[n];
    }
    this.setData({
      hotChannel: newList
    })
  },

  //空事件阻止scrollView滑动穿透
  touchMove(){
    return false
  },

  //点击切换tab
  bingChangeTag(e){
    console.log('点击切换')
    this.setData({
      selId: e.currentTarget.dataset.id
    });
  },

  //手动切换选项卡
  swiperchange(e){
    console.log('手动切换')
    //新的API属性，touch说明是用户接触滑动，而不是自动滑动
    if (e.detail.source && e.detail.source =='touch'){
      this.setData({
        selId: e.detail.current
      });
    }
  },

  //监听页面滚动，固定头部标签
  onPageScroll: function (e) {
    if (e.scrollTop > 0) {
      this.setData({
        'isFiexTab': true
      });
    } else {
      this.setData({
        'isFiexTab': false
      });
    }
  },

  onLoad(){
    let utils = require('../../utils/util')
    //算出swiper在屏幕中能看到的高度
    let hei = wx.getSystemInfoSync().windowHeight;
    let hei2 = utils.getRPX(100);
    this.setData({
      screenHei: hei - hei2 - 1 + 'px'
    })
  }
})