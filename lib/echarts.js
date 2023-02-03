"use strict";
module.exports = ({
  type,
  id,
  option,
  width,
  height,
  theme,
  renderer,
  pjax,
  darkMode,
}) => {
  const DOM = `<div id="${id}" style="width: ${width};height: ${height};margin:0 auto"></div>`;

  const echartsId = id.replaceAll("-", "_");

  let initEcharts = `
  var ${echartsId} = echarts.init(document.getElementById("${id}"),"${theme}",{ renderer: "${renderer}" });
  ${echartsId}.setOption(${option});
`;
  if (
    (type == "postsChart" || type == "postsCalendar" || type == "tagsChart") &&
    darkMode
  ) {
    initEcharts = `
    if (darkMode.matches) {
      ${echartsId} = echarts.init(document.getElementById("${id}"),"dark",{ renderer: "${renderer}" });
    } else {
      ${echartsId} = echarts.init(document.getElementById("${id}"),"${theme}",{ renderer: "${renderer}" });
    }
    ${echartsId}.setOption(${option});
    `;
  }

  return `
  ${DOM}
  <script ${pjax ? "data-pjax" : ""}>
    ${initEcharts}
  </script>`;
};
