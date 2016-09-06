define("modules/signup/uploadPhoto/js/index",[],function(require,exports,module){function init(opts){if("weixin"===platform)seajs.use("http://res.wx.qq.com/open/js/jweixin-1.0.0.js",function(weixinSDK){wx=weixinSDK;var info={debug:false,jsApiList:["chooseImage","uploadImage"]};for(var key in page_data.default_data.modules[0].data.jssdk)if("url"!=key)info[key]=page_data.default_data.modules[0].data.jssdk[key];wx.ready(function(){}),wx.error(function(res){}),wx.config(info)});else if("weibo"===platform)seajs.use("http://js.t.sinajs.cn/open/thirdpart/static/jsbridge-sdk/public/weibo_mobile_sdk_min.js?version=20160615",function(ret){var data=page_data.default_data.modules[0].data.jssdk,info={appkey:data.appid,debug:false,timestamp:data.timestamp,noncestr:data.noncestr,signature:data.signature,scope:["pickImage"]};ret.ready(function(api){api.checkAvailability({api_list:info.scope,success:function(ret){WeiboJS=api},fail:function(msg,code){}})}),ret.error(function(message){}),ret.config(info)});$("#st_modules_signup_uploadPhoto").on("touchend",".chooseImage",function(){var length=$(this).find("img").length;if(!length)if("weixin"===platform)runImage.WXchooseImage($(this));else if("weibo"===platform)runImage.WBchooseImage($(this))}).on("touchend","#nextStep",function(e){if($(this).hasClass("none"))return;if($(this).addClass("none").text("正在上传，请稍后……"),"weixin"===platform)runImage.WXuploadImage();else if("weibo"===platform)runImage.WBuploadImage()}).on("touchend",".imgRemove",function(){$(this).parent().attr("style","").html("");var length=$(".chooseImage .imgRemove").length;if(length<3)$("#nextStep").addClass("none");if(e.stopPropagation)e.stopPropagation();else e.cancelBubble=true})}function destroy(opts){runImage=null,$("#st_modules_signup_submit").off()}var WeiboJS,platform=page_data.default_data.modules[0].data.platform,wx=null,serverIds=[],runImage={uploadIndex:0,WXchooseImage:function(that){wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(res){var localIds=res.localIds,img=$("<img />").attr("src",localIds).addClass("waitUp");that.html(img).append('<span class="imgRemove close-icon"></span>').css("background","#fff");var length=$(".chooseImage .imgRemove").length;if(3===length)$("#nextStep").removeClass("none")}})},WXuploadImage:function(){var localId=$(".waitUp").eq(runImage.uploadIndex++).attr("src");wx.uploadImage({localId:localId,isShowProgressTips:0,success:function(res){var serverId=res.serverId;if(serverIds.push(serverId),serverIds.length<3)return void runImage.WXuploadImage();runImage.uploadIndex=0;var data={image_data:serverIds};$.ajax({type:"post",url:page_data.default_data.modules[0].data.submit_url,data:data,dataType:"json",success:function(msg){if(0!=msg.code){if(502==msg.code)return void(window.location.href=msg.url);return void alert(msg.message)}window.location.href=page_data.default_data.modules[0].data.next_url},error:function(){$("#nextStep").removeClass("none").text("下一步"),alert("网络错误，请刷新页面或稍后重试")}})}})},WBchooseImage:function(that){if(null==WeiboJS)alert("weibo jssdk not ready, please wait");WeiboJS.pickImage({source:"choose"||"camera",count:1,success:function(ret){var img=$("<img />").attr("src","data:image/jpeg;base64,"+ret.base64).addClass("waitUp");that.html(img).append('<span class="imgRemove close-icon"></span>');var length=$(".chooseImage .imgRemove").length;if(3===length)$("#nextStep").removeClass("none")},fail:function(msg,code){}})},WBuploadImage:function(){for(var base64s=[],i=0;i<3;i++){var base64=$(".waitUp").eq(i).attr("src");base64s.push(base64)}$.ajax({type:"post",url:page_data.default_data.modules[0].data.submit_url,data:{image_data:base64s},dataType:"json",success:function(msg){if(0!=msg.code){if(502==msg.code)return void(window.location.href=msg.url);return void alert(msg.message)}$("#nextStep").removeClass("none").text("下一步"),window.location.href=page_data.default_data.modules[0].data.next_url},error:function(){$("#nextStep").removeClass("none").text("下一步"),alert("网络错误，请刷新页面或稍后重试")}})}},platform=page_data.default_data.modules[0].data.platform,that={init:init,destroy:destroy};return that});