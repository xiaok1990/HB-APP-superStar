define(function(require, exports, module) {
    var jssdk = require("common/share/jssdk");
    var lazyload = require("kit/util/asyncModule");
    var dialogTips;
    var chartTips;
    var platform;
    var share_url;
    var signedRequest = null;
    var WeiboJS, wx, appid;
    var staticDomain;

    var runShare = {
        titleIco: function(){
            var title = ['如何在微博里更好地赚钱?测测这个,结果也许会惊讶掉你的下巴！',
                '想做电商网红?不了解这个怎么能行，,测一测,也许瞬间就会找到人生方向！',
                '如何正确的做电商网红？是时候该测测你的微博电商属性了！',
                '想在微博里月入上万？那就来测测你现在的属性吧！',
                '做网红也是一门学问，尤其是电商网红，测测你现在符合电商网红么？'];
            var ico = [];
            ico.push( 'http://tva1.sinaimg.cn/crop.22.48.463.463.180/0068YUDSjw8f7nd3fwmj0j30e80e8weu.jpg' );
            var random = Math.random();
            return {
                title: title[ Math.floor( random*title.length ) ],
                ico: ico[ Math.floor( random*title.length ) ]
            }
        },
        WXshare: function(){
            var titleIco = this.titleIco();
            wx.onMenuShareTimeline({
                title: titleIco.title, // 分享标题
                link: share_url, // 分享链接
                imgUrl: titleIco.ico, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareAppMessage({
                title: titleIco.title, // 分享标题
                desc: titleIco.title, // 分享描述
                link: share_url, // 分享链接
                imgUrl: titleIco.ico, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        },
        WBshare: function(){
            var titleIco = this.titleIco();
            var items = {
                shareToWeibo: {
                    title: "分享到微博",
                    scheme: "sinaweibo://compose?content=" + titleIco.title + '：' + share_url,
                    code: 1001
                }
            };
            var itemArray = [];
            for( var key in items ){
                itemArray.push( items[key] );
            }
            // 设置分享的文案
            WeiboJS.setSharingContent({
                external:{
                    title: titleIco.title,
                    icon: titleIco.ico,
                    desc: titleIco.title
                }
            });
            // 选择菜单的时候，触发相应的菜单行为
            WeiboJS.on("menuItemSelected", {
                trigger: function(res) {
                    if (res.selected_code != "1001" && Number(res.selected_code) < 3000) {
                        WeiboJS.invokeMenuItem({ code: res.selected_code });
                    }
                }
            });
            // 设置右上角菜单
            WeiboJS.setMenuItems({
                items: itemArray,
                success: function(ret) {},
                fail: function(msg, code) {}
            });
        }
    };

    //美化alert start
    var Alert = function( str ){
        var dom = '<div class="alert_dom mui-popup mui-popup-in" style="display: block;">\
                <div class="mui-popup-inner">\
                    <p class="alert_content"></p>\
                </div>\
                <div class="mui-popup-buttons"><span class="alert_close mui-popup-button mui-popup-button-bold">确定</span></div></div>\
                <div class="alert_dom mui-popup-backdrop mui-active" style="display: block;"></div>';
        var $dom = $( dom );
        $dom.find( '.alert_content' ).html( str );
        $( 'body' ).append( $dom );
        $( '.alert_close' ).on('touchend', function(){
            $( this ).off();
            $( '.alert_dom' ).remove();
            return false;
        });
    }
    //美化alert end

    var Tips = function( str ){
        var dom = '<div id="tips_dom">\
            <div class="mask"></div>\
            <div class="share-tip">\
            <div class="share-block chartTips">\
            <div id="testData"></div>\
            </div><span class="tips_colse mui-icon mui-icon-closeempty"></span>\
            </div>\
            </div>';
        var $dom = $( dom );
        $( 'body' ).append( $dom );
        $( '.tips_colse' ).on('touchend', function(){
            $( this ).off();
            $( '#tips_dom' ).remove();
            return false;
        });
    }

    var scoreTpl = {
        normal: '<div class="bg-line">\
        <span class="status_1" style="left:${data.left}%"><strong>30</strong><em>下限</em></span>\
        <span class="status_2" style="left:${data.right}%"><strong>160</strong><em>上限</em></span>\
        <p id="scale" class="score-slow" style="width:${data.that_scale}%">\
            <span class="mui-badge mui-badge-purple score-slow"><strong>${data.score}</strong><em></em><img src="${data.profile_image}"></span>\
        </p>\
        </div>',
        low: '<div class="bg-line">\
        <span class="status_1" style="left:${data.left}%"><strong>30</strong><em>下限</em></span>\
        <p id="scale" class="score-slow" style="width:${data.that_scale}%">\
            <span class="mui-badge mui-badge-purple score-slow"><strong>${data.score}</strong><em></em><img src="${data.profile_image}"></span>\
        </p>\
        </div>'
    };


    var score = function(opts){
        var data = {};
        var full = opts.max_score > 190 ? opts.max_score : 190;
        data.left = 30 / full * 100;
        data.right = 160 / full * 100;
        data.that_scale = opts.score / full * 100;
        data.profile_image = opts.profile_image;
        data.score = opts.score
        if( data.that_scale >= data.left ){
            var scoreHtml = SCRM.easyTemplate( scoreTpl.normal, data ).toString();
        }else{
            data.left = 30 / 38 * 100;
            data.that_scale = opts.score / 38 * 100;
            var scoreHtml = SCRM.easyTemplate( scoreTpl.low, data ).toString();
        }
        $( '#score-box' ).html( scoreHtml );
    }



    var testDataChart = function(X,Y){
        var option = {
            title: {
                text: '测试记录',
                subtext: '只展示最近7天结果'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: X
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    type:'line',
                    data: Y,
                    markLine: {
                        data: [
                            {
                            name: '正常界限',
                            yAxis: 160
                            },
                            {
                            name: '正常界限',
                            yAxis: 30
                            }
                        ]
                    }
                }
            ]
        };

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('testData'));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption( option );
    };

    var waitHandle = function(ajaxUrl){
        $( '.mui-popup-backdrop, #orange-box' ).show();
        setTimeout(function(){
            $( '#orange-box' ).find('p').html('正在分析你发表过的微博内容...');
        },3000);
        var request = setInterval(function(){
            $.ajax({
                type: 'get',
                url: window.pageURL + '?islook=1&pjax=1',
                dataType: 'json',
                success: function(msg) {
                    if( msg.code != 0 ){
                        //alert( msg.message );
                        return;
                    }
                if( msg.data.real_data.st_modules_h5_businessResult.weibo_user_id ){
                    clearInterval(request );

                    $('.orange-box, .mui-popup-backdrop').remove();
                    SCRM.pjax( window.pageURL );

                }


                },
                error: function(){
                    //alert( '网络错误，请刷新页面或稍后重试' );
                }
            });
        },5000);
    };

    function init(opts) {

        staticDomain = opts._extra.domain;
        share_url = opts.share_url;
        platform = opts.platform;
        appid = opts.jssdk.appid;
        // 初始化 JSSDK
        jssdk.init(platform, opts.jssdk, function(){
            if(platform == 'weibo'){
                WeiboJS = jssdk.getJssdkObject();
                runShare.WBshare();
                return;
            }
            if(platform == 'weixin'){
                wx = jssdk.getJssdkObject();
                runShare.WXshare();
                return;
            }
        });

        if( !opts.weibo_user_id ){
            waitHandle(opts.query_url);
            return;
        }

        score( opts );//得分轴

        // 延迟加载微信分享的 tips
        lazyload.load("common/share/tips/js/index", function(dialog){
            dialogTips = new dialog({
                title: '好了，现在招呼你的朋友帮你提提意见!'
            });
        });

        seajs.use('http://' + opts._extra.domain + '/libs/echarts/3.1.10/echarts.min.js',function(weixinSDK){
            if( !opts.score ){
                return;
            };
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('detail-echarts'));
            // 指定图表的配置项和数据
            var option = {};
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption( opts.detail );
        });

        $( '#st_modules_h5_businessResult' ).on('touchend', '#openTestData', function(){
            Tips();
            testDataChart( opts.chart.x, opts.chart.y );
        }).on('touchend', '#shareTips', function(){
            dialogTips.show();
        }).on('touchend', '#retry', function(){
            if( opts.next_test_time > +((new Date()).getTime().toString().substr(0,10)) ){
                Alert( '亲，你最近才测试过，短时间内微博电商属性变化不大，建议24小时后再来测试！' );
                return;
            }
            SCRM.pjax( opts.retry_url );
        });
    }
    function destroy(opts) {
        $('.orange-box, .mui-popup-backdrop').remove();
        $( '#st_modules_h5_businessResult' ).off();
        $( '.alert_dom' ).remove();
        $( '.alert_close' ).off().remove();
        // Alert = null;
        // waitHandle = null;
        // platform = null;
        // share_url = null;
        // signedRequest = null;
        // WeiboJS = null;
        // wx = null;
        // runShare = null;
    }
    var that = {
        init: init,
        destroy: destroy
    };
    return that;
});