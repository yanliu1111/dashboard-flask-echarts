//initialization echarts instance
var ec_center = echarts.init(document.getElementById("c2"), "dark");
var mydata = [];
var optionMap = {
  title: {
    text: "",
    subtext: "",
    x: "left",
  },
  tooltip: {
    trigger: "item",
  },
  //left legend
  visualMap: {
    show: true,
    x: "left",
    y: "bottom",
    textStyle: {
      fontSize: 8,
    },
    splitList: [
      {
        start: 1,
        end: 9,
      },
      {
        start: 10,
        end: 99,
      },
      {
        start: 100,
        end: 999,
      },
      {
        start: 1000,
        end: 9999,
      },
      {
        start: 10000,
      },
    ],
    color: ["#8A3310", "#C64918", "#E55B25", "#F2AD92", "#F9DCD1"],
  },

  //config attribute
  series: [
    {
      name: "Total Confirmed Cases",
      type: "map",
      mapType: "china",
      roam: false,
      itemStyle: {
        normal: {
          borderWidth: 0.5,
          borderColor: "#009fe8",
          areaColor: "#ffefd5",
        },
        emphasis: {
          borderWidth: 0.5,
          borderColor: "#4b0082",
          areaColor: "#fff",
        },
      },
      label: {
        normal: {
          show: true, //province name
          fontSize: 8,
        },
        emphasis: {
          show: true,
          fontSize: 8,
        },
      },
      data: mydata, //data
    },
  ],
};

//use specified configuration items and data to display charts
ec_center.setOption(optionMap);
