Component({
  data: {
    imgList: [
      "../../../images/liverCover02.jpg",
      "../../../images/liverCover03.jpg",
      "../../../images/liverCover04.jpg"
    ],
    newAnimation: {
      img: "../../../images/0061.png",
      title: "你的追番.追剧更新了",
      name: "《银魂 第二季》",
      page: "第202话 寒假结束后大家看起来都变得不一样了"
    },
    videoList: [
      {
        img: "../../../images/cover01.png",//封面
        title: "黎明杀机精彩搞笑集锦第205期",//作品名
        author: "游戏·点赞飙升",//作者
        play: "2.6万",//播放数
        comments: "205",//评论数
        praise: "1.5万",//点赞数
        time: "3:14",//视频时长
        showComments: true,//true:显示评论，隐藏点赞；false:显示点赞，隐藏评论
        showTime: true,//是否显示播放时长
        showSpcTag: false//是否隐藏作者区域，显示特殊标签
      },
      {
        img: "../../../images/cover02.png",//封面
        title: "徒手搓核弹！魔法输出全靠脑洞！",//作品名
        author: "贤者之心",//作者
        play: "7218.7万",//播放数
        comments: "2510",//评论数
        praise: "227.9万",//点赞数
        time: "3:14",//视频时长
        showComments: false,//true:显示点赞，隐藏评论；false:显示评论，隐藏点赞
        showTime: false,//是否显示播放时长
        showSpcTag: false//是否隐藏作者区域，显示特殊标签
      },
      {
        img: "../../../images/wa.jpg",//封面
        title: "黎明杀机精彩搞笑集锦第205期",//作品名
        author: "游戏·点赞飙升",//作者
        play: "2.6万",//播放数
        comments: "205",//评论数
        praise: "1.5万",//点赞数
        time: "3:14",//视频时长
        showComments: true,//true:显示评论，隐藏点赞；false:显示点赞，隐藏评论
        showTime: true,//是否显示播放时长
        showSpcTag: false//是否隐藏作者区域，显示特殊标签
      },
      {
        img: "../../../images/liverCover01.jpg",//封面
        title: "徒手搓核弹！魔法输出全靠脑洞！",//作品名
        author: "贤者之心",//作者
        play: "7218.7万",//播放数
        comments: "2510",//评论数
        praise: "227.9万",//点赞数
        time: "3:14",//视频时长
        showComments: false,//true:显示点赞，隐藏评论；false:显示评论，隐藏点赞
        showTime: false,//是否显示播放时长
        showSpcTag: false//是否隐藏作者区域，显示特殊标签
      },
      {
        img: "../../../images/cover01.png",//封面
        title: "黎明杀机精彩搞笑集锦第205期",//作品名
        author: "游戏·点赞飙升",//作者
        play: "2.6万",//播放数
        comments: "205",//评论数
        praise: "1.5万",//点赞数
        time: "3:14",//视频时长
        showComments: true,//true:显示评论，隐藏点赞；false:显示点赞，隐藏评论
        showTime: true,//是否显示播放时长
        showSpcTag: false//是否隐藏作者区域，显示特殊标签
      },
      {
        img: "../../../images/cover02.png",//封面
        title: "徒手搓核弹！魔法输出全靠脑洞！",//作品名
        author: "贤者之心",//作者
        play: "7218.7万",//播放数
        comments: "2510",//评论数
        praise: "227.9万",//点赞数
        time: "3:14",//视频时长
        showComments: false,//true:显示点赞，隐藏评论；false:显示评论，隐藏点赞
        showTime: false,//是否显示播放时长
        showSpcTag: false//是否隐藏作者区域，显示特殊标签
      },
      {
        img: "../../../images/wa.jpg",//封面
        title: "黎明杀机精彩搞笑集锦第205期",//作品名
        author: "游戏·点赞飙升",//作者
        play: "2.6万",//播放数
        comments: "205",//评论数
        praise: "1.5万",//点赞数
        time: "3:14",//视频时长
        showComments: true,//true:显示评论，隐藏点赞；false:显示点赞，隐藏评论
        showTime: true,//是否显示播放时长
        showSpcTag: false//是否隐藏作者区域，显示特殊标签
      },
      {
        img: "../../../images/liverCover01.jpg",//封面
        title: "徒手搓核弹！魔法输出全靠脑洞！",//作品名
        author: "贤者之心",//作者
        play: "7218.7万",//播放数
        comments: "2510",//评论数
        praise: "227.9万",//点赞数
        time: "3:14",//视频时长
        showComments: false,//true:显示点赞，隐藏评论；false:显示评论，隐藏点赞
        showTime: false,//是否显示播放时长
        showSpcTag: false//是否隐藏作者区域，显示特殊标签
      }
    ],
    topVideoList: [],
    upLoading: true,
    upLoadMsg: {
      isShowLoad: false,
      title: "正在加载数据中...",
      canLoad: true
    }
  },
  properties: {
    
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function(){},
    moved: function(){},
    detached: function(){}
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function(){},
    hide: function(){},
    resize: function(){}
  },
  methods: {
    onMyButtonTap: function(){
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod: function(){
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
    _loadMoreData: function(){
      console.log("父页面调用组件方法");
      // wx.showNavigationBarLoading(); //在标题栏中显示加载图标
      // wx.hideNavigationBarLoading(); //完成停止加载图标
      wx.showNavigationBarLoading(); //在标题栏中显示加载图标
      let that = this;
      setTimeout(function() {
        wx.hideNavigationBarLoading(); //完成停止加载图标
        wx.stopPullDownRefresh();//停止下拉刷新动画
        that.setData({
          'topVideoList': [
            {
              img: "../../../images/cover01.png",//封面
              title: "黎明杀机精彩搞笑集锦第205期",//作品名
              author: "游戏·点赞飙升",//作者
              play: "2.6万",//播放数
              comments: "205",//评论数
              praise: "1.5万",//点赞数
              time: "3:14",//视频时长
              showComments: true,//true:显示评论，隐藏点赞；false:显示点赞，隐藏评论
              showTime: true,//是否显示播放时长
              showSpcTag: false//是否隐藏作者区域，显示特殊标签
            },
            {
              img: "../../../images/cover02.png",//封面
              title: "徒手搓核弹！魔法输出全靠脑洞！",//作品名
              author: "贤者之心",//作者
              play: "7218.7万",//播放数
              comments: "2510",//评论数
              praise: "227.9万",//点赞数
              time: "3:14",//视频时长
              showComments: false,//true:显示点赞，隐藏评论；false:显示评论，隐藏点赞
              showTime: false,//是否显示播放时长
              showSpcTag: false//是否隐藏作者区域，显示特殊标签
            },
            {
              img: "../../../images/wa.jpg",//封面
              title: "黎明杀机精彩搞笑集锦第205期",//作品名
              author: "游戏·点赞飙升",//作者
              play: "2.6万",//播放数
              comments: "205",//评论数
              praise: "1.5万",//点赞数
              time: "3:14",//视频时长
              showComments: true,//true:显示评论，隐藏点赞；false:显示点赞，隐藏评论
              showTime: true,//是否显示播放时长
              showSpcTag: false//是否隐藏作者区域，显示特殊标签
            },
            {
              img: "../../../images/cover01.png",//封面
              title: "徒手搓核弹！魔法输出全靠脑洞！",//作品名
              author: "贤者之心",//作者
              play: "7218.7万",//播放数
              comments: "2510",//评论数
              praise: "227.9万",//点赞数
              time: "3:14",//视频时长
              showComments: false,//true:显示点赞，隐藏评论；false:显示评论，隐藏点赞
              showTime: false,//是否显示播放时长
              showSpcTag: false//是否隐藏作者区域，显示特殊标签
            },
            {
              img: "../../../images/cover01.png",//封面
              title: "黎明杀机精彩搞笑集锦第205期",//作品名
              author: "游戏·点赞飙升",//作者
              play: "2.6万",//播放数
              comments: "205",//评论数
              praise: "1.5万",//点赞数
              time: "3:14",//视频时长
              showComments: true,//true:显示评论，隐藏点赞；false:显示点赞，隐藏评论
              showTime: true,//是否显示播放时长
              showSpcTag: false//是否隐藏作者区域，显示特殊标签
            },
            {
              img: "../../../images/cover02.png",//封面
              title: "徒手搓核弹！魔法输出全靠脑洞！",//作品名
              author: "贤者之心",//作者
              play: "7218.7万",//播放数
              comments: "2510",//评论数
              praise: "227.9万",//点赞数
              time: "3:14",//视频时长
              showComments: false,//true:显示点赞，隐藏评论；false:显示评论，隐藏点赞
              showTime: false,//是否显示播放时长
              showSpcTag: false//是否隐藏作者区域，显示特殊标签
            },
            {
              img: "../../../images/wa.jpg",//封面
              title: "黎明杀机精彩搞笑集锦第205期",//作品名
              author: "游戏·点赞飙升",//作者
              play: "2.6万",//播放数
              comments: "205",//评论数
              praise: "1.5万",//点赞数
              time: "3:14",//视频时长
              showComments: true,//true:显示评论，隐藏点赞；false:显示点赞，隐藏评论
              showTime: true,//是否显示播放时长
              showSpcTag: false//是否隐藏作者区域，显示特殊标签
            },
            {
              img: "../../../images/cover01.png",//封面
              title: "徒手搓核弹！魔法输出全靠脑洞！",//作品名
              author: "贤者之心",//作者
              play: "7218.7万",//播放数
              comments: "2510",//评论数
              praise: "227.9万",//点赞数
              time: "3:14",//视频时长
              showComments: false,//true:显示点赞，隐藏评论；false:显示评论，隐藏点赞
              showTime: false,//是否显示播放时长
              showSpcTag: false//是否隐藏作者区域，显示特殊标签
            }
          ]
        })

        //调用page中方法去重新设定高度
        that.triggerEvent('mathHeight');
      },2000)
    },
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
        let list1 = that.data.videoList.concat([
          {
            img: "../../../images/cover01.png",//封面
            title: "黎明杀机精彩搞笑集锦第205期",//作品名
            author: "游戏·点赞飙升",//作者
            play: "2.6万",//播放数
            comments: "205",//评论数
            praise: "1.5万",//点赞数
            time: "3:14",//视频时长
            showComments: true,//true:显示评论，隐藏点赞；false:显示点赞，隐藏评论
            showTime: true,//是否显示播放时长
            showSpcTag: false//是否隐藏作者区域，显示特殊标签
          },
          {
            img: "../../../images/cover02.png",//封面
            title: "徒手搓核弹！魔法输出全靠脑洞！",//作品名
            author: "贤者之心",//作者
            play: "7218.7万",//播放数
            comments: "2510",//评论数
            praise: "227.9万",//点赞数
            time: "3:14",//视频时长
            showComments: false,//true:显示点赞，隐藏评论；false:显示评论，隐藏点赞
            showTime: false,//是否显示播放时长
            showSpcTag: false//是否隐藏作者区域，显示特殊标签
          },
          {
            img: "../../../images/wa.jpg",//封面
            title: "黎明杀机精彩搞笑集锦第205期",//作品名
            author: "游戏·点赞飙升",//作者
            play: "2.6万",//播放数
            comments: "205",//评论数
            praise: "1.5万",//点赞数
            time: "3:14",//视频时长
            showComments: true,//true:显示评论，隐藏点赞；false:显示点赞，隐藏评论
            showTime: true,//是否显示播放时长
            showSpcTag: false//是否隐藏作者区域，显示特殊标签
          },
          {
            img: "../../../images/liverCover01.jpg",//封面
            title: "徒手搓核弹！魔法输出全靠脑洞！",//作品名
            author: "贤者之心",//作者
            play: "7218.7万",//播放数
            comments: "2510",//评论数
            praise: "227.9万",//点赞数
            time: "3:14",//视频时长
            showComments: false,//true:显示点赞，隐藏评论；false:显示评论，隐藏点赞
            showTime: false,//是否显示播放时长
            showSpcTag: false//是否隐藏作者区域，显示特殊标签
          },
          {
            img: "../../../images/cover01.png",//封面
            title: "黎明杀机精彩搞笑集锦第205期",//作品名
            author: "游戏·点赞飙升",//作者
            play: "2.6万",//播放数
            comments: "205",//评论数
            praise: "1.5万",//点赞数
            time: "3:14",//视频时长
            showComments: true,//true:显示评论，隐藏点赞；false:显示点赞，隐藏评论
            showTime: true,//是否显示播放时长
            showSpcTag: false//是否隐藏作者区域，显示特殊标签
          },
          {
            img: "../../../images/cover02.png",//封面
            title: "徒手搓核弹！魔法输出全靠脑洞！",//作品名
            author: "贤者之心",//作者
            play: "7218.7万",//播放数
            comments: "2510",//评论数
            praise: "227.9万",//点赞数
            time: "3:14",//视频时长
            showComments: false,//true:显示点赞，隐藏评论；false:显示评论，隐藏点赞
            showTime: false,//是否显示播放时长
            showSpcTag: false//是否隐藏作者区域，显示特殊标签
          },
          {
            img: "../../../images/wa.jpg",//封面
            title: "黎明杀机精彩搞笑集锦第205期",//作品名
            author: "游戏·点赞飙升",//作者
            play: "2.6万",//播放数
            comments: "205",//评论数
            praise: "1.5万",//点赞数
            time: "3:14",//视频时长
            showComments: true,//true:显示评论，隐藏点赞；false:显示点赞，隐藏评论
            showTime: true,//是否显示播放时长
            showSpcTag: false//是否隐藏作者区域，显示特殊标签
          },
          {
            img: "../../../images/liverCover01.jpg",//封面
            title: "徒手搓核弹！魔法输出全靠脑洞！",//作品名
            author: "贤者之心",//作者
            play: "7218.7万",//播放数
            comments: "2510",//评论数
            praise: "227.9万",//点赞数
            time: "3:14",//视频时长
            showComments: false,//true:显示点赞，隐藏评论；false:显示评论，隐藏点赞
            showTime: false,//是否显示播放时长
            showSpcTag: false//是否隐藏作者区域，显示特殊标签
          }
        ])
        that.setData({
          'videoList': list1,
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