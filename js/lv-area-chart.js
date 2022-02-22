<!--Area Chart-->
    var ctx = document.getElementById('fillChart').getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#6f3ba6');
    gradientStroke.addColorStop(0, '#6f3ba6');

    var gradientFill = ctx.createLinearGradient(0, 0, 0, 500);
    gradientFill.addColorStop(0, "rgba(173, 100, 251, 100)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 100)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 100)");


    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
    datasets: [{
    label: "Data",
    borderColor: gradientStroke,
    pointBorderColor: gradientStroke,
    pointBackgroundColor: gradientStroke,
    pointHoverBackgroundColor: gradientStroke,
    pointHoverBorderColor: gradientStroke,
    pointBorderWidth: 10,
    pointHoverRadius: 10,
    pointHoverBorderWidth: 1,
    pointRadius: 3,
    fill: true,
    backgroundColor: gradientFill,
    borderWidth: 4,
    data: [100, 120, 150, 170, 180, 170, 160]
}]
},
    options: {
    legend: {
    position: "top"
},
    point: {
    backgroundColor: 'white'
},
    scales: {
    yAxes: [{
    ticks: {
    fontColor: "rgba(0,0,0,0.5)",
    fontStyle: "bold",
    beginAtZero: true,
    maxTicksLimit: 5,
    padding: 20
},
    gridLines: {
    drawTicks: false,
    display: false
}

}],
    xAxes: [{
    gridLines: {
    zeroLineColor: "transparent"
},
    ticks: {
    padding: 20,
    fontColor: "rgba(0,0,0,0.5)",
    fontStyle: "bold"
}
}]
}
}
});

