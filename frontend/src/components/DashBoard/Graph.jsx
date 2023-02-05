import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph({ selectedYear }) {
  const getOneUser = useSelector((state) => state.user.users);
  const allValue = useSelector((state) => state.value.values);
  const getOneValue = useSelector((state) => state.idealValue.idealValues);

  const option = {
    month: "numeric",
    day: "numeric",
  };

  const data = {
    labels: allValue
      .filter((value) => {
        const date = new Date(value.date);
        return date.getFullYear() === Number(selectedYear);
      })
      .map((value) => {
        const date = new Date(value.date);
        return date.toLocaleDateString("fr-FR", option);
      }),
    datasets: [
      {
        label: "INR",
        data: allValue
          .filter((value) => {
            const date = new Date(value.date);
            return date.getFullYear() === Number(selectedYear);
          })
          .map((value) => {
            return value.valeur;
          }),
        borderColor: "rgb(74, 192, 136, 0.5)",
        backgroundColor: "rgb(74, 192, 136)",
        tension: 0.3,
        fill: true,
        family: "Andale Mono, monospace",
        animations: {
          y: {
            duration: 2000,
            delay: 50,
          },
        },
      },
    ],
  };
  const options = {
    interaction: {
      intersect: false,
      mode: "index",
    },
    animation: {
      y: {
        easing: "easeInOutElastic",
        // eslint-disable-next-line consistent-return
        from: (ctx) => {
          if (ctx.type === "data") {
            if (ctx.mode === "default" && !ctx.dropped) {
              ctx.dropped = true;
              return 0;
            }
          }
        },
      },
    },
    elements: {
      point: {
        radius: 5,
      },
    },
    scales: {
      type: "linear",
      x: {
        title: {
          display: true,
          text: "Date",
          color: "rgb(74, 192, 136)",
          font: {
            size: 18,
            family: "Andale Mono, monospace",
          },
        },
        grid: {
          color: "gray",
          borderColor: "red",
          tickColor: "white",
          tickWidth: 2,
        },
        stacked: true,
        ticks: {
          color: "white",
          font: {
            size: 15,
            family: "Andale Mono, monospace",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "INR",
          color: "rgb(74, 192, 136)",
          font: {
            size: 18,
            family: "Andale Mono, monospace",
          },
        },
        grid: {
          color: "gray",
          borderColor: "white",
          tickColor: "white",
          tickWidth: 2,
        },
        stacked: true,
        ticks: {
          color: "white",
          font: {
            size: 15,
            family: "Andale Mono, monospace",
          },
          stepSize: 0.2,
        },
        suggestedMin: `${getOneValue.min}`,
        suggestedMax: `${getOneValue.max}`,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
          font: {
            size: 15,
            family: "Andale Mono, monospace",
          },
        },
        title: {
          display: true,
          text: ` Mr ${getOneUser.lastname}`,
          color: "white",
          font: {
            size: 15,
            family: "Andale Mono, monospace",
          },
        },
      },
    },
  };

  return (
    <div className="w-full text-white mt-6">
      <Line data={data} options={options} strokeWidht={10} />
    </div>
  );
}
Graph.propTypes = {
  selectedYear: PropTypes.string.isRequired,
};
export default Graph;
