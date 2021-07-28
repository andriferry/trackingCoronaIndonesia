"use strict";

import { Chart, registerables } from "chart.js";

export default ({ app }, inject) => {
  inject("chart", (target, type, data, options) => {
    Chart.register(...registerables);
    new Chart(target, {
      type: type,
      data: data,
      options: options
    });
  });
};
