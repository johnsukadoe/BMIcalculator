// index.js

document.addEventListener("DOMContentLoaded", function () {
    am4core.ready(function () {
        am4core.useTheme(am4themes_animated);

        var chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.padding(40, 40, 40, 40);

        // Your chart data
        chart.data = [{
            "category": "Underweight",
            "value": 18.5
        }, {
            "category": "Normal weight",
            "value": 24.9
        }, {
            "category": "Overweight",
            "value": 29.9
        }, {
            "category": "Obesity",
            "value": 40
        }];

        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "value";
        series.dataFields.categoryX = "category";
        series.tooltipText = "{valueY.value}";

        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.cornerRadiusTopLeft = 10;

        var labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.text = "{valueY}%";
        labelBullet.label.dy = -20;

        chart.cursor = new am4charts.XYCursor();
    });
});
