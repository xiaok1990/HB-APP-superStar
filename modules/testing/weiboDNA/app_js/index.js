define(function(require, exports, module) {
    "use strict";
    var $share = require("kit/util/plus-share"); //分享
    mui.ready(function() {

        $('body').on('tap',"[action=invite]", function() {
            $share({
                href : "http://douban.com",
                title : "调试中",
                content : "调试中....",
                thumbs : ["_www/images/logo.png"]
            });
        })

    })
});