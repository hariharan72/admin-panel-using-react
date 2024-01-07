import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Colors } from "chart.js/auto";
import styles from "./ChartStyles.module.css";
import { FaBlackTie } from "react-icons/fa";

const PieChart = ({ chartData }) => {
  return (
    <div className={styles.chartcontainer}>
      <h2>Storage Information</h2>
      <Pie data={chartData } />
    </div>
  );
};

export default PieChart;