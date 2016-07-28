requirejs.config({baseUrl:".",paths:{jquery:"//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min",highstock:"//code.highcharts.com/stock/highstock","highcharts-exporting":"//code.highcharts.com/stock/modules/exporting","jquery-ui":"//ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min","jquery-growl":"lib/jquery/jquery-growl/jquery.growl","highcharts-theme":"lib/highcharts/themes/sand-signika","jquery-timer":"lib/jquery/jquery.timers",datatables:"//cdn.datatables.net/1.10.5/js/jquery.dataTables.min","color-picker":"lib/jquery/jquery-ui/colorpicker/jquery.colorpicker","reconnecting-websocket":"//cdnjs.cloudflare.com/ajax/libs/reconnecting-websocket/1.0.0/reconnecting-websocket.min",currentPriceIndicator:"charts/indicators/highcharts_custom/currentprice",modernizr:"//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min"},shim:{"jquery-ui":{deps:["jquery"]},highstock:{deps:["jquery"]},"highcharts-exporting":{deps:["highstock"]},"highcharts-theme":{deps:["highstock"]},"jquery-growl":{deps:["jquery"]},"jquery-timer":{deps:["jquery"]},datatables:{deps:["jquery-ui"]},currentPriceIndicator:{deps:["highstock"]}}}),require(["jquery","jquery-ui","modernizr","common/loadCSS","common/util"],function(a){"use strict";function b(b){a(b).height(a(window).height()-10).width(a(window).width()-10)}function c(a){var b=getParameterByName("instrument"),c=getParameterByName("timePeriod");if(!b||!c)return!1;var d=null;try{d=convertToTimeperiodObject(c)}catch(e){}if(!d||-1==["t","m","h","d"].indexOf(d.suffix()))return!1;if("t"==d.suffix()&&1!=d.intValue())return!1;var f=d.timeInSeconds()/60,g=a.delay_amount;return f>=g}return Modernizr.svg?(b(".binary-watermark-logo"),loadCSS("//ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/themes/smoothness/jquery-ui.css"),loadCSS("main.css"),loadCSS("lib/hamburger.css"),void a(document).ready(function(){a(".mainContainer").load("mainContent.html",function(){a(".topContainer").hide().find("button").button(),a(window).resize(function(){b(".binary-watermark-logo")}),require(["instruments/instruments"],function(b){b.init(a(".mainContainer .instruments").closest("div"))}),a.get("charts/chartWindow.html",function(d){var e="chart-dialog-1",f=getParameterByName("timePeriod")||"1d",g="1t"==f?"line":"candlestick";d=a(d),d.attr("id",e).find("div.chartSubContainerHeader").attr("id",e+"_header").end().find("div.chartSubContainer").attr("id",e+"_chart").end(),require(["charts/chartOptions"],function(a){a.init(e,f,g)}),a.get("https://chart.binary.com/d/backend/markets.cgi",function(b){if(!a.isEmptyObject(b)){var h=getObjects(b,"symbol",getParameterByName("instrument"));if(h&&h.length>0&&h[0].symbol&&h[0].display_name)if(c(h[0])){var i=h[0].symbol,j=h[0].display_name;require(["charts/charts"],function(a){a.drawChart("#"+e+"_chart",i,j,f,g)})}else require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Invalid parameter(s)!"})}),d.find("div.chartSubContainerHeader").hide();else require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Instrument Code Unknown/Unavailable!"})}),d.find("div.chartSubContainerHeader").hide()}},"json").error(function(){require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Error getting market information!"})}),d.find("div.chartSubContainerHeader").hide()}),a(".mainContainer").append(d),a(".binary-watermark-logo").hide(),b("#"+e),b("#"+e+" .chartSubContainer"),a(window).resize(function(){b("#"+e),b("#"+e+" .chartSubContainer")})})}),loadCSS("lib/jquery/jquery-growl/jquery.growl.css"),loadCSS("charts/charts.css")})):void(window.location.href="unsupported_browsers.html")});