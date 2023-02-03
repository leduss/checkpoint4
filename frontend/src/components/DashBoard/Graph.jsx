import React from "react";
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

function Graph() {
  const getOneUser = useSelector((state) => state.user.users);
  const allValue = useSelector((state) => state.value.values);
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const data = {
    labels: allValue.map((value) =>
      new Date(value.date).toLocaleDateString("fr-Fr", option)
    ),
    datasets: [
      {
        label: "INR",
        data: allValue.map((value) => value.valeur),
        borderColor: "rgba(74, 192, 136)",
        backgroundColor: "rgba(74, 192, 136)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: ` Mr ${getOneUser.lastname}`,
      },
    },
  };

  return (
    <div className="w-full h-5/6 text-white">
      <Line data={data} options={options} />
    </div>
  );
}

export default Graph;
