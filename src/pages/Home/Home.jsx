import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AiFillFileAdd } from 'react-icons/ai';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

// Line Graph
const lineGraph = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};



// Bar Graph

const barGraph = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};



const pieGraph = {
  type: "pie",
  width: 280,
  height: 280,
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
    legend: {
      show: false,
    },
  },
};



export default function Example() {
  return (
    <div> 
      <div className="bg-gray-800 ml-10 mr-10 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:justify-between lg:px-8">
          <div className="max-w-xxl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-2xl lg:text-4xl">Welcome 👋</h2>
            <p className="mt-5 text-xl text-gray-400">
              You're most welcome to our platform. We are here to help you with all your needs.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 ml-10 mr-10">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Card>
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                >
                  <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
                    <Square3Stack3DIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Line Chart
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="max-w-sm font-normal"
                    >
                      Visualize your data in a simple way using the @material-tailwind/react chart plugin.
                    </Typography>
                  </div>
                </CardHeader>
                <CardBody className="px-2 pb-0">
                  <Chart {...lineGraph} />
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Card>
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                >
                  <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
                    <Square3Stack3DIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Bar Chart
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="max-w-sm font-normal"
                    >
                      Visualize your data in a simple way using the @material-tailwind/react chart plugin.
                    </Typography>
                  </div>
                </CardHeader>
                <CardBody className="px-2 pb-0">
                  <Chart {...barGraph} />
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Card>
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                >
                  <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
                    <Square3Stack3DIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Pie Chart
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="max-w-sm font-normal"
                    >
                      Visualize your data in a simple way using the @material-tailwind/react chart plugin.
                    </Typography>
                  </div>
                </CardHeader>
                <CardBody className="mt-4 grid place-items-center px-2">
                  <Chart {...pieGraph} />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}