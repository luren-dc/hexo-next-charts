"use strict";
const echart = require("./echarts.js");
module.exports.generatePostsChart = function (params) {
  params["option"] = `
{
    aria: {
      enabled: true
    },
	title: {
		text: "文章发布统计",
		left: "center",
		textStyle: {
			fontSize: 16
		}
	},
	xAxis: {
		type: "category",
		data: ${params["xAxisData"]},
        boundaryGap: false,
		axisTick: {
			show: false
		},
        axisLabel: {
            show: true,
       }
	},
	yAxis: {
		name: "篇数",
		type: "value",
		minInterval: 1,
		max: function(value) {
			return value.max + 1;
		},
        splitLine: {
            show: false
        },
        axisLine: {
            show: true
        },
        axisTick: {
            show: false
        }
	},
	series: [{
		type: "line",
		name: "篇数",
        smooth: true,
		areaStyle: {
			color: {
 				type: 'linear',
  				x: 0,
  				y: 0,
  				x2: 0,
  				y2: 1,
  				colorStops: [{
      				offset: 0, color: 'rgba(128, 255, 165)'
  				}, {
      				offset: 1, color: 'rgba(1, 191, 236)'
  				}],
  				global: false 
          }
		},
        itemStyle: {
          color: {
 				type: 'linear',
  				x: 0,
  				y: 0,
  				x2: 0,
  				
                y2: 1,
  				colorStops: [{
      				offset: 0, color: 'rgba(128, 255, 165)'
  				
                }, {
      				offset: 1, color: 'rgba(1, 191, 236)'
  				}],
  				global: false 
          }
        },
		data: ${params["yAxisData"]}
	}],
	tooltip: {
		trigger: "axis"
	},
    grid: {
        left: "10%",
        right: "10%",
        containLabel: true
    },
    backgroundColor: 'transparent'
}`;
  return echart(params);
};

module.exports.generatePostsCalendar = (params) => {
  params["option"] = `{
  title: {
    top: 30,
    left: 'center',
    text: '文章发布日历',
    textStyle: {
			fontSize: 16
		}
  },
  tooltip: {
    formatter : function(params) {
      var value = params.value;
      return \`<div> \${value[0]} </br> <i class="fa fa-pen" style="font-size: 12px"></i>&nbsp;文章：\${value[1]} </div>\`;
    }
  },
  visualMap: {
    show: true,
    showLabel: true,
    type: 'piecewise',
    categories: [0,1,2,3,">=4"],
    orient: 'horizontal',
    left: 'center',
    top: 65,
	inRange: {
         symbol: 'rect',
         color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b','#196127']
     },
     outOfRange:{
       color: '#196127'
     }
  },
  calendar: {
    top: 120,
    left: 30,
    right: 30,
    cellSize: 13,
    splitLine: {
        show: true,
        lineStyle: {
        color: {
 				type: 'linear',
  				x: 0,
  				y: 0,
  				x2: 0,
                y2: 1,
  				colorStops: [{
      				offset: 0, color: 'rgba(128, 255, 165)'
  				
                }, {
      				offset: 1, color: 'rgba(1, 191, 236)'
  				}],
  				global: false 
          }
    }},
    range: ${params["range"]},
    itemStyle: {
      borderWidth: 0.5
    },
    yearLabel: { show: false }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: ${params["data"]}
  },
  backgroundColor: 'transparent'
}`;
  return echart(params);
};

module.exports.generateTagsChart = (params) => {
  params["option"] = `{
    title: {
      text: "标签统计",
      left: "center",
      textStyle: {
        fontSize: 16
      }
    },
    tooltip: {
        formatter: "{b} : {c}"
    },
    xAxis: {
      type: "category",
      data: ${params["xAxisData"]},
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true
      },
	  grid: {
                left: '10%',
                bottom:'25%'
                }
    },
	yAxis: {
		name: "篇数",
		type: "value",
		minInterval: 1,
		max: function(value) {
			return value.max + 1;
		},
        splitLine: {
            show: false
        },
        axisLine: {
            show: true
        },
        axisTick: {
            show: false
        }
	},
    series: {
      type: "bar",
      data: ${params["yAxisData"]},
      itemStyle: {
          color: {
 				type: 'linear',
  				x: 0,
  				y: 0,
  				x2: 0,
  				
                y2: 1,
  				colorStops: [{
      				offset: 0, color: 'rgba(128, 255, 165)'
  				
                }, {
      				offset: 1, color: 'rgba(1, 191, 236)'
  				}],
  				global: false 
          }
        }
    },
    backgroundColor: 'transparent'
}`;
  return echart(params);
};
