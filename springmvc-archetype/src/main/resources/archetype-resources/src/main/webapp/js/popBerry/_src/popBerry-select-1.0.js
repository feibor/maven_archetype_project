/*
 * 
 *@author lipenfei
 *@Date 2014-6-11
 *@support IE8+，Google Chrome,Safari,FireFox
 *@version 正在完成中...
 */
window.popArry = window.popArry || {};
window.popArry.select = function() {
	var that = this;
	// 创建选项框
	//Create select component
	var createFrame = function() {
		var object = $("#" +defaults.init.containerId );
		var selectTag = $('<select></select>');
		selectTag.attr('multiple', 'multiple');
		selectTag.attr('size', '12');
		selectTag.addClass('switch');
		selectTag.appendTo(object);
		return selectTag;
	};
    //通知外部
	var broad = function (listeners) {
	    switch (arguments.length) {
	        case 1:
	            for (var i = 0; i < listeners.length; i++) listeners[i]();
	            break;
	        case 2:
	            for (var i = 0; i < listeners.length; i++) listeners[i](arguments[1]);
	            break;
	        case 3:
	            for (var i = 0; i < listeners.length; i++) listeners[i](arguments[1], arguments[2]);
	            break;
	        case 4:
	            for (var i = 0; i < listeners.length; i++) listeners[i](arguments[1], arguments[2], arguments[3]);
	            break;
	        case 5:
	            for (var i = 0; i < listeners.length; i++) listeners[i](arguments[1], arguments[2], arguments[3], arguments[4]);
	            break;
	        default://多于五个参数请使用对象传递
	            for (var i = 0; i < listeners.length; i++) listeners[i]();
	            break;
	    }
	};
	/**
	 * 配置信息
	 * @param init 存放一些初始化必要的信息
	 * @param setting  个性化配置信息
	 * @param data  主要用于存放数据
	 * @param prodedure  存放生产类型输出函数，如创造某种类型的框体，默
	 * 									认为select 的multi类型框体，并需要为框体赋值	的函数
	 * @param callback  主要用于存放各类回调函数
	 */
	var defaults = {
		init : {
			containerId : "",
			test:"value"
		},
		setting:{
			namePro:"name",
			idPro:"id",
			resultNamePro:"name",
			resultIdPro:"id",
			defaultClassName:"component_select"
		},
		data:{
			dataSource:"json",		//默认为json数据,后期可能添加ajax数据
			resultDataSource:"json",//默认为json数据,后期可能添加ajax数据
			selectData:[{"name":"test","id":"1"}]
		},
		status:true,//统一加状态码
		errMsg:{
			
		},
		procedure:{
			createFrame:createFrame
		},
		callback : {
			selectToResult : "",
			resultToSelect : ""
		}
	};
	
	
	/**
	 * 先判断是否初始化必要信息，而后组合各个组件
	 */
	this.create = function(options) {
		
		defaults = $.extend(true,defaults,options);//需要使用深度嵌套
		checkIfInit();
		
		var idValue = defaults.init.containerId;
		
		//生产出选择框
//		alert(defaults.init.test);
		var selectTag =  defaults.procedure.createFrame();
//		alert(selectTag);
		
		//生产出结果框
		var resultTag =  createFrame();
		
		//创造一个外部容器
		var divTag = $('<div></div>');
		divTag.addClass(defaults.setting.defaultClassName);
		
		//为外部容器填充组件
		selectTag.appendTo(divTag);
		resultTag.appendTo(divTag);
		
		//为组件填充数据
		procedureValues(selectTag,defaults.data.selectData,defaults.setting.namePro,defaults.setting.idPro);
		procedureValues(resultTag,defaults.data.resultDataSource,defaults.setting.resultNamePro,defaults.setting.resultIdPro);
		
		//初始化组件
		divTag.appendTo($("#" + idValue));
		
	};
    //测试通知机制
	this.AddToRight = function () {
	    //左边按钮添加一个元素
	    //其他操作
	    broad(AddToRightListeners);
	}
	// Detected the init information
	// 判断是否初始化完全
	var checkIfInit = function() {
		if (!defaults.init.containerId) {
			alert("请先初始化容器");
			return;
		}
	};
	
	
	/**
	 * 
	 * 为框体创造出数据,如果有默认数据
	 * 
	 * @param frameObj: 窗体对象
	 * @param jsonData 需要填充的数据
	 * @param name 在窗体中的显示值
	 * @param id 在窗体中显示的选项的value值，即最后取得的数据
	 * 
	 */
	var procedureValues = function(frameObj,jsonData,name,id){
		$(jsonData).each(function(index) {
				var defaultValueOp = $('<option></option>');
				defaultValueOp.html(this[name]);
				defaultValueOp.attr("value",this[id]);
				defaultValueOp.appendTo(frameObj);
		});
	};
    //这是一个测试当从左边添加到右边时触发
	this.AddToRightListeners = [];
	this.getResults = function() {

	};

};