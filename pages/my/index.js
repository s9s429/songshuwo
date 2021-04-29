Page({
  data: {
    screenHei: 0
  },

  onLoad: function (options) {
    let _that = this;
    let utils = require("../../utils/util");
    let whei = wx.getSystemInfoSync().windowHeight;
    let query = wx.createSelectorQuery().in(this);
    query.select('.header').boundingClientRect(res => {
      _that.setData({
        screenHei: whei - res.height - utils.getRPX(20) + 'px'
      })
    }).exec()
  }
})