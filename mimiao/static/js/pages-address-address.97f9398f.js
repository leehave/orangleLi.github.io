(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address"],{"04a9":function(e,t,a){"use strict";var i=a("bbca"),n=a.n(i);n.a},"16d7":function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.post=t.get=t.LOCAL_SERVER=void 0;var n=i(a("795b")),s="http://app.smartinvoker.com";t.LOCAL_SERVER=s;var o=function(e,t,a){return new n.default(function(i,n){uni.request({url:s+e,data:t,method:a,success:function(e){10006===e.data.code?uni.showModal({title:"提示",content:"连接失败，请重新登录",confirmText:"去登录",cancelText:"随便看看",success:function(e){e.confirm&&uni.navigateTo({url:"/pages/public/login?backUrl=/pages/index/index"})}}):i(e)},fail:function(e){n(e)}})})},c=function(e,t){return o(e,t,"GET")};t.get=c;var r=function(e,t){return o(e,t,"POST")};t.post=r},"2ef5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAddress=n,t.getAddr=s,t.addAddress=o,t.updateDefaultAddress=c,t.delAddress=r;var i=a("16d7");function n(e){return(0,i.get)("/aosuite/api/app/v1/getUserAddress.jhtml",e)}function s(e){return(0,i.get)("/aosuite/notokenapi/app/v1/getAddr.jhtml",e)}function o(e){return(0,i.get)("/aosuite/api/app/v1/saveAddress.jhtml",e)}function c(e){return(0,i.get)("/aosuite/api/app/v1/updateDefaultAddress.jhtml",e)}function r(e){return(0,i.get)("/aosuite/api/app/v1/delAddress.jhtml",e)}},4099:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content b-t"},[e._l(e.addressList,function(t,i){return a("v-uni-view",{key:i,staticClass:"list b-b",on:{click:function(a){a=e.$handleEvent(a),e.checkAddress(t)}}},[a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"address-box"},[t.default?a("v-uni-image",{attrs:{src:"../../static/icon_pay_success.png"}}):a("v-uni-image",{attrs:{src:"../../static/cricle.png"}}),a("v-uni-text",{staticClass:"address"},[e._v(e._s(t.address_info))])],1),a("v-uni-view",{staticClass:"u-box"},[a("v-uni-text",{staticClass:"name"},[e._v(e._s(t.consignee))]),a("v-uni-text",{staticClass:"mobile"},[e._v(e._s(t.mobile))])],1)],1),a("v-uni-text",{staticClass:"yticon icon-bianji",on:{click:function(a){a.stopPropagation(),a=e.$handleEvent(a),e.addAddress("edit",t)}}})],1)}),a("v-uni-button",{staticClass:"add-btn",on:{click:function(t){t=e.$handleEvent(t),e.addAddress("add")}}},[e._v("新增收货地址")])],2)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},"57e0":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.color51[data-v-eaecc820]{color:#333}.size22[data-v-eaecc820]{font-size:%?22?%}.clamp-set[data-v-eaecc820]{white-space:normal!important;display:-webkit-box;-webkit-box-orient:vertical!important;-webkit-line-clamp:2!important;overflow:hidden}.common-flex[data-v-eaecc820]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}uni-page-body[data-v-eaecc820]{padding-bottom:%?120?%}.content[data-v-eaecc820]{position:relative}.list[data-v-eaecc820]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?29?% %?20?% %?30?% %?20?%;background:#fff;position:relative}.wrapper[data-v-eaecc820]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.address-box[data-v-eaecc820]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.address-box uni-image[data-v-eaecc820]{width:%?40?%;height:%?40?%;display:block;margin-right:%?20?%}.address-box .address[data-v-eaecc820]{font-size:%?28?%;color:#333;max-width:280px;display:block}.u-box[data-v-eaecc820]{font-size:%?24?%;color:#999;margin-top:%?22?%;margin-left:%?60?%}.u-box .name[data-v-eaecc820]{margin-right:%?30?%}.icon-bianji[data-v-eaecc820]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?80?%;font-size:%?40?%;color:#333;padding-left:%?30?%}.add-btn[data-v-eaecc820]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#000;background:-webkit-gradient(linear,left top,right bottom,from(#ffcc58),to(#ffa200));background:-o-linear-gradient(top left,#ffcc58,#ffa200);background:linear-gradient(to bottom right,#ffcc58,#ffa200);border-radius:%?45?%;-webkit-box-shadow:1px 2px 5px rgba(219,63,96,.4);box-shadow:1px 2px 5px rgba(219,63,96,.4)}',""])},"78c5":function(e,t,a){"use strict";a.r(t);var i=a("4099"),n=a("adda");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("04a9");var o=a("2877"),c=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"eaecc820",null);t["default"]=c.exports},"7c5e":function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("f499")),s=i(a("cebc")),o=a("2f62"),c=a("2ef5"),r={data:function(){return{source:0,addressList:[]}},onLoad:function(e){console.log(e.source),this.source=e.source},onShow:function(){var e=this;this.$api.getStorage("userInfo").then(function(t){e.hasLogin=!0,e.userInfo=t.data,e.getAddress()}).catch(function(t){e.hasLogin=!1,console.log(t)})},methods:(0,s.default)({},(0,o.mapMutations)(["setAddressData"]),{checkAddress:function(e){1==this.source&&(this.setAddressData(e),uni.navigateBack())},getAddress:function(){var e=this,t={user_id:this.userInfo.user_id,token:this.userInfo.token,page:"1"};(0,c.getAddress)(t).then(function(t){console.log(t),1===t.data.code&&(e.addressList=t.data.data.list)})},addAddress:function(e,t){uni.navigateTo({url:"/pages/address/addressManage?type=".concat(e,"&data=").concat((0,n.default)(t))})},refreshList:function(e,t){this.addressList.unshift(e),console.log(e,t)}})};t.default=r},adda:function(e,t,a){"use strict";a.r(t);var i=a("7c5e"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},bbca:function(e,t,a){var i=a("57e0");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("aed69716",i,!0,{sourceMap:!1,shadowMode:!1})}}]);