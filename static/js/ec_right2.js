var ec_right2 = echarts.init(document.getElementById("r2"), "dark");

var datamessage = [];
var option_right2 = {
  title: {
    text: "Hot Search in Baidu",
    textStyle: {
      color: "white",
    },
    left: "left",
  },
  tooltip: {
    show: false,
  },
  series: [
    {
      type: "wordCloud",
      gridSize: 1,
      sizeRange: [12, 55], //文字范围
      //文本旋转范围，文本将通过rotationStep45在[-90,90]范围内随机旋转
      rotationRange: [-45, 0, 45, 90],
      // rotationStep: 45,
      // textRotation: [0, 45, 90, -45],
      // shape: 'circle',
      textStyle: {
        normal: {
          color: function () {
            // Funtion for text with random color
            // return 'rgb(' + [
            // 	Math.round(Math.random() * 250),
            // 	Math.round(Math.random() * 250),
            // 	Math.round(Math.random() * 250)
            // ].join(',') + ')';
            return (
              "rgb(" +
              Math.round(Math.random() * 255) +
              "," +
              Math.round(Math.random() * 255) +
              "," +
              Math.round(Math.random() * 255) +
              ")"
            );
          },
        },
      },
      right: null,
      bottom: null,
      data: datamessage,
    },
  ],
};
//Use the specified configuration item and data to display the chart
ec_right2.setOption(option_right2);
