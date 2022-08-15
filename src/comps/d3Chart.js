import React, { useEffect } from "react";
import rd3 from "react-d3-library";

import * as d3 from "d3";

// https://blog.scottlogic.com/2020/05/01/rendering-one-million-points-with-d3.html

//https://github.com/paulho1973/react-d3-linechart/blob/master/src/App.js

export function Chart(props) {
  function data_create(props) {
    //console.log(props);
    return props.app_data.map((item) => {
      //carl: 31.03.2020 11:21
      //let dateboi = "%d.%m.%Y %H:%M";
      //somali: 2022-04-17
      let dateboi = "%Y-%m-%d";
      return {
        x: d3.timeParse(dateboi)(item[props.var_key.date_key]),
        y: item[props.var_key.var1_key],
      };
    });
  }

  function createGraph(props) {
    const plot_data = data_create(props);

    // set the dimensions and margins of the graph
    var margin = { top: 20, right: 20, bottom: 50, left: 70 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      .select("body")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // add X axis and Y axis
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    x.domain(
      d3.extent(plot_data, (d) => {
        return d.x;
      })
    );

    y.domain(
      d3.extent(plot_data, (d) => {
        return d.y;
      })
    );

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));

    // add the Line
    var valueLine = d3
      .line()
      .x((d) => {
        return x(d.x);
      })
      .y((d) => {
        return y(d.y);
      });

    /*     var point = svg
      .selectAll("point")
      .data(plot_data[props.dateIndex])
      .enter()
      .append("circle")
      .attr("fill", "black")

      .attr("cx", function (d) {
        return x(d.x);
      })
      .attr("cy", function (d) {
        return y(d.y);
      })
      .attr("r", 3); */

    svg
      .append("path")
      .data([plot_data])
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", valueLine);

    svg
      .append("g")
      .selectAll("dot")
      .data(plot_data[props.dateIndex])
      .enter()
      .append("circle")
      .attr("fill", "black")
      .attr("cx", (d) => x(d.x))
      .attr("cy", (d) => y(d.y))
      .attr("r", 30);
  }

  useEffect(() => {
    createGraph(props);
  }, []);
  return <></>;
}
