/**
 * @autho lipengfei
 * @describe 新开发的各个模块组件在paths中添加路径即可
 * 
 */
(function (){
    var paths  = [
             'component_js.js',
			 'com_select.js'
             ];
    
//        var path =COMPONENT_CONFIG.COMPONENT_HOME_URL; IE8中会有问题
    
    	path="js/component_js/";
        
        baseURL = path+'_src/';//
    
        for (var i=0,pi;pi = paths[i++];) {
        	$('<script type="text/javascript" src="'+ baseURL + pi +'"></script>').appendTo($("head"));
        }
        
})();
