/*
 * 
 *@author lipenfei
 *@Date 2014-6-11
 *进度条的模块,调用了bootstrap相关组件，进度条为长条形。可以支持IE8，但效果较次。
 *@support Google Chrome,Safari,FireFox
 * *@version 1.0 beta
 */
window.popArry = window.popArry || {};
(function($, Broad) {
	if(!Broad){
		alert("broad组件尚未添加，请加入broad组件js!!");
		return;
	}
	window.popArry.progressBar = function(options) {
		
		var that = this;
		
		var broadListeners = [];// 监听
		
		var myBroad = new Broad();
		
		/* 默认属性和配置信息 */
		var defaults = {
			init : {
				containerId : "",
			},
			setting : {},
			data : {
				renderSpeed:500	//导航条渲染的速度， 即设置setInterval的时间间隔。单位是毫秒
			},
			callback : {}
		};
		
		defaults = $.extend(true, defaults, options);// 需要使用深度嵌套
		
		var progress = 0;//当前进度条的进度值
		var refreshIntervalId;//当前progressBar的intervalid值
		
		this.doProgress = function(listeners) {
			var container = $("#"+defaults.init.containerId);
			container.parent().fadeIn(10);
			if (progress >= 100) {
				 progress = 0;
				container.parent().fadeOut();
			}
			 container.css("width", progress + "%");
		}
		
		this.push=function(num){//设置进度条当前进度的值
			progress += num;
//			console.log("progress:"+progress);
			var container = $("#"+defaults.init.containerId);
			container.css("width", progress + "%");
			if (progress >= 100) {
				 progress = 0;
//				clearInterval(refreshIntervalId);
				 
				 setTimeout(function(){
					 container.parent().fadeOut();
				 }, 1000);
			}
		}
		
		this.setProgress=function(num){//设置进度条当前进度的值
			progress = num;
//			console.log("progress:"+progress);
			var container = $("#"+defaults.init.containerId);
			container.css("width", progress + "%");
			if (progress >= 100) {
				 progress = 0;
//				clearInterval(refreshIntervalId);
				 setTimeout(function(){
					 container.parent().fadeOut();
				 }, 1000);
			}
		}
		
		this.getProgress=function(){//设置进度条当前进度的值
				return progress;
		}
		
		
	};
})(jQuery,window.popArry.broad);