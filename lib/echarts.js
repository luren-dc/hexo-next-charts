"use strict";
module.exports = ({ id, option, width, height, theme, renderer, pjax }) => {
  return `<div id="${id}" style="width: ${width};height: ${height};margin:0 auto"></div>
  <script ${pjax ? "data-pjax" : ""}>
    var chart = echarts.init(document.getElementById("${id}"),"${theme}",{ renderer: "${renderer}" });
    chart.setOption(${option});
  </script>`;
};
