"use strict";
const moment = require("moment");
const echart = require("./lib/echarts.js");
const commonCharts = require("./lib/commonCharts.js");

const DAY_TIME = 1000 * 60 * 60 * 24;

hexo.extend.filter.register("before_post_render", () => {
  hexo.locals.invalidate();
});

hexo.extend.filter.register("theme_inject", (injects) => {
  const config = hexo.config.charts
    ? hexo.config.charts
    : hexo.theme.config.charts;
  if (!(config && config.enable)) return;

  const data = {
    postsChartTitle: config.posts_title ? config.posts_title : "发布文章统计",
    libUrl: config.libUrl
      ? config.libUrl
      : "https://unpkg.com/echarts@5.4.1/dist/echarts.min.js",
  };
  injects.head.raw(
    "load-custom-js",
    `<script src="${data.libUrl}"></script>`,
    {},
    { cache: true }
  );
});

hexo.extend.tag.register(
  "chart",
  (args, content) => {
    return processArgs(args, content);
  },
  {
    ends: true,
    async: true,
  }
);

function processArgs(args, content) {
  const params = {};
  args.forEach((arg) => {
    let current = arg.split(":");
    params[current[0]] = current[1];
  });
  params["type"] = params["type"] || "normal";
  params["id"] = `chart-${params["type"]}-${Math.floor(Math.random() * 1000)}`;
  params["pjax"] = hexo.theme.config.pjax;
  params["width"] = params["width"] || "100%";
  params["height"] = params["height"] || "300px";
  params["renderer"] = params["renderer"] || "canvas";
  params["theme"] = params["theme"] || "light";
  params["option"] = content;
  return getChart(params);
}

function getChart(params) {
  switch (params["type"]) {
    case "postsChart":
      return getPostsChart(params);
    case "postsCalendar":
      return getPostsCalendar(params);
    case "tagsChart":
      return getTagsChart(params);
    default:
      return echart(params);
  }
}

function getPostsChart(params) {
  const posts = hexo.locals.get("posts");
  const startDate = moment().subtract(2, "month").startOf("month");
  const endDate = moment().add(2, "month").endOf("month");

  const dateMap = new Map();

  for (let time = startDate; time <= endDate; time += DAY_TIME) {
    dateMap.set(moment(time).format("YYYY-M"), 0);
  }

  posts.forEach((post) => {
    const time = post.date.format("YYYY-M");
    if (dateMap.has(time)) {
      dateMap.set(time, dateMap.get(time) + 1);
    }
  });

  params["xAxisData"] = JSON.stringify([...dateMap.keys()]);
  params["yAxisData"] = JSON.stringify([...dateMap.values()]);
  return commonCharts.generatePostsChart(params);
}

function getPostsCalendar(params) {
  const posts = hexo.locals.get("posts");
  const startDate = moment().subtract(2, "month").startOf("month");
  const endDate = moment().add(2, "month").endOf("month");

  const dateMap = new Map();

  for (let time = startDate; time <= endDate; time += DAY_TIME) {
    dateMap.set(moment(time).format("YYYY-MM-DD"), 0);
  }
  posts.forEach((post) => {
    const time = post.date.format("YYYY-MM-DD");
    if (dateMap.has(time)) {
      dateMap.set(time, dateMap.get(time) + 1);
    }
  });

  const arrayString = JSON.stringify(Array.from(dateMap));

  params["range"] = `["${startDate.format("YYYY-MM-DD")}","${endDate.format(
    "YYYY-MM-DD"
  )}"]`;

  params["data"] = arrayString;

  return commonCharts.generatePostsCalendar(params);
}

function getTagsChart(params) {
  const tagArr = [];

  hexo.locals.get("tags").map(function (tag) {
    tagArr.push({ name: tag.name, value: tag.length });
  });
  tagArr.sort((a, b) => {
    return b.value - a.value;
  });

  const tagNameArr = [];
  const tagCountArr = [];
  for (let i = 0, len = Math.min(tagArr.length, 10); i < len; i++) {
    tagNameArr.push(tagArr[i].name);
    tagCountArr.push(tagArr[i].value);
  }

  params["xAxisData"] = JSON.stringify(tagNameArr);
  params["yAxisData"] = JSON.stringify(tagCountArr);

  return commonCharts.generateTagsChart(params);
}
