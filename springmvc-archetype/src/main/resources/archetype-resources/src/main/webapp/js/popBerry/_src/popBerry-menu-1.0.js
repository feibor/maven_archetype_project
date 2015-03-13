/*
 *@author lipenfei
 *@Date 2014-6-11
 *菜单的模块，需要bootstrap的支持
 *@support Google Chrome,Safari,FireFox
 *@version 1.0 beta
 */

window.popArry = window.popArry || {};
var module = (function($,Broad) {
	if(!Broad){
		alert("broad组件尚未添加，请加入broad组件js!!");
		return;
	};
	window.popArry.page = function(){
			this.title;
			this.head;
			this.body;
	};
	window.popArry.menu = function() {
		var that = this;
		var broad = new Broad().broad;
		
		var bundleAction = function(obj) {
			var containerId = defaults.init.containerId;
			/*
			 * 点击某个按钮时，需要消除其他按钮的class
			 */
			if(defaults.setting.ifBundleActoin){//如果绑定了bundleAction，则进行此操作
				oldActivObj = "#" + containerId + " li."
				+ defaults.init.activeClass;
				$(oldActivObj).removeClass();
				$(obj).parent("li").addClass(defaults.init.activeClass)
			}
		};

		/* 默认属性和配置信息 */
		var defaults = {
			init : {
				containerId : "",
				activeClass : "active",// 激活菜单选项的class名称，默认为active
				topWaitingBar : true
			// 顶部的等待条。
			},
			setting : {
				ifBundleActoin:true
			},
			data : {},
			callback : {
				loadPageCallback:loadPageCallback	//加载页面后的callBack函数
			}
		};
		
		var loadPageCallback = function(data){
				var str  = data.split("`,`");
				var page = new window.popArry.page();
				page.title =str[0];
				page.head =str[1];
				page.body =str[2];
				page.leftBarIcon=str[3]
				page.leftBarGlobalKey=str[4]
				broad(that.ajaxCallbackListeners,page);
		}

		// 添加菜单的监听
		var menuActionListeners = [];

		this.menuClickListeners = [ bundleAction ];// 菜单单击事件监听，默认的单机事件为bundleAction

		this.ajaxCallbackListeners = [];// 菜单单击事件监听，默认的单机事件为bundleAction
		this.beforeAjaxListeners = [];//
		this.afterAjaxListeners = [];//
		this.errorAjaxListeners = [];//

		this.initMenu = function(options) {
			defaults = $.extend(true, defaults, options);// 需要使用深度嵌套

			
			
			/* 通知机制---start */
			// 将单击事件的所有动作加入函数
			that.clickAction(that.menuClickListeners);
			
			that.menuClickListeners.push(function(clickObj){
				that.loadPage(clickObj);
			});
			
			/* 通知机制---end */
		};
		
		this.initButton = function(obj) {//普通对象
			
//			defaults = $.extend(true, defaults, options);// 需要使用深度嵌套
			
			/* 通知机制---start */
			// 将单击事件的所有动作加入函数
			that.clickAction(that.menuClickListeners);
			
			that.menuClickListeners.push(function(clickObj){
				that.loadPage(clickObj);
			});
			
			/* 通知机制---end */
		};
		

		this.clickAction = function(listeners) {// 执行单击函数，并加入监听模块。
			var containerId = defaults.init.containerId;
			$("#" + containerId + " li a").click(function() {
				broad(listeners,$(this));
			});
		}

		this.pushOnclickFunction = function(functionObj) {// 需要传入的function
			that.menuClickListeners.push(functionObj);// 先将函数加入菜单单机事件的监听
			// 先将函数加入菜单单机事件的监听
		}
		
		this.pushAjaxCallback = function(functionObj) {// ajax的callback函数之后需要执行的函数
			that.ajaxCallbackListeners.push(functionObj);
		}
		
		this.pushBeforeAjax = function(functionObj){
					that.beforeAjaxListeners.push(functionObj);
		};
		
		this.pushAfterAjax = function(functionObj){
					that.afterAjaxListeners.push(functionObj);
		};

		this.pushErrorAjax = function(functionObj){
			that.errorAjaxListeners.push(functionObj);
		};
		
		this.loadPage = function(clickObj){//ajax方式加载页面，之后执行callBack函数
			
				broad(that.beforeAjaxListeners);
				
				var url = clickObj.attr("url");
				
				var flag = clickObj.attr("flagName");
				
				if(url.indexOf("?")>=0){
					url+="&"+flag+"="+clickObj.attr("id");
				}else {
					url+="?"+flag+"="+clickObj.attr("id");
				}
				
				window.location.href=url;
				
//				$.ajax({
//					type: "POST",
//					url: clickObj.attr("url"),
//					data:{},
//					dataType: "html",
//					success : function(data) {
//						broad(that.afterAjaxListeners);
//						loadPageCallback(data);
//					},
//					error:function(data){
//						broad(that.errorAjaxListeners);
//					}
//				});
		}
	};
})(jQuery,window.popArry.broad);//这样的写法是为了独立于jquery模块