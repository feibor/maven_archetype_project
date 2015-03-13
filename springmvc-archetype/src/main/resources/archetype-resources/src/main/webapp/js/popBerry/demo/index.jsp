#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>require.js</title>
<!--css -->

<!--javascript -->
<!-- async属性表明这个文件需要异 步加载，避免网页失去响应。IE不支持这个属性，只支持defer，所以把defer也写上。</script> -->
　<script src="../_src/requirejs-2.1.14.js" defer async="true" ></script>

　<script src="../_src/requirejs-2.1.14.js" data-main="../_src/main"></script>

</head>
<body>
	
	<div class="test" id="test">
	</div>
</body>
<script type="text/javascript">

// 	alert(select.defaultValue);
</script>
  </body>
</html>
