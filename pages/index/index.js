// pages/index/index.js
function getRandomColor() {
    let rgb = []
    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
    
  }
     return '#' + rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmuTxt: '',
    list:[
          {
               id: '299371',
                title: '杨国宜先生口述校史实录',
                videoUrl: 'http://arch.ahnu.edu.cn/uploads/20180517/20180518dag26.mp4'

      },
            {
               id: '299396',
                title: '唐成伦先生口述校史实录',
               videoUrl: 'http://arch.ahnu.edu.cn/uploads/20180517/20180518dag25.mp4'

      },
           {
               id: '299378',
                title: '倪光明先生口述校史实录',
               videoUrl: 'http://arch.ahnu.edu.cn/uploads/20180517/20180518dag22.mp4'

      },
           {
                id: '299392',
               title: '吴兴仪先生口述校史实录',
               videoUrl: 'http://arch.ahnu.edu.cn/uploads/20180517/20180518dag19.mp4'

      }
]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.videoCtx=wx.createVideoContext('myVideo');
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

  
  getDanmu: function(e) {
        this.setData({
            danmuTxt: e.detail.value
    })
    
  },
    /**
   * 发送弹幕
   */
  sendDanmu: function (e) {
     let text = this.data.danmuTxt;
       this.videoCtx.sendDanmu({
            text: text,
         color: getRandomColor()

    })
    
  },
  playVideo: function(e) {
       //停止之前正在播放的视频
      this.videoCtx.stop()
    //更新视频地址
      this.setData({
           src: e.currentTarget.dataset.url
 })
       //播放新的视频
       this.videoCtx.play()
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