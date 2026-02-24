import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import AddIncome from "./AddIncome";

export default function IncomeBarChart() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const chartEl = document.getElementById("income-bar-chart");
    if (!chartEl) return;

    const options = {
      chart: {
        type: "bar",
        height: 300,
        toolbar: { show: false },
      },
      series: [
        {
          name: "Income",
          data: [12000, 9000, 8500, 14000, 2000, 8000, 10500, 11500, 9500, 12000],
        },
      ],
      colors: ['#7C3AED', '#C4B5FD'], // alternating purple shades
      plotOptions: {
        bar: {
          columnWidth: '50%',
          distributed: true,
          borderRadius: 6,
        },
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: [
          "1st Jan", "4th Jan", "6th Jan", "7th Jan", "8th Jan",
          "9th Jan", "10th Jan", "11th Jan", "13th Jan", "12th Feb"
        ],
        labels: { style: { colors: '#6B7280', fontSize: '12px' } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: { style: { colors: '#6B7280', fontSize: '12px' } },
      },
      tooltip: {
        y: {
          formatter: (val) => "$" + val,
        },
      },
      responsive: [
        {
          breakpoint: 640, // mobile
          options: {
            chart: { height: 220 },
            plotOptions: { bar: { columnWidth: '70%' } },
            xaxis: { labels: { style: { fontSize: '10px' } } },
            yaxis: { labels: { style: { fontSize: '10px' } } },
          },
        },
      ],
    };

    const chart = new ApexCharts(chartEl, options);
    chart.render();

    return () => chart.destroy();
  }, []);

  return (
    <div className="max-w-full bg-white p-5 rounded-xl shadow-md">
      {/* Card Header */}
      <div className="flex justify-between items-center mb-4 flex-col sm:flex-row sm:items-center gap-3">
        <div>
          <h5 className="text-lg font-semibold">Income Overview</h5>
          <p className="text-sm text-gray-500">Track your earnings over time and analyze your income trends.</p>
        </div>
        <button
          className="bg-purple-400 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-500"
          onClick={openModal}
        >
          + Add Income
        </button>
      </div>

      {/* Chart */}
      <div id="income-bar-chart"></div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white  rounded-xl shadow-lg w-11/12 max-w-md relative">
           
            <AddIncome closeModal={closeModal}/>
          </div>
        </div>
      )}
    </div>
  );
}