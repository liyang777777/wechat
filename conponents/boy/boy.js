// conponents/boy/boy.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    male: {
      type: Array
    },
    boy: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goTo(e){
      // console.log(e)
      // let一个变量接受并传参
      let num = e.currentTarget.dataset.item.name
      let index = e.currentTarget.dataset.index
      let six = e.currentTarget.dataset.six
      // console.log(num)
      wx.navigateTo({
        url: `/pages/fantasy/fantasy?name=${num}&index=${index}&six=${six}`,
      })
    },
  }
})
