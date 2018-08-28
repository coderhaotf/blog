webpackJsonp([2],{"+mJe":function(e,t,a){"use strict";var l={name:"md-input",props:{icon:String,name:String,type:{type:String,default:"text"},value:[String,Number],placeholder:String,readonly:Boolean,disabled:Boolean,min:String,max:String,step:String,minlength:Number,maxlength:Number,required:{type:Boolean,default:!0},autoComplete:{type:String,default:"off"},validateEvent:{type:Boolean,default:!0}},computed:{computedClasses:function(){return{"material--active":this.focus,"material--disabled":this.disabled,"material--raised":Boolean(this.focus||this.currentValue)}}},watch:{value:function(e){this.currentValue=e}},data:function(){return{currentValue:this.value,focus:!1,fillPlaceHolder:null}},methods:{handleModelInput:function(e){var t=e.target.value;this.$emit("input",t),"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.change",[t]),this.$emit("change",t)},handleMdFocus:function(e){this.focus=!0,this.$emit("focus",e),this.placeholder&&""!==this.placeholder&&(this.fillPlaceHolder=this.placeholder)},handleMdBlur:function(e){this.focus=!1,this.$emit("blur",e),this.fillPlaceHolder=null,"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.blur",[this.currentValue])}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"material-input__component",class:e.computedClasses},[a("div",{class:{iconClass:e.icon}},[e.icon?a("i",{staticClass:"el-input__icon material-input__icon",class:["el-icon-"+e.icon]}):e._e(),e._v(" "),"email"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{type:"email",name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autoComplete:e.autoComplete,required:e.required},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"url"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{type:"url",name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autoComplete:e.autoComplete,required:e.required},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"number"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{type:"number",name:e.name,placeholder:e.fillPlaceHolder,step:e.step,readonly:e.readonly,disabled:e.disabled,autoComplete:e.autoComplete,max:e.max,min:e.min,minlength:e.minlength,maxlength:e.maxlength,required:e.required},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"password"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{type:"password",name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autoComplete:e.autoComplete,max:e.max,min:e.min,required:e.required},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"tel"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{type:"tel",name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autoComplete:e.autoComplete,required:e.required},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"text"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{type:"text",name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autoComplete:e.autoComplete,minlength:e.minlength,maxlength:e.maxlength,required:e.required},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),a("span",{staticClass:"material-input-bar"}),e._v(" "),a("label",{staticClass:"material-label"},[e._t("default")],2)])])},staticRenderFns:[]};var r=a("VU/8")(l,i,!1,function(e){a("fjk6")},"data-v-01ac73e5",null);t.a=r.exports},bBYe:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("woOf"),i=a.n(l),r=a("vHhr"),n=a("+mJe"),o=a("viA7"),s={name:"index",components:{MDinput:n.a,Sticky:r.a},data:function(){var e=this,t=function(t,a,l){""===a||0===a.length?e.$message({message:t.field+"为必传项",type:"error"}):l()};return{article:{},articleForm:{articleId:"",title:"",categories:"",columns:"",tags:"",htmlContent:"",summaryHtmlContent:""},loading_publish:!1,loading_draft:!1,exist_flag:!1,categoryArr:[],columnArr:[],rules:{title:[{required:!0,validator:t,trigger:"blur"}],tags:[{required:!0,validator:t,trigger:"blur"}],categories:[{required:!0,message:"请选择文章分类",trigger:"change"}],columns:[{required:!0,message:"请选择所属专栏",trigger:"change"}]}}},computed:{tagArr:function(){var e=this.articleForm.tags.trim();return e?(e=e.replace(/[^\u4E00-\u9FA5\w\s]+/g,";").replace(/;$/,"")).split(";"):[]},submitForm:function(){var e=i()({},this.articleForm);return e.tags=this.tagArr.map(function(e){return{tagName:e}}),e.status=0,e.categories=e.categories.map(function(e){return{categoryId:e}}),e.columns=e.columns.map(function(e){return{columnId:e}}),e}},mounted:function(){this.getArticleById(this.$route.params)},created:function(){this.getArticleAsset()},methods:{getArticleAsset:function(){var e=this;Object(o.c)().then(function(t){var a=t.data.result;e.categoryArr=a.categories,e.columnArr=a.columns}).catch(function(e){console.log(e)})},getArticleById:function(e){var t=this;Object(o.d)(this.$route.params).then(function(e){t.article=e.data.result,t.articleForm.articleId=t.article.articleId,t.articleForm.title=t.article.title,t.articleForm.categories=t.article.categories.map(function(e){return e.categoryId}),t.articleForm.columns=t.article.columns.map(function(e){return e.columnId}),t.articleForm.tags=t.article.tags.map(function(e){return e.tagName}).join("；")})},updateArticle:function(e){var t=this;this.$refs.articleForm.validate(function(a){!0===a&&(t.exist_flag?t.$notify({title:"提示",message:"已经存在相同的文章标题！",type:"warning",duration:3e3}):(t.submitForm.status=void 0!==e?e:0,0===e?t.loading_draft=!0:1===e&&(t.loading_publish=!0),Object(o.g)(t.submitForm).then(function(e){var a=e.data;t.$notify({title:"提示",message:a.result,type:200===a.status?"success":"warning",duration:5e3}),200===a.status?t.$router.push({name:"articleList",params:{refresh:!0}}):t.$notify({title:"提示",message:"更新文章失败！",type:"error",duration:5e3}),t.loading_draft=!1,t.loading_publish=!1}).catch(function(e){t.loading_draft=!1,t.loading_publish=!1,console.log(e)})))})},publishForm:function(){this.updateArticle(1)},draftForm:function(){this.updateArticle(0)},ifexist:function(){var e=this;this.articleForm.title&&this.articleForm.title!==this.article.title&&Object(o.f)({title:this.articleForm.title}).then(function(t){t.data.result.ifExist?(e.$notify({title:"提示",message:"已经存在相同的文章标题！",type:"warning",duration:3e3}),e.exist_flag=!0):e.exist_flag=!1}).catch(function(e){console.log(e)})},uploadContent:function(e){return this.beforeUpload(e,"content"),!1},uploadSummary:function(e){return this.beforeUpload(e,"summary"),!1},beforeUpload:function(e,t){var a=new FileReader,l=this;a.readAsText(e,"utf8"),a.onload=function(){var a=document.createElement("html");a.innerHTML=this.result,a.getElementsByTagName("footer")[0]&&a.getElementsByTagName("footer")[0].remove(),"content"===t?(l.articleForm.htmlContent=a.getElementsByTagName("body")[0].innerHTML,l.$refs.uploadArticleContent.innerHTML=e.name):"summary"===t&&(l.articleForm.summaryHtmlContent=a.getElementsByTagName("body")[0].innerHTML,l.$refs.uploadArticleSummary.innerHTML=e.name)},l.$notify({title:"提示",message:"本地上传成功！",type:"success",duration:3e3})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"article-container"}},[a("sticky",{staticStyle:{"text-align":"right"}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading_publish,expression:"loading_publish"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:e.publishForm}},[e._v("发布\n    ")]),e._v(" "),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading_draft,expression:"loading_draft"}],attrs:{type:"warning"},on:{click:e.draftForm}},[e._v("草稿")])],1),e._v(" "),a("el-form",{ref:"articleForm",attrs:{model:e.articleForm,rules:e.rules}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[a("MDinput",{attrs:{name:"'title'",required:"",maxlength:100},on:{blur:e.ifexist},model:{value:e.articleForm.title,callback:function(t){e.$set(e.articleForm,"title",t)},expression:"articleForm.title"}},[e._v("\n        标题\n      ")])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{prop:"categories","label-width":"60px",label:"分类:"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.articleForm.categories,callback:function(t){e.$set(e.articleForm,"categories",t)},expression:"articleForm.categories"}},e._l(e.categoryArr,function(e){return a("el-option",{key:e.categoryId,attrs:{label:e.categoryName,value:e.categoryId}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{prop:"columns","label-width":"60px",label:"专栏:"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.articleForm.columns,callback:function(t){e.$set(e.articleForm,"columns",t)},expression:"articleForm.columns"}},e._l(e.columnArr,function(e){return a("el-option",{key:e.columnId,attrs:{label:e.columnName,value:e.columnId}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{prop:"tags","label-width":"60px",label:"标签:"}},[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.articleForm.tags,callback:function(t){e.$set(e.articleForm,"tags",t)},expression:"articleForm.tags"}})],1)],1)],1)],1),e._v(" "),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("h3",[e._v("文章内容上传")]),e._v(" "),a("el-upload",{attrs:{drag:"",limit:1,multiple:!1,"before-upload":e.uploadContent,"auto-upload":!0,action:"/"}},[a("i",{staticClass:"el-icon-upload",staticStyle:{"margin-top":"30px"}}),e._v(" "),a("div",{staticClass:"el-upload__text"},[a("div",{ref:"uploadArticleContent",staticClass:"el-upload__tip",staticStyle:{"margin-bottom":"10px","font-size":"15px"},attrs:{slot:"tip"},slot:"tip"}),e._v("\n            将文件拖到此处，或\n            "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"}},[e._v("点击上传到本地")])],1),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传html文件，且不超过5000kb")])])],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("h3",[e._v("文章摘要上传")]),e._v(" "),a("el-upload",{attrs:{drag:"",limit:1,multiple:!1,"before-upload":e.uploadSummary,"auto-upload":!0,action:"/"}},[a("i",{staticClass:"el-icon-upload",staticStyle:{"margin-top":"30px"}}),e._v(" "),a("div",{staticClass:"el-upload__text"},[a("div",{ref:"uploadArticleSummary",staticClass:"el-upload__tip",staticStyle:{"margin-bottom":"10px","font-size":"15px"},attrs:{slot:"tip"},slot:"tip"}),e._v("\n            将文件拖到此处，或\n            "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"}},[e._v("点击上传到本地")])],1),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传html文件，且不超过5000kb")])])],1)],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(s,u,!1,function(e){a("bqkW")},"data-v-28d3cc16",null);t.default=c.exports},bqkW:function(e,t){},fjk6:function(e,t){},vHhr:function(e,t,a){"use strict";var l={name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleReize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleReize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},reset:function(){this.active&&(this.position="",this.width="auto",this.active=!1,this.isSticky=!1)},handleScroll:function(){this.width=this.$el.getBoundingClientRect().width,this.$el.getBoundingClientRect().top<this.stickyTop?this.sticky():this.reset()},handleReize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:{height:e.height+"px",zIndex:e.zIndex}},[a("div",{class:e.className,style:{top:e.stickyTop+"px",zIndex:e.zIndex,position:e.position,width:e.width,height:e.height+"px"}},[e._t("default",[a("div",[e._v("sticky")])])],2)])},staticRenderFns:[]},r=a("VU/8")(l,i,!1,null,null,null);t.a=r.exports}});
//# sourceMappingURL=2.72a9288796af524f42f4.js.map