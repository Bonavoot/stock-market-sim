import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import { useLayoutEffect } from "react";
import "/src/BalanceChart.css";
import { Balances } from "../pages/Balance.type";
import BuyingPower from "./BuyingPower";

const BalanceHistoryChart = ({ balance }: Balances) => {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.horizontalLayout,
      })
    );

    let data = [
      {
        date: new Date(2021, 0, 1).getTime(),
        value: 1000,
      },
      {
        date: new Date(2021, 0, 2).getTime(),
        value: 400,
      },
      {
        date: new Date(2021, 0, 4).getTime(),
        value: 3000,
      },
      {
        date: new Date(2021, 0, 5).getTime(),
        value: 900,
      },
    ];

    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.1,
        groupData: false,
        baseInterval: {
          timeUnit: "day",
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 50,
        }),

        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.1,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Disable y-axis labels
    //yAxis.renderer.labels.template.setAll({ visible: false });

    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        minDistance: 10,
        fill: am5.color(0x095256),
        stroke: am5.color(0x095256),
      })
    );

    xAxis.get("renderer").labels.template.set("visible", false);
    yAxis.get("renderer").labels.template.set("visible", false);
    series.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, []);
  return (
    <>
      <div
        className="balance-chart"
        id="chartdiv"
        style={{ width: "100%", height: "325px" }}
      >
        <div className="balance">{balance}</div>
      </div>
      <BuyingPower />
    </>
  );
};

export default BalanceHistoryChart;
