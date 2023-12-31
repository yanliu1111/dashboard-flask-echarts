var ec_left1 = echarts.init(document.getElementById("l1"), "dark");

var option_left1 = {
  // backgroundColor: '#FFF0F5',

  title: {
    // text: "Current Cumulative Trend",
    subtext: "Current Cumulative Trend",
    // x: 'center',
    textStyle: {},
    left: "left",
  },

  legend: {
    // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
    // orient: 'horizontal',
    // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
    // x: 'left',
    // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
    // y: 'top',
    data: ["Confirmed", "Suspected", "Healed", "Death"],
    left: "right",
  },

  // the distance between the chart and the border, optional values: 'percentage'¦ {number} (unit px)
  grid: {
    top: 50, // 等价于 y: '16%'
    left: "4%",
    right: "6%",
    bottom: "4%",
    containLabel: true,
  },

  // Popup box
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "line",
      lineStyle: {
        color: "#7171C6",
      },
    },
  },

  //Toolbox, restore, save pictures
  toolbox: {
    feature: {
      saveAsImage: {}, //Tools for saving pictures
    },
  },

  xAxis: {
    // name: '周几',
    type: "category",
    // axisLine: {
    // 	lineStyle: {
    // 		// 设置x轴颜色
    // 		color: '#912CEE'
    // 	}
    // },
    // // 设置X轴数据旋转倾斜
    // axisLabel: {
    // 	rotate: 30, // 旋转角度
    // 	interval: 0 //设置X轴数据间隔几个显示一个，为0表示都显示
    // },
    // // boundaryGap值为false的时候，折线第一个点在y轴上
    // boundaryGap: false,
    data: [],
  },

  yAxis: {
    // name: '数值',
    type: "value",
    // min: 0, // 设置y轴刻度的最小值
    // max: 1800, // 设置y轴刻度的最大值
    // splitNumber: 9, // 设置y轴刻度间隔个数
    axisLine: {
      show: true,
      // lineStyle: {
      // 	// 设置y轴颜色
      // 	color: '#87CEFA'
      // }
    },
    axisLabel: {
      show: true,
      color: "white",
      fontSize: 12,
      formatter: function (value) {
        if (value >= 1000) {
          value = value / 1000 + "k";
        }
        return value;
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#172738",
        width: 1,
        type: "solid",
      },
    },
  },
  series: [
    {
      name: "Confirmed",
      data: [],
      type: "line",
      // 设置小圆点消失
      // 注意：设置symbol: 'none'以后，拐点不存在了，设置拐点上显示数值无效
      // symbol: 'none',
      // 设置折线弧度，取值：0-1之间
      smooth: true,
    },

    {
      name: "Suspected",
      data: [],
      type: "line",
      // 设置折线上圆点大小
      smooth: true,
    },

    {
      name: "Healed",
      data: [],
      type: "line",
      // 设置折线上圆点大小
      smooth: true,
    },

    {
      name: "Death",
      data: [],
      type: "line",
      // 设置折线上圆点大小
      smooth: true,
    },
  ],

  // color: ['#00EE00', '#FF9F7F', '#FFD700']
};

ec_left1.setOption(option_left1);
