define(function(require, exports, module) {
	var jssdk = require("common/share/jssdk");
	var lazyload = require("kit/util/asyncModule");
    var header = require('common/slogon/js/index');
    var dialogTips;
    var tabbar;
    var winWidth=$(window).width();

    var initSlider=function(){
    	$('[node=slider]').each(function(index,item){
    		var $slider=$(item);
	    	var childs=$slider.find('li').length;
	    	$slider.css('width',childs*(300/200)+0.1+'rem').css('display','block');
    	})
    	
    }
    
	function init(opts) {
		initSlider();
		// 延迟加载 tabbar
        lazyload.load("common/tabbar/js/index", function(ret){
            ret.setData(opts.tabbar);
            ret.setActiveTab(3);
            tabbar = ret;
        });
        // 公共头部
        header.init(); 
	}

	function destroy(opts) {
		if(tabbar){
            tabbar.destroy();
        }
        header.destroy(); 
	}
	var that = {
		init: init,
		destroy: destroy
	};
	return that;
});