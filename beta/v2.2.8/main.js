function load_ondemand(a,b,c,d,e){var f=null;a.one(b,f=function(){return a.hasClass("disabled")?void a.one(b,f):void require([d],function(a){c&&require(["jquery","jquery-growl"],function(a){a.growl.notice({message:c})}),e&&e(a)})})}window.requirejs.config({baseUrl:"./",paths:{jquery:"lib/jquery/dist/jquery.min","jquery-ui":"lib/jquery-ui-dist/jquery-ui.min","jquery.dialogextend":"lib/binary-com-jquery-dialogextended/jquery.dialogextend.min","jquery-growl":"lib/jquery.growl/javascripts/jquery.growl",modernizr:"lib/npm-modernizr/modernizr","color-picker":"lib/vanderlee-colorpicker/jquery.colorpicker",datatables:"lib/datatables.net/js/jquery.dataTables","datatables-jquery-ui":"lib/datatables.net-jqui/js/dataTables.jqueryui",currentPriceIndicator:"charts/indicators/highcharts_custom/currentprice","es6-promise":"lib/es6-promise/promise.min",rivets:"lib/rivets/dist/rivets.min",sightglass:"lib/sightglass/index",timepicker:"lib/binary-com-jquery-ui-timepicker/jquery.ui.timepicker",lodash:"lib/lodash/lodash.min","jquery-sparkline":"lib/jquery-sparkline/jquery.sparkline.min",moment:"lib/moment/min/moment.min","moment-locale":"lib/moment/locale",clipboard:"lib/clipboard/dist/clipboard.min",indicator_levels:"charts/indicators/level","binary-style":"https://style.binary.com/binary","babel-runtime/regenerator":"lib/regenerator-runtime/runtime","webtrader-charts":"lib/webtrader-charts/dist/webtrader-charts.iife",chosen:"lib/chosen-js/chosen.jquery","highstock-release":"lib/highstock-release"},map:{"*":{css:"lib/require-css/css.min",text:"lib/text/text.js"}},waitSeconds:0,shim:{"webtrader-charts":{exports:"WebtraderCharts",deps:["moment","jquery","highstock-release/highstock"]},"babel-runtime/regenerator":{exports:"regeneratorRuntime"},timepicker:{deps:["jquery-ui","jquery"]},"jquery.dialogextend":{deps:["jquery-ui"]},"jquery-ui":{deps:["jquery"]},"highstock-release/highstock":{deps:["jquery"],exports:"Highcharts"},"highstock-release/modules/exporting":{deps:["highstock-release/highstock"]},"highstock-release/modules/offline-exporting":{deps:["highstock-release/modules/exporting"]},"jquery-growl":{deps:["jquery"]},datatables:{deps:["jquery-ui"]},"datatables-jquery-ui":{deps:["datatables"]},currentPriceIndicator:{deps:["highstock-release/highstock"]},sightglass:{exports:"sightglass"},rivets:{deps:["sightglass"],exports:"rivets"},"highstock-release/highcharts-more":{deps:["highstock-release/highstock"]},"color-picker":{deps:["jquery","jquery-ui"]}}}),window.requirejs.onError=function(a){if("scripterror"===a.requireType)throw a;throw a},require(["modernizr"],function(){var a=window.Modernizr;return a.svg&&a.websockets&&(!a.touch||!window.isSmallView())&&a.localstorage&&a.webworkers&&Object.defineProperty?void 0:void window.location.assign("unsupported_browsers/unsupported_browsers.html")}),require(["websockets/binary_websockets","text!./oauth/app_id.json"]);var i18n_name=(window.local_storage.get("i18n")||{value:"en"}).value;require(["jquery","text!i18n/"+i18n_name+".json"],function(a,b){"use strict";function c(){if(self!==top)return void(top.location=self.location);var b=function(a){load_ondemand(a.find("a.tradingTimes"),"click","Loading Trading Times ...".i18n(),"tradingtimes/tradingTimes",function(b){var c=a.find("a.tradingTimes");b.init(c),c.click()}),load_ondemand(a.find("a.token-management"),"click","Loading Token management ...".i18n(),"token/token",function(b){var c=a.find("a.token-management");b.init(c),c.click()}),load_ondemand(a.find("a.change-password"),"click","Loading Password dialog ...".i18n(),"password/password",function(b){var c=a.find("a.change-password");b.init(c),c.click()}),load_ondemand(a.find("a.assetIndex"),"click","Loading Asset Index ...".i18n(),"assetindex/assetIndex",function(b){var c=a.find("a.assetIndex");b.init(c),c.click()}),load_ondemand(a.find("a.portfolio"),"click","Loading portfolio ...".i18n(),"portfolio/portfolio",function(b){var c=a.find("a.portfolio");b.init(c),c.click()}),load_ondemand(a.find("a.real-account"),"click","Loading Real account opening ...".i18n(),"realaccount/realaccount",function(b){var c=a.find("a.real-account");b.init(c),c.click()}),load_ondemand(a.find("a.deposit"),"click","Loading Deposit funds ...","cashier/deposit",function(b){var c=a.find("a.deposit");b.init(c),c.click()}),load_ondemand(a.find("a.withdraw"),"click","Loading Withdraw funds ...","cashier/withdraw",function(b){b=b["default"]||b;var c=a.find("a.withdraw");b.init(c),c.click()}),load_ondemand(a.find("a.profitTable"),"click","Loading Profit Table ...".i18n(),"profittable/profitTable",function(b){var c=a.find("a.profitTable");b.init(c),c.click()}),load_ondemand(a.find("a.statement"),"click","Loading Statement Table ...".i18n(),"statement/statement",function(b){var c=a.find("a.statement");b.init(c),c.click()}),load_ondemand(a.find("a.historical-data"),"click","Loading Download/View Data ...".i18n(),"historical-data/historical-data",function(b){var c=a.find("a.historical-data");b.init(c),c.click()}),load_ondemand(a.find("a.selfexclusion"),"click","Loading Self-Exclusion ...".i18n(),"selfexclusion/selfexclusion",function(b){var c=a.find("a.selfexclusion");b.init(c),c.click()}),load_ondemand(a.find("a.theme_custom"),"click","Loading custom theme configuration...".i18n(),"themes/custom_theme/custom_theme",function(b){var c=a.find("a.theme_custom");b.init(c),c.click()}),load_ondemand(a.find("a.copytrade"),"click","Loading Copy Trade...".i18n(),"copytrade/copytrade",function(b){var c=a.find("a.copytrade");b.init(c),c.click()}),load_ondemand(a.find("a.mam"),"click","Loading MAM...".i18n(),"mam/index",function(b){var c=a.find("a.mam");b.init(c),c.click()})};require(["navigation/navigation","jquery-ui","css!main.css","css!binary-style"],function(c){c.init(b),a("#menu").menu(),require(["instruments/instruments","trade/tradeMenu","jquery-growl"],function(b,c){a.growl.notice({message:"Loading chart and trade menus ...".i18n()}),b.init(),c.init()}),require(["windows/windows"],function(b){var c=a("#nav-menu .windows");b.init(c),a(".sk-spinner-container").parent().hide(),a("body > .footer").show()})}),require(["selfexclusion/selfexclusion","chrome/chrome","accountstatus/accountstatus","realitycheck/realitycheck","websitestatus/websitestatus"])}window.setup_i18n_translation(JSON.parse(b)),require(["jquery-ui","highstock-release/highstock"]),require(["css!lib/jquery-ui-dist/jquery-ui.min.css","css!lib/jquery-ui-iconfont/jquery-ui.icon-font.css","css!lib/chosen-js/chosen.css","css!lib/jquery.growl/stylesheets/jquery.growl.css","css!lib/datatables.net-dt/css/jquery.dataTables.css","css!lib/datatables.net-jqui/css/dataTables.jqueryui.css","css!lib/vanderlee-colorpicker/jquery.colorpicker.css"]),c()}),require(["jquery","jquery-growl"],function(a){["error","notice","warning"].forEach(function(b){var c=a.growl[b].bind(a.growl);a.growl[b]=function(b){b.message.indexOf("rate limit")>-1&&(b.message+=" Please try again after 1 minute.".i18n()),b.title||(b.title=""),a('#growls .growl:contains("'+b.message+'")').remove(),c(b)}})});