import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const PriceChart = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(
      chartContainerRef.current,
      {
        width: 860,
        height: 460,
        layout: {
          background: { color: "#1A1A1A" },
          textColor: "#818181",
        },
        grid: {
          vertLines: {
            color: "rgba(255, 255, 255, 0.2)",
          },
          horzLines: {
            color: "rgba(255, 255, 255, 0.2)",
          },
        },
        priceScale: {
          borderColor: "#cccccc",
        },
        timeScale: {
          borderColor: "#cccccc",
          timeVisible: true,
          secondsVisible: false,
        },
      }
    );

    const candlestickSeries =
      chart.addCandlestickSeries({
        upColor: "#4caf50",
        downColor: "#f44336",
        borderUpColor: "#4caf50",
        borderDownColor: "#f44336",
        wickUpColor: "#4caf50",
        wickDownColor: "#f44336",
      });

    const candleData = [
      {
        time: 1696831200,
        open: 72.0,
        high: 72.5,
        low: 71.5,
        close: 72.2,
      },
      {
        time: 1696831260,
        open: 72.2,
        high: 72.6,
        low: 71.7,
        close: 72.3,
      },
      {
        time: 1696831320,
        open: 72.3,
        high: 72.7,
        low: 71.9,
        close: 72.4,
      },
      {
        time: 1696831380,
        open: 72.4,
        high: 72.8,
        low: 72.0,
        close: 72.5,
      },
      {
        time: 1696831440,
        open: 72.5,
        high: 72.9,
        low: 72.1,
        close: 72.6,
      },
      {
        time: 1696831500,
        open: 72.6,
        high: 73.0,
        low: 72.2,
        close: 72.7,
      },
      {
        time: 1696831560,
        open: 72.7,
        high: 73.1,
        low: 72.3,
        close: 72.8,
      },
      {
        time: 1696831620,
        open: 72.8,
        high: 73.2,
        low: 72.4,
        close: 72.9,
      },
      {
        time: 1696831680,
        open: 72.9,
        high: 73.3,
        low: 72.5,
        close: 73.0,
      },
      {
        time: 1696831740,
        open: 73.0,
        high: 73.4,
        low: 72.6,
        close: 73.1,
      },
    ];

    for (let i = 0; i < 100; i++) {
      const lastCandle =
        candleData[candleData.length - 1];
      const newTime = lastCandle.time + 60;
      const newCandle = {
        time: newTime,
        open: lastCandle.close,
        high:
          lastCandle.close + Math.random() * 0.5,
        low:
          lastCandle.close - Math.random() * 0.5,
        close:
          lastCandle.close +
          (Math.random() - 0.5) * 0.5,
      };
      candleData.push(newCandle);
    }

    candlestickSeries.setData(candleData);

    const handleResize = () => {
      chart.applyOptions({
        width:
          chartContainerRef.current.clientWidth,
      });
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
      chart.remove();
    };
  }, []);

  return <div ref={chartContainerRef} />;
};

export default PriceChart;
