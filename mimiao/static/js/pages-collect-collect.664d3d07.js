(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-collect-collect"],{"09da":function(t,i,e){"use strict";e.r(i);var a=e("912c"),n=e("0c32");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("6dc9");var s=e("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"984ea2a4",null);i["default"]=c.exports},"0c32":function(t,i,e){"use strict";e.r(i);var a=e("f9a0"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},"0d0b":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.color51[data-v-b628df74]{color:#333}.size22[data-v-b628df74]{font-size:%?22?%}.clamp-set[data-v-b628df74]{white-space:normal!important;display:-webkit-box;-webkit-box-orient:vertical!important;-webkit-line-clamp:2!important;overflow:hidden}.common-flex[data-v-b628df74]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.goods-list[data-v-b628df74]{margin:0 %?22?%;margin-bottom:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.goods-list .goods-item[data-v-b628df74]{background-color:#fff;width:%?347?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:%?15?% 0;border-radius:%?15?%}.goods-list .goods-item[data-v-b628df74]:nth-of-type(2n-1){margin-right:%?15?%}.goods-list .goods-item .main-img[data-v-b628df74]{width:%?347?%;height:%?347?%;display:block;border-radius:%?15?% %?15?% 0 0}.goods-list .goods-item .info[data-v-b628df74]{position:relative;width:100%;min-height:%?160?%;-webkit-box-sizing:border-box;box-sizing:border-box}.goods-list .goods-item .info .s-item[data-v-b628df74]{padding:0 %?13?%;position:absolute;top:0;width:100%;font-size:%?28?%;color:#000;white-space:normal!important;display:-webkit-box;-webkit-box-orient:vertical!important;-webkit-line-clamp:2!important;overflow:hidden}.goods-list .goods-item .info .priceGroup[data-v-b628df74]{padding:0 %?13?%;position:absolute;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#ffa70a;font-size:%?24?%;margin-top:%?44?%;margin-bottom:%?18?%}.goods-list .goods-item .info .priceGroup .price-num[data-v-b628df74]{font-size:%?32?%}.goods-list .goods-item .info .priceGroup .del-price[data-v-b628df74]{color:#aaa;font-size:%?24?%;margin-left:%?8?%}.goods-list .goods-item .shopping-car[data-v-b628df74]{width:%?48?%;height:%?48?%;display:block;margin-right:%?7?%}',""])},"16d7":function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.post=i.get=i.LOCAL_SERVER=void 0;var n=a(e("795b")),o="http://app.smartinvoker.com";i.LOCAL_SERVER=o;var s=function(t,i,e){return new n.default(function(a,n){uni.request({url:o+t,data:i,method:e,success:function(t){10006===t.data.code?uni.showModal({title:"提示",content:"连接失败，请重新登录",confirmText:"去登录",cancelText:"随便看看",success:function(t){t.confirm&&uni.navigateTo({url:"/pages/public/login?backUrl=/pages/index/index"})}}):a(t)},fail:function(t){n(t)}})})},c=function(t,i){return s(t,i,"GET")};i.get=c;var r=function(t,i){return s(t,i,"POST")};i.post=r},"224a":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"goods-list"},t._l(t.classifyGoodsList,function(i,a){return e("v-uni-view",{key:i.id,staticClass:"goods-item",attrs:{id:"main-"+i.id}},[e("v-uni-image",{staticClass:"main-img",attrs:{src:i.original_img},on:{click:function(e){e=t.$handleEvent(e),t.toDetail(i)}}}),e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"s-item",on:{click:function(e){e=t.$handleEvent(e),t.toDetail(i)}}},[t._v(t._s(i.goods_name))]),e("v-uni-view",{staticClass:"priceGroup"},[e("v-uni-view",{staticClass:"price",on:{click:function(e){e=t.$handleEvent(e),t.toDetail(i)}}},[e("v-uni-text",[t._v("¥"),e("v-uni-text",{staticClass:"price-num"},[e("strong",[t._v(t._s(i.shop_price))])])],1),e("v-uni-text",{staticClass:"del-price"},[t._v("¥"),e("del",[e("strong",[t._v(t._s(i.shop_price))])])])],1),i.store_id?e("v-uni-image",{staticClass:"shopping-car",attrs:{src:"../../static/icon_buycar02.png"},on:{click:function(i){i=t.$handleEvent(i),t.addCart(a)}}}):t._e()],1)],1)],1)}),1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"32b5":function(t,i,e){var a=e("ebcf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("d4dad5a0",a,!0,{sourceMap:!1,shadowMode:!1})},"56f6":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.collectGoods=n,i.getMyCollectGoods=o;var a=e("16d7");function n(t){return(0,a.get)("/aosuite/api/app/v1/collectGoods.jhtml",t)}function o(t){return(0,a.get)("/aosuite/api/app/v1/getMyCollectGoods.jhtml",t)}},"5f86":function(t,i,e){"use strict";e.r(i);var a=e("224a"),n=e("7193");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("fa94");var s=e("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"b628df74",null);i["default"]=c.exports},"6dc9":function(t,i,e){"use strict";var a=e("32b5"),n=e.n(a);n.a},7193:function(t,i,e){"use strict";e.r(i);var a=e("bc06"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},"912c":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"collect-wrapper"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-view",{staticClass:"item",on:{click:function(i){i=t.$handleEvent(i),t.changeTab(0)}}},[e("v-uni-text",[t._v("收藏的商品")]),0===t.nowTabIndex?e("v-uni-view",{staticClass:"active"}):t._e()],1),e("v-uni-view",{staticClass:"item",on:{click:function(i){i=t.$handleEvent(i),t.changeTab(1)}}},[e("v-uni-text",[t._v("收藏的店铺")]),1===t.nowTabIndex?e("v-uni-view",{staticClass:"active"}):t._e()],1)],1),1===t.nowTabIndex?e("v-uni-view",{staticClass:"main"},[e("v-uni-view",{staticClass:"user-section"},[e("v-uni-view",{staticClass:"user-info-box"},[e("v-uni-view",{staticClass:"user-info"},[e("v-uni-image",{staticClass:"portrait",attrs:{src:"/static/missing-face.png"}}),e("v-uni-view",{staticClass:"info-box"},[e("v-uni-text",{staticClass:"nickname"},[t._v("这里是用户昵称")]),e("v-uni-view",{staticClass:"address"},[e("v-uni-image",{attrs:{src:"../../static/icon_local_g.png"}}),e("v-uni-text",[t._v("广东省深圳市龙岗区坂田国际中心9楼")])],1),e("v-uni-text",{staticClass:"user-id"},[t._v("18291000001")])],1)],1),e("v-uni-image",{staticClass:"set",attrs:{src:"../../static/icon_right.png"}})],1)],1),e("v-uni-view",{staticClass:"user-section"},[e("v-uni-view",{staticClass:"user-info-box"},[e("v-uni-view",{staticClass:"user-info"},[e("v-uni-image",{staticClass:"portrait",attrs:{src:"/static/missing-face.png"}}),e("v-uni-view",{staticClass:"info-box"},[e("v-uni-text",{staticClass:"nickname"},[t._v("这里是用户昵称")]),e("v-uni-view",{staticClass:"address"},[e("v-uni-image",{attrs:{src:"../../static/icon_local_g.png"}}),e("v-uni-text",[t._v("广东省深圳市龙岗区坂田国际中心9楼")])],1),e("v-uni-text",{staticClass:"user-id"},[t._v("18291000001")])],1)],1),e("v-uni-image",{staticClass:"set",attrs:{src:"../../static/icon_right.png"}})],1)],1)],1):t._e(),0===t.nowTabIndex?e("goods-list",{staticClass:"main",attrs:{classifyGoodsList:t.collectList},on:{toDetail:function(i){i=t.$handleEvent(i),t.toDetail(i)},addCart:function(i){i=t.$handleEvent(i),t.addCart(i)}}}):t._e()],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"99d1":function(t,i,e){var a=e("0d0b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("6611781e",a,!0,{sourceMap:!1,shadowMode:!1})},bc06:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:{classifyGoodsList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{toDetail:function(t){this.$emit("toDetail",t)},addCart:function(t){this.$emit("addCart",t)}}};i.default=a},ebcf:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.color51[data-v-984ea2a4]{color:#333}.size22[data-v-984ea2a4]{font-size:%?22?%}.clamp-set[data-v-984ea2a4]{white-space:normal!important;display:-webkit-box;-webkit-box-orient:vertical!important;-webkit-line-clamp:2!important;overflow:hidden}.common-flex[data-v-984ea2a4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.title[data-v-984ea2a4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;height:%?82?%;background-color:#fff;position:fixed;width:100%;top:%?88?%;z-index:1001}.title .item[data-v-984ea2a4]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;position:relative}.title .active[data-v-984ea2a4]{width:%?40?%;height:%?6?%;background:-webkit-gradient(linear,left top,right bottom,from(#ffcc58),to(#ffa200));background:-o-linear-gradient(top left,#ffcc58,#ffa200);background:linear-gradient(to bottom right,#ffcc58,#ffa200);position:absolute;bottom:0}.main[data-v-984ea2a4]{margin-top:%?84?%;overflow-y:scroll}.user-section[data-v-984ea2a4]{margin:%?23?%;background-color:#fff;border-radius:%?10?%;padding:%?20?% %?30?%;position:relative}.user-section .bg[data-v-984ea2a4]{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-filter:blur(1px);filter:blur(1px);opacity:.7}.user-section .user-info-box[data-v-984ea2a4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;z-index:1}.user-section .user-info-box .user-info[data-v-984ea2a4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.user-section .user-info-box .user-info .portrait[data-v-984ea2a4]{width:%?132?%;height:%?132?%;border-radius:50%}.user-section .user-info-box .user-info .info-box[data-v-984ea2a4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:%?20?%}.user-section .user-info-box .user-info .info-box .nickname[data-v-984ea2a4]{font-size:%?30?%;color:#000;font-weight:700}.user-section .user-info-box .user-info .info-box .address[data-v-984ea2a4]{font-size:%?26?%;color:#666;margin-top:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.user-section .user-info-box .user-info .info-box .address uni-image[data-v-984ea2a4]{width:%?20?%;height:%?28?%;display:block;margin-right:%?8?%}.user-section .user-info-box .user-info .info-box .user-id[data-v-984ea2a4]{font-size:%?24?%;color:#999;margin:%?13?% 0 %?15?% 0}.user-section .user-info-box .set[data-v-984ea2a4]{width:%?12?%;height:%?20?%;display:block}',""])},f9a0:function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("ac6a");var n=e("56f6"),o=a(e("5f86")),s={components:{goodsList:o.default},data:function(){return{nowTabIndex:0,hasLogin:!1,userInfo:null,collectList:[]}},onLoad:function(){var t=this;this.$api.getStorage("userInfo").then(function(i){t.hasLogin=!0,t.userInfo=i.data,t.getMyCollectGoods()}).catch(function(i){t.hasLogin=!1,console.log(i)})},methods:{toDetail:function(t){uni.navigateTo({url:"../product/product?goods_id="+t.goods_id})},addCart:function(){},changeTab:function(t){this.nowTabIndex=t},getMyCollectGoods:function(){var t=this;(0,n.getMyCollectGoods)({token:this.userInfo.token,page:"1"}).then(function(i){if(console.log(i),1===i.data.code){var e=[];i.data.data.list.forEach(function(t){e.push(t.zjcGoodsPO)}),t.collectList=e}})}}};i.default=s},fa94:function(t,i,e){"use strict";var a=e("99d1"),n=e.n(a);n.a}}]);