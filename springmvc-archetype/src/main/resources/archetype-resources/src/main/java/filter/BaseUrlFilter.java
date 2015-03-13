#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
/**
 * AppBaseFilter.java 2012-12-13 上午11:40:56 author:liusz
 *
 * Copyright(c) 2000-2012 HC360.COM, All Rights Reserved.
 */
package ${package}.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

/**
 * 应用路径的过滤器
 * @author lipengfei
 * @version 1.0
 * @since 1.0
 * @date 2014-06-30
 * */
public class BaseUrlFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		
		req.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=UTF-8");
		String appName = req.getContextPath()+"/";
		String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+appName;
		request.setAttribute("appName",appName);
		request.setAttribute("basePath",basePath);
		chain.doFilter(request, response);
	}

	@Override
	public void destroy() {
		
	}

}
