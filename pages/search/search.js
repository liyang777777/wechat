const { default: api } = require("../../http/api")

// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotWords:[],
    newhotWord: [],
    value:'',
    flag: 0
  },
   // 书籍搜索 (分类，书名，作者名)
  search(e) {
    // console.log(e.detail.value)
    api.bookSearch(e.detail.value).then(res => {
      this.set.data({
        flag: 1,
      }) 
      console.log(res)
    }).catch(err => {})
  },
   //搜索热词,随机色
   gethotWord(){
    wx.showLoading({
      title: '加载中...',
    })
      api.hotWord().then(res=>{
        wx.hideLoading()
        let arr = []
        res.hotWords.map(item => {
          let obj = {}
          let r = Math.floor(Math.random() * 256);
          let g = Math.floor(Math.random() * 256);
          let b = Math.floor(Math.random() * 256);
          let color = "rgb(" + r + ',' + g + ',' + b + ")";
          obj.color = color
          obj.title = item
          arr.push(obj)
        })
        this.setData({
          hotWords: arr,
          newhotWord: arr
        }) 
        // console.log(res)
      }).catch(err=>{

      })
   },
   //随机数
  change() {
    let index = 0
    index = Math.floor(Math.random() * (this.data.hotWords.length));
    this.setData({
      hotWords: this.data.newhotWord.slice(index),
    })
    this.data.hotWords.map(item => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let color = "rgb(" + r + ',' + g + ',' + b + ")";
      item.color = color
    })
  },

  getmi(){
    wx.showLoading({
      title: '加载中...',
    })
    api.bookSearch(this.data.value).then(res=>{
      wx.hideLoading()
      console.log(res)
     }).catch(err=>{

     })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.gethotWord()
  
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
