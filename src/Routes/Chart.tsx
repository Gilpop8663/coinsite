import { useQuery } from "react-query";
import { fetchOHLCInfo } from "../api";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Container = styled.div`
  margin-top: 30px;
`;

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlc", coinId],
    () => fetchOHLCInfo(coinId),
    {
      refetchInterval: 10000,
    }
  );
  //  console.log(
  //     data?.map((item) => [item.open, item.high, item.low, item.close])
  //   );
  //   console.log(data?.map((item) => item.time_close.slice(5, 10)));
  //console.log(data?.map((item) => item.time_close[1]));
  //console.log(data);
  const arr = () =>
    data?.map((item) => {
      let x = item.time_close.slice(5, 10);
      let y = [
        item.open.toFixed(2),
        item.high.toFixed(2),
        item.low.toFixed(2),
        item.close.toFixed(2),
      ];
      //console.log(x);
      return { x: x, y: y };
    });
  // console.log(arr());
  return (
    <Container>
      {isLoading ? (
        "Loading Chart ..."
      ) : (
        <ApexChart
          width={480}
          height={300}
          type="candlestick"
          series={[
            {
              data: arr(),
            },
          ]}
          options={{
            chart: {
              type: "candlestick",
              width: 1000,
              height: 500,
            },
            title: {
              text: `${coinId} Chart`,
              align: "left",
            },
            xaxis: {
              type: "datetime",
              labels: { rotate: 0 },
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </Container>
  );
}

export default Chart;
