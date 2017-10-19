Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    hover: true,
    propagation: false,
    autoplay: false,
    startTime: 50,
    stayTime: 400
  },
  changeHover: function (e) {
    this.setData({
      hover: !this.data.hover
    })
  },
  changePropagation: function (e) {
    this.setData({
      propagation: !this.data.propagation
    })
  },
  startTimeChange: function (e) {
    this.setData({
      startTime: e.detail.value
    })
  },
  stayTimeChange: function (e) {
    this.setData({
      stayTime: e.detail.value
    })
  }
})
