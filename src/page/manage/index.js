// page/manage/index.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                tab_status: 0
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {

        },

        // 切换类型
        switch_tab: function (e) {
                this.setData({
                        tab_status: e.target.id
                })
        },
        getData: function () {
                app.request(manageUrl, {}, function (res) {
                        /* 请求成功时 */
                        if (res.code == 1) {

                        }
                })
        },
        // 点击列表跳转到详情
        jumpDetail: function (e) {
                // e.currentTarget.id 仅用来模拟，为了动态显示任务详情页情况
                wx.navigateTo({
                        url: '/page/taskDetail/index?id=' + e.currentTarget.id,
                        success: function (res) { },
                        fail: function (res) { },
                        complete: function (res) { },
                })
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