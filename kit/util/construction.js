define(function(require, exports, module) {
    "use strict";

    var $tmp = require("kit/util/easyTemplate");            //模板处理方法载入
    var $storage = require("kit/util/plus-storage");        //本地存储模块
    var $urlToJson = require("kit/util/urlToJson");         //数组转json

    var type_debug = false;                                  //debug开关
    window.weixinTips = null;                               //兼容性代码

    

    var sys = {
        cacheTime:300000,
        init:function(config,callback){
            var cfg = {
                'static_path': '../../../',
                "time": new Date().getTime(),
                "domain": "static.star.code4js.com",
                "version": 100
            };
            var fn1 = {
                init:function(){},
                destroy:function(){}
            }

            if(!window.CONFIG){                 //初始config常量补全
                window.CONFIG = cfg;
            }else{
                window.CONFIG = $.extend(cfg,window.CONFIG);
            }

            sys.route = $storage('route');

            sys.ajax_url = config.url;
            sys.id = config.id;
            sys.loading = config.loading_show;
            sys.elastic = config.elastic;
            window.page_data = {
                real_data:{

                }
            };
            sys.default_data = config.data;
            sys.tmp = config.tmp;
            sys.ajax_data = config.ajax_data;
            sys.fn_index = config.fn||fn1;
            sys.cache = config.cache;
            sys.cacheTime = config.cacheTime||sys.cacheTime;

            mui.plusReady(function(){
                sys.storage_init();
                sys.listener();
                mui('body').on('tap', 'a', sys.event.a_click);
                window.APP_construction = sys;
                return sys;
            })
        },
        event:{
            a_click:function(event) {
                var url = this.getAttribute('href');
                var title = $(this).html();
                sys.urlJump(url,title);
            }
        },
        urlJump:function(url,title){
            var d = $urlToJson(url);
            var data = sys.getLocalPath(d.url);
            if(!data){
                return;
            }
            var pageData={
                id: data.module_id,
                url: '_www/modules/index_content.html',
                extras:{
                    ajax_data:d.data,
                    ajax_url:plus.storage.getItem("domain")+d.url,
                    pageData:data.module_data
                },
                styles: {
                    top: '45px',
                    bottom: 0,
                    bounce: 'vertical'
                },
                title:data.title||title

            }
            var view_data = {
                id: data.module_id,
                url: '_www/modules/index.html',
                show:{
                    autoShow:true,//页面loaded事件发生后自动显示，默认为true
                    aniShow:'slide-in-right',//页面显示动画，默认为”slide-in-right“；
                },
                // styles: {
                //     top: "0px",
                //     bottom: '56px', //新页面底部位置
                // },
                extras: {
                    pageData: pageData
                }
            };

            //数据重载来规避多页面打开的事儿
            if (data.module_id == "st_modules_h5_home") {
                mui.openWindow({
                    id: 'index.html',
                    url: '_www/modules/h5/index/index.html',
                    // styles: {
                    //     top: "0px",
                    //     bottom: '56px', //新页面底部位置
                    // },
                    show: {
                        autoShow: true, //页面loaded事件发生后自动显示，默认为true
                        aniShow: 'slide-in-right', //页面显示动画，默认为”slide-in-right“；
                    }
                });
                return;
            }
            var other_this_view = plus.webview.getWebviewById( data.module_id.replace('st_modules_','') );
            if(other_this_view&&(!$.isEmptyObject(d.data))){
                mui.fire(other_this_view,'viewReload',{ajax_data:d.data});  //数据重载方法,可多页面调用
            }
            mui.openWindow(view_data);

        },
        listener:function(){
            window.addEventListener('viewReload',function(e){
                $(window).scrollTop(0);
                $('#'+sys.id).html('<div class="fakeloader"><div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div><div class="text">数据加载中...</div></div>');
                sys.ajax_data = e.detail.ajax_data;
                sys.storage_init();
            });
        },
        getLocalPath:function(path){
            var a = sys.route;
            var data;
            for (var i = 0; i < a.length; i++) {
                if($.trim(a[i].path)==$.trim(path)){
                    data = a[i].data.default_data.modules[0];
                    return {
                        path:data.template[0].replace('template/index.html','')+data.id.replace('st_modules_h5_','')+'.html',
                        module_id:data.id,
                        title:data.title,
                        module_data:data
                    };
                }
            }
            return null;
        },
        storage_init:function(){
            var id_data = $storage(sys.id);
            var memoryData;
            var btn = true;
            if(!$.isEmptyObject(sys.ajax_data)){
                memoryData = sys.memory(sys.ajax_data);
                if(memoryData){
                    id_data = memoryData.data;
                    if((mui.now() - memoryData.cacheTime) < sys.cacheTime){
                        btn = false;
                    }
                }
            }
            if(id_data){
                sys.default_data[sys.id] = $.extend(true,sys.default_data[sys.id],id_data);
            }
            +function(){
                try{
                    sys.initSomeThing(sys.id,sys.default_data[sys.id]);
                }catch(e){
                    if(type_debug){
                        console.log('模板引入发生错误'+sys.id+JSON.stringify(e)+"line:161");
                        console.log(sys.id+JSON.stringify(sys.default_data[sys.id]));
                    }
                }
            }()

            if(sys.loading){
                $(".mui-content").css('position','relative')
                $('body').prepend('<div id="pageLoading" class="mui-content" style="position: relative;height: 50px;overflow: hidden;transition:all .4s;-webkit-transition: all .4s; "><div class="mui-block mui-visibility"><div class="mui-pull"><div class="mui-pull-loading mui-icon mui-spinner" style="transition: -webkit-transform 0.3s ease-in; transform: rotate(180deg); animation: spinner-spin 1s step-end infinite;"></div><div class="mui-pull-caption">数据更新...</div></div></div></div>')
            }

            if(btn){

                sys.ajax_reload();

            }else{

                sys.closeLoading();
            }

        },
        closeLoading:function (msg){
            var loading = document.getElementById('pageLoading');
            if(loading){
                setTimeout(function(){
                    loading.style.marginTop = '-50px'
                },100);       //loding必须延迟执行,不然会显示不出动画效果
                loading.querySelector('.mui-pull-caption').innerHTML = (msg||'加载成功!');
            }
        },
        memory:function(json,value){        //临时寄存器(妈的感觉这块逻辑写的特别别扭)
            var data,cont;
            cont = 50;
            data = $storage(sys.id);
            function setMemory(){
                var d,i;

                if(!data){
                    data = [];
                }else{
                    d = getMemory('all')
                    i = d.index;
                }

                if(i){
                    data.splice(i, 1)
                }

                json.cacheTime = mui.now();
                json.data = value;
                data.unshift(json);

                if(data.length>=cont){
                    data.splice( cont, (data.length-cont) )
                }

                $storage(sys.id,data);
            }

            function getMemory(type){
                var i,btn,attr;
                if((!data)||typeof data != 'object'){
                    return;
                }
                for (i = 0; i < data.length; i++) {
                    btn = true;
                    for (attr in json){
                        if(json[attr] != data[i][attr]){
                            btn = false;
                            continue;
                        }
                    }
                    if(btn){
                        if(type == 'all'){
                            return {'index':i,'data':data[i]};
                        }
                        return data[i];
                    }
                }
                return {};
            }

            if(value){
                setMemory();
            }else{
                return getMemory();
            }
        },
        ajax_reload:function (callback){
            $.ajax({
                url:sys.ajax_url,
                data: $.extend({pjax:1},sys.ajax_data),
                dataType: 'json', //服务器返回json格式数据
                type: 'get', //HTTP请求类型
                timeout: 10000, //超时时间设置为10秒；
                success: function(data) {
                    if(data.code == 0){ //有bug
                        var d = data.data.real_data[sys.id];
                        var code = null;
                        d = mui.extend(sys.default_data[sys.id],d);
                        delete d.jssdk;
                        delete d._extra;
                        if($.isEmptyObject(sys.ajax_data)){
                            code = $storage(sys.id,d);
                        }else{
                            sys.memory(sys.ajax_data,d);
                            code = 1;
                        }
                        if(code == 1){
                            if(sys.fn_index.destroy)sys.fn_index.destroy(d);
                            +function(){
                                try{
                                    sys.initSomeThing(sys.id,sys.default_data[sys.id] );
                                }catch(e){
                                    if(type_debug){
                                        console.log('模板引入发生错误'+JSON.stringify(e)+"line:273");
                                        console.log(JSON.stringify(sys.default_data[sys.id]));
                                    }
                                }
                            }()
                        }else{
                        }
                        if(callback)callback();
                        sys.closeLoading()
                    }
                },
                error: function(e) {
                    sys.closeLoading('网络错误'+"line:283")
                    if((e.statusText != "timeout")&&type_debug){
                        console.log('请求错误,下面打印错误代码'+"line:283")
                        console.log(sys.ajax_url)
                        console.log(JSON.stringify($.extend({pjax:1},sys.ajax_data)))
                        console.log(JSON.stringify(e));
                    }
                }
            });
        },
        initSomeThing:function (id,data){
            if(!data){
                if(type_debug)console.log('数据传入出错,跳出执行区'+"line:293")
                return;
            }
            window.page_data.real_data[id] = data;
            window.pageData = data;
            data._extra = window.CONFIG;

            var jssdk = {
                "appId": "必填，公众号的唯一标识",
                "timestamp": "必填，生成签名的时间戳",
                "nonceStr": "必填，生成签名的随机串",
                "signature": "必填，签名，见附录1"
            }
            data.jssdk = jssdk;
            if(type_debug){
                console.log(JSON.stringify(data))
                console.log($tmp(sys.tmp,data))
            }
            document.getElementById(id).innerHTML = $tmp(sys.tmp,data);
            $('.mui-bar').remove();
            $('.container').css('top', '0');
            sys.fn_index.init(data);
        }
    }

    return sys.init;
});
