Component({
  data: {
    x: 0,
    y: 0,
    isOnTap: false,
    showFirst: true,
    showSecond: false,
    array: [{
      id: 1,
      name: 'xiaoming',
      age: '12'
    },{
      id: 2,
      name: 'xiaomi',
      age: '17'
    }],
    innerText: "我是自定义组件",
    userInfo: "",
    animationData: {}
  },
  lifetimes: {
    attached: function(){
      // console.log("111111111")
      // wx.nextTick(()=> {
      //   console.log("22222222")
      // })
      // console.log("33333333333")
      // let menu = wx.getMenuButtonBoundingClientRect()
      // console.log(menu.width)
      // console.log(menu.height)
      // console.log(menu.left)
      // console.log(menu.top)
      // wx.onKeyboardHeightChange(res => {
      //   console.log(res.height)
      // })
      // wx.chooseImage({
      //   count: 1,
      //   success: function(res){
      //     res.tempFilePaths
      //   }
      // })
    }
  },
  ready: function(){
    let app = getApp();
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  methods: {
    saveImageFile(){
      wx.chooseImage({
        count: 9,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: res => {
          console.log(res)
        },
        fail: res => {
          console.log(res)
        }
      })

      // wx.chooseMessageFile({
      //   count: 9,
      //   type: 'image',
      //   success: res => {
      //     console.log(res.tempFiles)
      //   },
      //   fail: res => {
      //     console.log(res)
      //   }
      // })

      // wx.getImageInfo({
      //   src: '../../images/liverCover02.jpg',
      //   success: res => {
      //     console.log(res)
      //   },
      //   fail: res => {
      //     console.log(res)
      //   }
      // })

      // wx.previewImage({
      //   urls: [
      //     'https://cn.bing.com/th?id=OHR.Ceking_ZH-CN7314711047_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
      //     'https://cn.bing.com/th?id=OHR.Mobula_ZH-CN7830551038_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
      //     'https://cn.bing.com/th?id=OHR.MontalbanoElicona_ZH-CN7061762890_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
      //   ],
      //   showmenu: true
      // })

      // wx.previewMedia({
      //   sources: [
      //     {
      //       url: 'https://cn.bing.com/th?id=OHR.Ceking_ZH-CN7314711047_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
      //       type: 'image'
      //     },
      //     {
      //       url: 'https://cn.bing.com/th?id=OHR.Mobula_ZH-CN7830551038_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
      //       type: 'image'
      //     },
      //     {
      //       url: 'https://cn.bing.com/th?id=OHR.MontalbanoElicona_ZH-CN7061762890_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
      //       type: 'image'
      //     }
      //   ],
      //   success: res => {
      //     console.log(res)
      //   },
      //   fail: res => {
      //     console.log(res)
      //   }
      // })

      // var that = this;
      // wx.getImageInfo({
      //   src: String(img),
      //   success: imgInfo => {
      //     // w = res.width;
      //     // h = res.height*0.3;
      //     let {info} = this.data;
      //     let convasX = imgInfo.width / 4;
      //     let convasY = imgInfo.height / 5;
      //     let canvasWidth = convasX * 3;
      //     let canvasHeight = convasY * 3;
      //     const context = wx.createCanvasContext('canvasOne') 
      //     context.setFillStyle('#ffffff')    
      //     context.fillRect(0, 0, 500, 600)
      //     // context.drawImage(that.data.url, 0, 0, 130, 130 ) 
      //     context.drawImage(that.data.photo_jietu,0,0,400,460);
      //     context.setFontSize(10)
      //     context.setFillStyle("#393939")
      //     context.fillText(that.data.time, 0, 170)  
      //     context.setFontSize(10)
      //     context.setFillStyle("#393939")
      //     context.fillText('当前重量', 410, 170) 
      //     context.setFontSize(15)
      //     context.setFillStyle("#393939")
      //     context.setTextAlign('center')
      //     context.fillText(that.data.newAddress, 10, 350,195)  
      //     context.setFontSize(10)
      //     context.setFillStyle("#393939")
      //     context.fillText(that.data.nowWeight, 410, 190)  
      //     // context.draw(true)
      //     context.draw(false, function () {
      //         wx.canvasToTempFilePath({
      //         x: 0,
      //         y: 0,
      //         width: 460,
      //         height: 470,
      //         destWidth: that.data.moveViewWidth * that.data.scale,
      //         destHeight: that.data.moveViewHeight * that.data.scale,
      //         canvasId: 'canvasOne',
      //         success: function (res) {
      //           // that.data.showImage.url = res.tempFilePath
      //           getApp().globalData.uurl = res.tempFilePath;               
      //           console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++",res.tempFilePath);                           
      //           console.log(res.tempFilePath);
      //           wx.saveImageToPhotosAlbum({
      //             filePath:imageUrl,
      //             success(res) {
      //               console.log(res)
      //             },
      //             fail(res) {
      //                   wx.hideLoading()
      //                       console.log("wx.saveImageToPhotosAlbum--fail res:",res)
      //                 }
      //           })
      //         },
      //         fail(res) {
      //           wx.hideLoading()
      //           console.log("fail res:",res)
      //         }
      //       })
      //     })        
      //   },
      //   fail(res){
      //     console.log(res);
      //   }
      // })

    },
    cha(){
      let app = getApp();
      app.globalData.userInfo = "小红";
      console.log(app.globalData.userInfo);
    },
    changeName(){
      var c = this.data.array
      for(var n = 0; n < c.length; n++){
        if(c[n].id == 1){
          c[n].name = 'xiaoxiaoming';
        }
      }
      this.setData({
        array: c
      })
      if(wx.canIUse('openBluetoothAdapter')){
        wx.showToast({
          title: 'open',
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
          confirmText: '确认认',
          cancelText: '取消消',
          success: function(res){
            if(res.confirm){
              console.log('touch success')
            }else if(res.cancel){
              console.log('touch cancel')
            }
          }
        })
      }
    },
    addName(){
      var c = this.data.array.concat({
        id: Math.floor(Math.random()*10000 + 1),
        name: 'xiaodong',
        age: '13'
      })
      this.setData({
        array : c 
      })
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
        confirmText: '确认认',
        cancelText: '取消消',
        success: function(res){
          if(res.confirm){
            console.log('touch success')
          }else if(res.cancel){
            console.log('touch cancel')
          }
        }
      })
      console.log(this.data.array)
    },
    onTabItemTapp(){
      if(this.data.isOnTap){
        this.setData({
          x: 0,
          y: 0,
          isOnTap: false
        })
      } else {
        this.setData({
          x: 100,
          y: 100,
          isOnTap: true
        })
      }
    },
    getMsg(url, id){
      wx.request({
        url: url,
        data: {
          id: id
        },
        header: {'content-type': 'application/json'},
        success: function(res){
          console.log(res)
        },
        fail: function(res){},
        complete: function(res){}
      })
    },
    testNavig2(){
      wx.pageScrollTo({
        duration: 300,
        scrollTop: 0
      })
    },
    testNavig(){
      wx.pageScrollTo({
        duration: 300,
        selector: '#yui'
      })
    },
    testNavig4(){
      this.animation.rotate(0, 0)
                  .height(100)
                  .width(100)
                  .scale(1)
                  .translate(0, 0)
                  .skew(0, 0)
                  .step({duration: 0})
    this.setData({animation: this.animation.export()})
    },
    testNavig3(){
      console.log('11111111')
      this.animation = wx.createAnimation()
      this.animation.width(300).step()
      // this.animation.rotate(Math.random() * 720 - 360).step()
      this.setData({animation: this.animation.export()})
    }
  }
})