//index.js
//获取应用实例
const app = getApp()
var API_URL = 'https://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=10'

Page({
  data: {
    title: '加载中...',
    movies: []
  },
  onLoad:function() {
    var that = this;
    wx.showLoading({
      title: '数据加载中',
    });

    wx.request({
      url: API_URL,
      data:{},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res) {
        wx.hideLoading();
        var data = res.data;
        var moviesArray = data.data.movies;
        console.log(data);

        that.setData({
          title : '猫眼电影',
          movies: moviesArray,
        });
      }
    })
  }
})
