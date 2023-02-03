<div align="center">

# hexo-next-charts

![node](https://img.shields.io/node/v/hexo-next-charts)
![npm](https://img.shields.io/npm/v/hexo-next-charts)
![Hexo v6.3.0](https://img.shields.io/badge/Hexo-v6.3.0-orange)
![NexT v8.14.2](https://img.shields.io/badge/Next-v8.14.2-orange)
![size](https://img.shields.io/github/languages/code-size/luren-dc/hexo-next-charts)

English|[简体中文](https://www.luren-dc.top/2023/1a4914a8.html)

**Add chart label for Hexo Next theme**

</div>

---

> **Note: This plugin may only work properly with the NexT theme**

---

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
  darkmode: true # Only valid for charts provided by plugin
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

## Demo

[Click to jump](https://www.luren-dc.top/2023/bf0798e0.html)

## Screenshot

### PostsChart

![](https://github.com/luren-dc/hexo-next-charts/raw/master/source/postsChart.jpg)

### PostsCalendar

![](https://github.com/luren-dc/hexo-next-charts/raw/master/source/postsCalendar.jpg)

### TagsChart

![](https://github.com/luren-dc/hexo-next-charts/raw/master/source/tagsChart.jpg)

## Version Log

- v0.0.5
  - Fix incomplete statistics of articles
  - Add darkMode
- v0.0.4
  - Rewrite file structure
- v0.0.3
  - Add README.md file
