(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"0d0b":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.color51[data-v-b628df74]{color:#333}.size22[data-v-b628df74]{font-size:%?22?%}.clamp-set[data-v-b628df74]{white-space:normal!important;display:-webkit-box;-webkit-box-orient:vertical!important;-webkit-line-clamp:2!important;overflow:hidden}.common-flex[data-v-b628df74]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.goods-list[data-v-b628df74]{margin:0 %?22?%;margin-bottom:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.goods-list .goods-item[data-v-b628df74]{background-color:#fff;width:%?347?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:%?15?% 0;border-radius:%?15?%}.goods-list .goods-item[data-v-b628df74]:nth-of-type(2n-1){margin-right:%?15?%}.goods-list .goods-item .main-img[data-v-b628df74]{width:%?347?%;height:%?347?%;display:block;border-radius:%?15?% %?15?% 0 0}.goods-list .goods-item .info[data-v-b628df74]{position:relative;width:100%;min-height:%?160?%;-webkit-box-sizing:border-box;box-sizing:border-box}.goods-list .goods-item .info .s-item[data-v-b628df74]{padding:0 %?13?%;position:absolute;top:0;width:100%;font-size:%?28?%;color:#000;white-space:normal!important;display:-webkit-box;-webkit-box-orient:vertical!important;-webkit-line-clamp:2!important;overflow:hidden}.goods-list .goods-item .info .priceGroup[data-v-b628df74]{padding:0 %?13?%;position:absolute;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#ffa70a;font-size:%?24?%;margin-top:%?44?%;margin-bottom:%?18?%}.goods-list .goods-item .info .priceGroup .price-num[data-v-b628df74]{font-size:%?32?%}.goods-list .goods-item .info .priceGroup .del-price[data-v-b628df74]{color:#aaa;font-size:%?24?%;margin-left:%?8?%}.goods-list .goods-item .shopping-car[data-v-b628df74]{width:%?48?%;height:%?48?%;display:block;margin-right:%?7?%}',""])},"16d7":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.post=e.get=e.LOCAL_SERVER=void 0;var o=a(i("795b")),n="http://app.smartinvoker.com";e.LOCAL_SERVER=n;var s=function(t,e,i){return new o.default(function(a,o){uni.request({url:n+t,data:e,method:i,success:function(t){10006===t.data.code?uni.showModal({title:"提示",content:"连接失败，请重新登录",confirmText:"去登录",cancelText:"随便看看",success:function(t){t.confirm&&uni.navigateTo({url:"/pages/public/login?backUrl=/pages/index/index"})}}):a(t)},fail:function(t){o(t)}})})},r=function(t,e){return s(t,e,"GET")};e.get=r;var c=function(t,e){return s(t,e,"POST")};e.post=c},"1f77":function(t,e,i){"use strict";i.r(e);var a=i("ca4b"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},"224a":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"goods-list"},t._l(t.classifyGoodsList,function(e,a){return i("v-uni-view",{key:e.id,staticClass:"goods-item",attrs:{id:"main-"+e.id}},[i("v-uni-image",{staticClass:"main-img",attrs:{src:e.original_img},on:{click:function(i){i=t.$handleEvent(i),t.toDetail(e)}}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-text",{staticClass:"s-item",on:{click:function(i){i=t.$handleEvent(i),t.toDetail(e)}}},[t._v(t._s(e.goods_name))]),i("v-uni-view",{staticClass:"priceGroup"},[i("v-uni-view",{staticClass:"price",on:{click:function(i){i=t.$handleEvent(i),t.toDetail(e)}}},[i("v-uni-text",[t._v("¥"),i("v-uni-text",{staticClass:"price-num"},[i("strong",[t._v(t._s(e.shop_price))])])],1),i("v-uni-text",{staticClass:"del-price"},[t._v("¥"),i("del",[i("strong",[t._v(t._s(e.shop_price))])])])],1),e.store_id?i("v-uni-image",{staticClass:"shopping-car",attrs:{src:"../../static/icon_buycar02.png"},on:{click:function(e){e=t.$handleEvent(e),t.addCart(a)}}}):t._e()],1)],1)],1)}),1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},"5f86":function(t,e,i){"use strict";i.r(e);var a=i("224a"),o=i("7193");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("fa94");var s=i("2877"),r=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"b628df74",null);e["default"]=r.exports},7193:function(t,e,i){"use strict";i.r(e);var a=i("bc06"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},"76a7":function(t,e,i){"use strict";i.r(e);var a=i("a11d"),o=i("1f77");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("cafb");var s=i("2877"),r=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"159b5664",null);e["default"]=r.exports},"99d1":function(t,e,i){var a=i("0d0b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("6611781e",a,!0,{sourceMap:!1,shadowMode:!1})},"9fb7":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.color51[data-v-159b5664]{color:#333}.size22[data-v-159b5664]{font-size:%?22?%}.clamp-set[data-v-159b5664]{white-space:normal!important;display:-webkit-box;-webkit-box-orient:vertical!important;-webkit-line-clamp:2!important;overflow:hidden}.common-flex[data-v-159b5664]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}\n/* 搜索框 */.mp-search-box .input-box[data-v-159b5664]{width:100%;padding:%?30?% %?26?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#000}.mp-search-box .input-box .input[data-v-159b5664]{position:relative;left:0;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.mp-search-box .input-box .input .icon_search[data-v-159b5664]{position:absolute;left:%?24?%;width:%?23?%;height:%?24?%}.mp-search-box .input-box .input .ser-input[data-v-159b5664]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:%?56?%;line-height:%?56?%;font-size:%?28?%;color:#606266;border-radius:20px;background:#27272a;padding:0 %?60?%}.mp-search-box .input-box .input .icon_close[data-v-159b5664]{position:absolute;right:%?12?%;width:%?40?%;height:%?40?%;z-index:1111}.mp-search-box .input-box .icon_mes[data-v-159b5664]{width:%?120?%;height:%?60?%;line-height:%?60?%;font-size:%?30?%;background:-webkit-gradient(linear,left top,right bottom,from(#ffcc58),to(#ffa200));background:-o-linear-gradient(top left,#ffcc58,#ffa200);background:linear-gradient(to bottom right,#ffcc58,#ffa200);margin:0;padding:0;margin-left:%?26?%;border-radius:%?45?%}.mp-search-box .search-key[data-v-159b5664]{font-size:%?30?%;padding:%?30?% %?30?% 0 %?30?%}.mp-search-box .search-key .key-list[data-v-159b5664]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;padding-top:%?30?%}.mp-search-box .search-key .key-list .key-item[data-v-159b5664]{width:33.3%;padding-right:%?30?%;margin-bottom:%?30?%;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.mp-search-box .search-key .key-list .key-item[data-v-159b5664]:nth-of-type(3n){padding-right:0}.mp-search-box .search-key .key-list .key-item .info[data-v-159b5664]{background-color:#e5e5e5;border-radius:%?45?%;font-size:%?26?%;padding:%?10?% 0;color:#6a6a6a}.mp-search-box .search-key .key-list .key-item .active[data-v-159b5664]{background:-webkit-gradient(linear,left top,right bottom,from(#ffcc58),to(#ffa200))!important;background:-o-linear-gradient(top left,#ffcc58,#ffa200)!important;background:linear-gradient(to bottom right,#ffcc58,#ffa200)!important;color:#000}.mp-search-box .search-key .empty[data-v-159b5664]{font-size:%?24?%;color:#333;margin-top:%?30?%}.mp-search-box .title[data-v-159b5664]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.mp-search-box .title .delete[data-v-159b5664]{width:%?35?%;height:%?35?%;display:block}\n/* 搜索框 */.goods-main[data-v-159b5664]{padding-top:%?10?%;background-color:#fff}',""])},a11d:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"mp-search-box"},[i("v-uni-view",{staticClass:"input-box"},[i("v-uni-view",{staticClass:"input"},[i("v-uni-image",{staticClass:"icon_search",attrs:{src:"../../static/icon_search.png"}}),i("v-uni-input",{staticClass:"ser-input",attrs:{type:"text",placeholder:"输入关键字搜索","placeholder-style":"color:#a3a3a4",value:t.val},on:{input:function(e){e=t.$handleEvent(e),t.inputValue(e)}}}),i("v-uni-image",{staticClass:"icon_close",attrs:{src:"../../static/close.png"},on:{click:function(e){e=t.$handleEvent(e),t.clear(e)}}})],1),i("v-uni-button",{staticClass:"icon_mes",on:{click:function(e){e=t.$handleEvent(e),t.search(e)}}},[t._v("搜索")])],1),0===t.classifyGoodsList.length?i("v-uni-view",{staticClass:"search-key"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v("历史搜索")]),i("v-uni-image",{staticClass:"delete",attrs:{src:"../../static/delete_key.png"},on:{click:function(e){e=t.$handleEvent(e),t.deleteHistory(e)}}})],1),t.searchKeyword.length>0?i("v-uni-view",{staticClass:"key-list"},t._l(t.searchKeyword,function(e,a){return i("v-uni-view",{key:a,staticClass:"key-item"},[i("v-uni-view",{staticClass:"info"},[t._v(t._s(e))])],1)}),1):i("v-uni-view",{staticClass:"empty"},[t._v("暂无搜索历史")])],1):i("v-uni-view",{staticClass:"goods-main"},[i("goods-list",{attrs:{classifyGoodsList:t.classifyGoodsList}})],1)],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},ab1a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getGoodsDetailByGoodsId=o,e.listGoods=n,e.listGoodsSpec=s,e.queryPinTuan=r,e.GoodsComments=c;var a=i("16d7");function o(t){return(0,a.get)("/aosuite/notokenapi/app/v1/getGoodsDetailByGoodsId.jhtml",t)}function n(t){return(0,a.get)("/aosuite/notokenapi/app/v1/GoodsLists.jhtml",t)}function s(t){return(0,a.post)("/aosuite/api/app/v1/listGoodsSpec.jhtml",t)}function r(t){return(0,a.get)("/aosuite/notokenapi/app/v1/queryPinTuan.jhtml",t)}function c(t){return(0,a.get)("/aosuite/api/app/v1/GoodsComments.jhtml",t)}},bc06:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{classifyGoodsList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{toDetail:function(t){this.$emit("toDetail",t)},addCart:function(t){this.$emit("addCart",t)}}};e.default=a},ca4b:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("b6d0")),n=a(i("774e")),s=i("ab1a"),r=a(i("5f86")),c={data:function(){return{val:"",classifyGoodsList:[],searchKeyword:[]}},components:{goodsList:r.default},onLoad:function(){console.log("search"),this.searchKeyword=uni.getStorageSync("searchKeyword")||[]},methods:{inputValue:function(t){this.val=t.detail.value,t.detail.value&&(this.val=t.detail.value)},search:function(){var t=this;this.classifyGoodsList=[],console.log(this.val),this.val&&(this.searchKeyword.push(this.val),this.searchKeyword=(0,n.default)(new o.default(this.searchKeyword)),uni.setStorageSync("searchKeyword",this.searchKeyword));var e={page:"1",cat_id:"",cat_id2:"",keywords:this.val,is_recommend:"0"};(0,s.listGoods)(e).then(function(e){console.log(e),1===e.data.code&&(t.classifyGoodsList=e.data.data.list)})},clear:function(){this.val=""},deleteHistory:function(){this.val="",this.searchKeyword=[],uni.setStorageSync("searchKeyword",this.searchKeyword)},debounce:function(t,e,i){clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.call(null,i)},e)}}};e.default=c},cafb:function(t,e,i){"use strict";var a=i("f974"),o=i.n(a);o.a},f974:function(t,e,i){var a=i("9fb7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("1eb9f45a",a,!0,{sourceMap:!1,shadowMode:!1})},fa94:function(t,e,i){"use strict";var a=i("99d1"),o=i.n(a);o.a}}]);