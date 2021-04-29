Component({
  data: {
    imgList: [
      "../../../images/liveswp.png",
      "../../../images/liveswp.png"
    ],
    typeList: [
      {
        img: "../../../images/livetag01.png",
        name: "全屏直播",
        tagId: 0
      },
      {
        img: "../../../images/livetag02.png",
        name: "英雄联盟",
        tagId: 1
      },
      {
        img: "../../../images/livetag03.png",
        name: "王者荣耀",
        tagId: 2
      },
      {
        img: "../../../images/livetag04.png",
        name: "娱乐",
        tagId: 3
      },
      {
        img: "../../../images/livetag05.png",
        name: "单机游戏",
        tagId: 4
      },
      {
        img: "../../../images/livetag06.png",
        name: "电台",
        tagId: 5
      },
      {
        img: "../../../images/livetag07.png",
        name: "虚拟主播",
        tagId: 6
      },
      {
        img: "../../../images/livetag08.png",
        name: "CS:GO",
        tagId: 7
      },
      {
        img: "../../../images/livetag09.png",
        name: "视频唱见",
        tagId: 8
      },
      {
        img: "../../../images/livetag10.png",
        name: "全部直播",
        tagId: 9
      }
    ],
    liveList: [
      {
        img: "../../../images/liverCover01.jpg",//封面
        title: "【预告】18日17点FPX vs RNG",//房间标题
        author: "哔哩哔哩英雄联盟",//作者
        play: "11.0万",//观看数
        type: "英雄联盟",//直播类型
        url: "/pages/play/play"//直播房间链接
      },
      {
        img: "../../../images/liverCover02.jpg",//封面
        title: "【3D】坏学姐の授课",//房间标题
        author: "奶油学姐",//作者
        play: "72.0万",//观看数
        type: "放松电台",//直播类型
        url: "/pages/play/play"//直播房间链接
      },
      {
        img: "../../../images/liverCover03.jpg",//封面
        title: "五国服在榜：场均15杀99助攻",//房间标题
        author: "江辞yyds",//作者
        play: "3.0万",//观看数
        type: "王者荣耀",//直播类型
        url: "/pages/play/play"//直播房间链接
      },
      {
        img: "../../../images/liverCover04.jpg",//封面
        title: "寿星BUFF加持的一天",//房间标题
        author: "猛男乌迪尔",//作者
        play: "4906",//观看数
        type: "英雄联盟",//直播类型
        url: "/pages/play/play"//直播房间链接
      },
      {
        img: "../../../images/liverCover01.jpg",//封面
        title: "【预告】18日17点FPX vs RNG",//房间标题
        author: "哔哩哔哩英雄联盟",//作者
        play: "11.0万",//观看数
        type: "英雄联盟",//直播类型
        url: "/pages/play/play"//直播房间链接
      },
      {
        img: "../../../images/liverCover02.jpg",//封面
        title: "【3D】坏学姐の授课",//房间标题
        author: "奶油学姐",//作者
        play: "72.0万",//观看数
        type: "放松电台",//直播类型
        url: "/pages/play/play"//直播房间链接
      },
      {
        img: "../../../images/liverCover03.jpg",//封面
        title: "五国服在榜：场均15杀99助攻",//房间标题
        author: "江辞yyds",//作者
        play: "3.0万",//观看数
        type: "王者荣耀",//直播类型
        url: "/pages/play/play"//直播房间链接
      },
      {
        img: "../../../images/liverCover04.jpg",//封面
        title: "寿星BUFF加持的一天",//房间标题
        author: "猛男乌迪尔",//作者
        play: "4906",//观看数
        type: "英雄联盟",//直播类型
        url: "/pages/play/play"//直播房间链接
      }
    ],
    upLoadMsg: {
      isShowLoad: false,
      title: "正在加载数据中...",
      canLoad: true
    }
  },
  methods: {
    _upLoadMoreData: function(){
      if(!this.data.upLoadMsg.canLoad){
        return
      }
      this.setData({
        upLoadMsg: {
          isShowLoad: true,
          title: "正在加载数据中...",
          canLoad: true
        }
      })
      //调用page中方法去重新设定高度
      // this.triggerEvent('mathHeight');
      
      console.log("父页面调用组件上拉加载方法");
      wx.showNavigationBarLoading(); //在标题栏中显示加载图标
      let that = this;
      setTimeout(function() {
        wx.hideNavigationBarLoading(); //完成停止加载图标
        let list1 = that.data.liveList.concat([
          {
            img: "../../../images/liverCover01.jpg",//封面
            title: "【预告】18日17点FPX vs RNG",//房间标题
            author: "哔哩哔哩英雄联盟",//作者
            play: "11.0万",//观看数
            type: "英雄联盟",//直播类型
            url: "/pages/play/play"//直播房间链接
          },
          {
            img: "../../../images/liverCover02.jpg",//封面
            title: "【3D】坏学姐の授课",//房间标题
            author: "奶油学姐",//作者
            play: "72.0万",//观看数
            type: "放松电台",//直播类型
            url: "/pages/play/play"//直播房间链接
          },
          {
            img: "../../../images/liverCover03.jpg",//封面
            title: "五国服在榜：场均15杀99助攻",//房间标题
            author: "江辞yyds",//作者
            play: "3.0万",//观看数
            type: "王者荣耀",//直播类型
            url: "/pages/play/play"//直播房间链接
          },
          {
            img: "../../../images/liverCover04.jpg",//封面
            title: "寿星BUFF加持的一天",//房间标题
            author: "猛男乌迪尔",//作者
            play: "4906",//观看数
            type: "英雄联盟",//直播类型
            url: "/pages/play/play"//直播房间链接
          },
          {
            img: "../../../images/liverCover01.jpg",//封面
            title: "【预告】18日17点FPX vs RNG",//房间标题
            author: "哔哩哔哩英雄联盟",//作者
            play: "11.0万",//观看数
            type: "英雄联盟",//直播类型
            url: "/pages/play/play"//直播房间链接
          },
          {
            img: "../../../images/liverCover02.jpg",//封面
            title: "【3D】坏学姐の授课",//房间标题
            author: "奶油学姐",//作者
            play: "72.0万",//观看数
            type: "放松电台",//直播类型
            url: "/pages/play/play"//直播房间链接
          },
          {
            img: "../../../images/liverCover03.jpg",//封面
            title: "五国服在榜：场均15杀99助攻",//房间标题
            author: "江辞yyds",//作者
            play: "3.0万",//观看数
            type: "王者荣耀",//直播类型
            url: "/pages/play/play"//直播房间链接
          },
          {
            img: "../../../images/liverCover04.jpg",//封面
            title: "寿星BUFF加持的一天",//房间标题
            author: "猛男乌迪尔",//作者
            play: "4906",//观看数
            type: "英雄联盟",//直播类型
            url: "/pages/play/play"//直播房间链接
          }
        ])
        that.setData({
          'liveList': list1,
          'upLoadMsg': {//没有数据时提示数据没有了
            isShowLoad: true,
            title: "没有数据加载了...",
            canLoad: false
          }
        })

        //调用page中方法去重新设定高度
        // that.triggerEvent('mathHeight');
      },2000)
    }
  }
})