
define(function(require, exports, module) {
    var $share = require("kit/util/plus-share/shareUI");
    var runImage = {
        uploadIndex: 0,
        title: function() {
            var title = [
                '我在参加百万网红培养计划，毫无尿点的作业必须你来点评！别隐藏潜质，你也被发现了！',
                '比扑倒汉子更让你高潮！我在参加百万网红培养计划，作业你来点评！湿湿的星梦，你也必须有！',
                '你能火的原因只有一个！我在参加百万网红培养计划快来点评，带你一起燃梦！',
                '只想裸露身体，那你就不配红！互联网大咖助力百万网红培养计划，我在参加快来点评！',
                '我们缺一个口活好手指巧的妹纸！百万网红计划——我在参加，你快来点评，一起燃梦！'
            ];
            return title[Math.floor(Math.random() * 5)];
        }
    };

	var sys = {
		event:function(){

			$( '#st_modules_h5_taskResult' ).on('touchend', '#run_share', sys.click_fn.shareThis);

		},
		click_fn:{
			shareThis:function(){
                $share({
                    msg: {
                        href: plus.storage.getItem("domain") + msg.data.share_url,
                        title: runImage.title(),
                        desc: runImage.title(),
                        content: runImage.title(),
                        imgUrl: 'http://tva1.sinaimg.cn/crop.22.48.463.463.180/0068YUDSjw8f7nd3fwmj0j30e80e8weu.jpg', // 分享图标
                        thumbs: ['http://tva1.sinaimg.cn/crop.22.48.463.463.180/0068YUDSjw8f7nd3fwmj0j30e80e8weu.jpg']
                    },
                    success: function(e) {
                        window.APP_construction.urlJump(msg.data.next_url)
                    },
                    error: function(e) {
                        window.APP_construction.urlJump(msg.data.next_url)
                        console.log(JSON.stringify(e))
                    }
                });
			}
		},
		init:function(){
			sys.event();
			$("body").append('<style>#run_share{display:none;}</style>')
		}

	}
	sys.init();

})