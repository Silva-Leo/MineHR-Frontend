import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarraSimples extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                title: {
                    text:"Barras",
                    align: 'top',
                    margin: 30,
                    offsetX: -240,
                    offsetY: 0,
                    floating: true,
                    style: {
                      fontSize:  '16px',
                      fontWeight:  'bold',
                      fontFamily:  undefined,
                      color:  '#5d405c'
                    },
                },
                chart: {
                    id: "basic-bar",
                    redrawOnParentResize: true,
                    redrawOnWindowResize: true,
                    toolbar: {
                        show: true,
                        offsetX: -20,
                        offsetY: 20,
                        tools: {
                            download: true,
                            selection: false,
                            zoom: false,
                            zoomin: false,
                            zoomout: false,
                            pan: false,
                            reset:false
                        },
                    },
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: [
                        "South Korea",
                        "Canada",
                        "United Kingdom",
                        "Netherlands",
                        "Italy",
                        "France",
                        "Japan",
                        "United States",
                        "China",
                        "Germany",
                    ],
                },
            },
            series: [
                {
                    name: "series-1",
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
                },
            ],
        }
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                            <Chart
                                options={this.state.options}
                                series={this.state.series}
                                type="bar"
                                width="590"
                                height="290"
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default BarraSimples;
