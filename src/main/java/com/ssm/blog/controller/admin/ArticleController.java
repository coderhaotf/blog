package com.ssm.blog.controller.admin;

import java.net.URLDecoder;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ssm.blog.dto.ResultEnum;
import com.ssm.blog.utils.Page;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.ssm.blog.dto.ResultSet;
import com.ssm.blog.entity.Article;
import com.ssm.blog.entity.Tag;
import com.ssm.blog.service.ArticleService;

import javax.servlet.http.HttpServletRequest;


@Controller
@RequestMapping(value = "/admin/article")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public ResultSet add(@RequestBody Article article) {
        System.out.println(article.getMarkdownContent());
        long time = new Date().getTime();
        article.setArticleId(time);
        article.setSaveTime(new Date());
        article.setPublishTime(new Date());
        article.setTitle("Java的深入浅出" + Math.random());
        System.out.println(article.getTags().size());

        Map<String, Object> articleMap = new HashMap<String, Object>();
        articleMap.put("article", article);
        articleMap.put("tags", article.getTags());

        ResultSet resultSet;
        try {
            articleService.save(article);
            resultSet = new ResultSet(true, 200, article);
        } catch (Exception e) {
            resultSet = new ResultSet(false, 500, "新增报错！！");
        }
        return resultSet;
    }

    /*
    * contentType = "application/x-www-form-urlencoded"时，@RequestParam / @RequestBody 跟 request.getParameter 可以接收参数，此时data为JSON对象；
    * contentType = "application/json"时， @RequestParam 跟 request.getParameter无法正常接收参数，因为tomcat不会读取请求体数据和进行相应的参数处理的，即不会解析表单数据来放到request parameter map中。；
    *
    * */
    @RequestMapping(value = "/list/page/{pageIndex}", method = RequestMethod.POST)
    @ResponseBody
    public ResultSet list(@PathVariable Integer pageIndex, @RequestParam(value = "pageSize") Integer pageSize, @RequestParam(value = "searchParam", required = false) String searchParam){
	    //默认页数为第一页
        if (pageIndex == null){
	        pageIndex = 1;
        }
        //默认为空字符串，防止报错
        if (searchParam == null || "".equals(searchParam)){
	        searchParam = "";
        }
        //默认每页条数
        if (pageSize == null){
            pageSize = 10;
        }
        System.out.println("pageIndex: "+pageIndex);
        System.out.println("pageSize: "+pageSize);
        System.out.println("searchParam: "+searchParam);

        //获取查询的总数目
        int totalCount = articleService.getTotalCount(searchParam);
        System.out.println("totalCount: " + totalCount);
        Page page = new Page(pageIndex,pageSize,totalCount);
        Map<String,Object> pageMap = new HashMap<String, Object>();
        pageMap.put("offsetCount",page.getOffsetCount());
        pageMap.put("pageSize",page.getPageSize());
        pageMap.put("searchParam",searchParam);
        ResultSet resultSet;
        try {
            List<Article> articleList = articleService.list(pageMap);
            resultSet = new ResultSet(true, ResultEnum.SUCCESS.getStatusCode(), articleList);
        } catch (Exception e) {
            resultSet = new ResultSet(false, ResultEnum.ERROR.getStatusCode(), ResultEnum.ERROR.getComment());
        }finally {

        }

        return resultSet;
    }

    @RequestMapping(value = "/list/page/{pageIndex}/search/{searchParam}", method = RequestMethod.POST)
    @ResponseBody
    public ResultSet list(@PathVariable String pageIndex, @PathVariable String searchParam, @RequestBody HashMap<String, String> map) {
        if (pageIndex == null || "".equals(pageIndex)) {
            pageIndex = "1";
        }
        Page page = new Page(Integer.valueOf(pageIndex));

        ResultSet resultSet;

        try {
            List<Article> articleList = articleService.list(page, searchParam);
            resultSet = new ResultSet(true, 200, articleList);
        } catch (Exception e) {
            resultSet = new ResultSet(false, 500, "获取文章列表报错！！");
        }

        return resultSet;
    }
}
