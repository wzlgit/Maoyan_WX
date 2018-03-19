// pages/movie/movie.js
var API_URL = 'http://m.maoyan.com/movie/'

// 完整URL例子：'http://m.maoyan.com/movie/1182552.json'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showLoading({
      title: '加载中...',
    });

    wx.request({
      url: API_URL + options.id + ".json",
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        wx.hideLoading();
        console.log(res.data);
        var movieDetailModel = res.data.data.MovieDetailModel;
        console.log('movieDetailModel:' + movieDetailModel);
        that.setData({
          movieDetail: movieDetailModel
          
        });
        // console.log('movieDetail:' + movieDetail);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})