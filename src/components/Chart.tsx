import useGraphData from "../hooks/useGraphData";
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Cases of Covid By Year",
    },
  },
};
const Chart = () => {
  const { data } = useGraphData();
  const labels = data && Object.keys(data);
  const val = data && Object.values(data);
  const gData = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: val,
        borderColor: "#111827",
        backgroundColor: "#374151",
      },
    ],
  };
  return <Line options={options} data={gData} />;
};

export default Chart;
