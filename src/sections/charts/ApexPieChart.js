import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// project import
import useConfig from 'hooks/useConfig';

// chart options
const pieChartOptions = {
  chart: {
    type: 'pie',
    width: 450,
    height: 450
  },
  labels: [`62.5% U.S.A`, '12.5% Spain', '12.5% Palestine', '12.5% Israel'],
  legend: {
    show: true,
    fontFamily: `'Roboto', sans-serif`,
    offsetX: 10,
    offsetY: 10,
    labels: {
      useSeriesColors: false
    },
    markers: {
      width: 12,
      height: 12,
      radius: 4
    },
    itemMargin: {
      horizontal: 25,
      vertical: 4
    }
  },
  responsive: [
    {
      breakpoint: 450,
      chart: {
        width: 280,
        height: 280
      },
      options: {
        legend: {
          show: false,
          position: 'bottom'
        }
      }
    }
  ]
};

// ==============================|| APEXCHART - PIE ||============================== //

const ApexPieChart = () => {
  const theme = useTheme();
  const { mode } = useConfig();

  const { primary } = theme.palette.text;
  const line = theme.palette.divider;
  const grey200 = theme.palette.grey[200];
  const backColor = theme.palette.background.paper;

  const [series] = useState([40, 8, 8, 8]);
  const [options, setOptions] = useState(pieChartOptions);

  const secondary = '#855CF8';
  const primaryMain = '#E289F2';
  const successDark = '#2d1570';
  const error = '#ACB9FF';
  const orangeDark = theme.palette.warning.main;

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [secondary, primaryMain, successDark, error, orangeDark],
      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary]
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      legend: {
        labels: {
          colors: 'grey.500'
        }
      },
      stroke: {
        colors: [secondary, primaryMain, successDark, error, orangeDark]
      }
    }));
  }, [mode, primary, line, grey200, backColor, secondary, primaryMain, successDark, error, orangeDark]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="pie" />
    </div>
  );
};

export default ApexPieChart;
