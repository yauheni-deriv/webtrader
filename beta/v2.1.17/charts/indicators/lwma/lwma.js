define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close")}function c(c,e){require(["css!charts/indicators/lwma/lwma.css"]),require(["text!charts/indicators/lwma/lwma.html","text!charts/indicators/indicators.json"],function(f,g){f=a(f),f.appendTo("body"),g=JSON.parse(g);var h=g.lwma;f.attr("title",h.long_display_name),f.find(".lwma-description").html(h.description),f.find("#lwma_stroke_color").each(function(){a(this).colorpicker({showOn:"click",position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)}})});var i="Solid";a("#lwma_dash_style").ddslick({imagePosition:"left",width:150,background:"white",onSelected:function(b){a("#lwma_dash_style .dd-selected-image").css("max-height","5px").css("max-width","115px"),i=b.selectedData.value}}),a("#lwma_dash_style .dd-option-image").css("max-height","5px").css("max-width","115px"),f.dialog({autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"lwma-ui-dialog",buttons:[{text:"OK",click:function(){var c=a(".lwma_input_width_for_period");if(!_.isInteger(_.toNumber(c.val()))||!_.inRange(c.val(),parseInt(c.attr("min")),parseInt(c.attr("max"))+1))return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+c.attr("min")+" to "+c.attr("max")+" is allowed for "+c.closest("tr").find("td:first").text()+"!"})}),void c.val(c.prop("defaultValue"));var e={period:parseInt(a("#lwma_period").val()),stroke:a("#lwma_stroke_color").css("background-color"),strokeWidth:parseInt(a("#lwma_stroke_width").val()),dashStyle:i,appliedTo:parseInt(f.find("#lwma_appliedTo").val())};d&&d(),a(a(".lwma").data("refererChartID")).highcharts().series[0].addIndicator("lwma",e),b.call(f)}},{text:"Cancel",click:function(){b.call(this)}}]}),f.find("select").each(function(b,c){a(c).selectmenu({width:150}).selectmenu("menuWidget").css("max-height","85px")}),a.isFunction(e)&&e(c)})}var d=null;return{open:function(b,e){d=e||d;var f=function(){a(".lwma").data("refererChartID",b).dialog("open")};0==a(".lwma").length?c(b,this.open):f()}}});