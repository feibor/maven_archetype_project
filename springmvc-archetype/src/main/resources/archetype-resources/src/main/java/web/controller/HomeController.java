#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.web.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author lipengfei(Andrew Lee) Mar 8, 2015
 * 
 */
@Controller
public class HomeController extends BaseController {
	
	/**
	 * 
	 * @author lipengfei
	 * @date Mar 8, 2015 1:30:28 PM
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value="/admin/product/productList",method={RequestMethod.GET,RequestMethod.POST})
	public String productList(HttpServletRequest request,HttpServletResponse response, ModelMap model) throws IOException{
		System.out.println("test");
		return "/index";
	}
	
}
