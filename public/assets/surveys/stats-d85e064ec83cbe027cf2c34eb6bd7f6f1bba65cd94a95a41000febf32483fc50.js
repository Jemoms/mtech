(function() {
  var ready;

  ready = function() {
    var userChart, userChartCanvas, userData, userOptions;
    userChartCanvas = $("#UserChart").get(0).getContext("2d");
    userChart = new Chart(userChartCanvas);
    userData = [
      {
        value: parseInt($("#UserChart").data('total')),
        color: "#f56954",
        highlight: "#f56954",
        label: "Total des utilisateurs inscrits"
      }, {
        value: parseInt($("#UserChart").data('responded')),
        color: "#00a65a",
        highlight: "#00a65a",
        label: "Total des utilisateurs ayant répondus"
      }
    ];
    userOptions = {
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      percentageInnerCutout: 50,
      animationSteps: 100,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      responsive: true,
      maintainAspectRatio: true,
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    };
    return userChart.Doughnut(userData, userOptions);
  };

}).call(this);
