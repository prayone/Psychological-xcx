
function ajax (options) {
  wx.showLoading({
    title: '加载中',
  })
  const openid = wx.getStorageSync('openid') || ''
  console.log('jax openid', openid)
  return new Promise((resolve, reject) => {
    console.log(options.data, 'data----')
    wx.request({
      url: options.url,
      timeout: 500000,
      method: options.method,
      data: options.data,
      header: {
        'content-type': 'application/json', // 默认值
        'openid': openid, // open_id
      },
      success: function (res) {
        wx.hideLoading()
        if (res.data.message === 'success') {
          resolve(res.data)
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
          })
          resolve(res.data)
        }
      },
      fail: function (res) {
        wx.hideLoading()
        // reject(false)
      },
      complete: function () {
        wx.hideLoading()
      },
    })
  })
}
export default ajax
