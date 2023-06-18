function getTime() {
  $.ajax({
    url: "/time",
    timeout: 10000,
    success: function (data) {
      $("#time").html(data);
    },
    error: function (xhr, ajaxOptions, thrownError) {},
  });
}

function get_c1_data() {
  $.ajax({
    url: "/c1",
    success: function (data) {
      $(".num h1").eq(0).text(data.confirm);
      $(".num h1").eq(1).text(data.suspect);
      $(".num h1").eq(2).text(data.heal);
      $(".num h1").eq(3).text(data.dead);
    },
    error: function (xhr, ajaxOptions, thrownError) {},
  });
}

function get_c2_data() {
  $.ajax({
    url: "/c2",
    success: function (data) {
      optionMap.series[0].data = data.data;
      ec_center.setOption(optionMap);
    },
    error: function (xhr, ajaxOptions, thrownError) {},
  });
}

getTime();
get_c1_data();
get_c2_data();

// setInterval(getTime, 1000);
