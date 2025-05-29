import { useEffect, useState } from "react";
import axios from "axios";
import ECharts from "echarts-for-react";
import useMachineData from "../hook/useMachineData";
import { Box, Skeleton } from "@mui/material";
function Charts() {
  const { machineData, loading } = useMachineData();

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: {
      type: "category",
      data: machineData.map((machine) => machine.name),
      axisLabel: {
        formatter: function (value) {
          const nameMap = {
            "Hydraulic Press J": "HP-J",
            "CNC Machine A": "CNC-A",
            "Lathe Machine B": "Lathe-B",
            "3D Printer I": "3D-I",
            "Milling Machine C": "Mill-C",
            "Press Machine E": "Press-E",
            "Laser Cutter H": "Laser-H",
            "CNC Machine F": "CNC-F",
            "Welding Machine G": "Weld-G",
            "Drilling Machine D": "Drill-D",
          };
          return nameMap[value] || value;
        },
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "health",
        data: machineData.map((machine) => machine.health),
        type: "line",
      },
    ],
    dataZoom: [{ type: "inside" }, { type: "slider", start: 0, end: 100 }],
  };

  return (
    <div className="Chart" >
      {loading ? (
        <>
          <Skeleton variant="rectangular" width="100%" height={400} />
          {/* <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={400}
          >
            <CircularProgress />
          </Box> */}
        </>
      ) : (
        <ECharts option={option} style={{ height: 400 }} />
      )}
    </div>
  );
}

export default Charts;
