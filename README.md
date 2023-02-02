<div align="center">

# hexo-next-charts

![node](https://img.shields.io/node/v/hexo-next-charts)
![npm](https://img.shields.io/npm/v/hexo-next-charts)
![Hexo v6.3.0](https://img.shields.io/badge/Hexo-v6.3.0-orange)
![NexT v8.14.2](https://img.shields.io/badge/Next-v8.14.2-orange)
![size](https://img.shields.io/github/languages/code-size/luren-dc/hexo-next-charts)

**Add chart label for Hexo Next theme**

</div>

## Installation

```
npm install hexo-next-charts --save
```

## Config

**Add the following to your hexo config or theme config**

```yml
# Add chart in your post
# For more infomation: https://echarts.apache.org/
charts:
  enable: true
  libUrl: # Custom Echarts.js CDN URL
```

## Usage

### Use as a tag in md files

```nunjucks
{% chart type:  %}
<you echarts option>
{% endchart %}
```

e.g.

```nunjucks
{% chart type:nromal %}
{
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
        legend: {
        data: ['销量']
    },
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
	series: [
		{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
    ]
}
{% endchart %}
```

## Options

|   Name   |    Type    | Default value |                           Optional value                           |      Description       |
| :------: | :--------: | :-----------: | :----------------------------------------------------------------: | :--------------------: |
|   type   |  `String`  |  `"nromal"`   | `"nromal"`<br>`"postsChart"`<br>`"postsCalendar"`<br>`"tagsChart"` |  "nromal" is customer  |
|  width   |  `String`  |   `"100%"`    |                                 X                                  | DOM width for Echarts  |
|  height  |  `String`  |   `"300px"`   |                                 X                                  | DOM height for Echarts |
|  theme   |  `String`  |   `"light"`   | [more infomation](https://echarts.apache.org/download-theme.html)  |     Echarts theme      |
| renderer | `"String"` |  `"canvas"`   |                       `"canvas"`<br>`"svg"`                        |   Echarts rendererr    |

## Screenshot

### PostsChart

![](./source/postsChart.jpg)

### PostsCalendar

![](./source/postsCalendar.jpg)

### TagsChart

![](./source/tagsChart.jpg)
