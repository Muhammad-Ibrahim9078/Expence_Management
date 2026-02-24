import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";

export default function DonutCard() {
  const [device, setDevice] = useState("all"); // all, desktop, tablet, mobile

  const getBrandColor = () => {
    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue("--color-fg-brand")?.trim() || "#1447E6";
  };
  const getBrandSecondaryColor = () => {
    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue("--color-fg-brand-subtle")?.trim() || "#6E4E2E";
  };
  const getBrandTertiaryColor = () => {
    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue("--color-fg-brand-strong")?.trim() || "#8A6416";
  };

  const brandColor = getBrandColor();
  const brandSecondaryColor = getBrandSecondaryColor();
  const brandTertiaryColor = getBrandTertiaryColor();

  const getSeriesByDevice = (device) => {
    switch (device) {
      case "desktop": return [15.1, 22.5, 4.4, 8.4];
      case "tablet": return [25.1, 26.5, 1.4, 3.4];
      case "mobile": return [45.1, 27.5, 8.4, 2.4];
      default: return [35.1, 23.5, 2.4, 5.4];
    }
  };

  const getChartOptions = () => ({
    series: getSeriesByDevice(device),
    colors: [brandColor, brandSecondaryColor, brandTertiaryColor],
    chart: { height: 250, type: "donut" },
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Visitors",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return sum + "k";
              },
            },
          },
        },
      },
    },
    legend: { show: false },
    dataLabels: { enabled: false },
  });

  useEffect(() => {
    const chartEl = document.getElementById("donut-chart");
    if (!chartEl) return;

    const chart = new ApexCharts(chartEl, getChartOptions());
    chart.render();

    return () => chart.destroy();
  }, [device]);

  return (
    <div className="max-w-sm w-full bg-neutral-primary-soft border border-default rounded-base shadow-xs p-4">
      <div id="donut-chart"></div>
    </div>
  );
}