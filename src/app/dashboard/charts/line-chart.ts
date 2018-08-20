import Chart from 'chart.js';

export class LineChart{
    private data: Object = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
            "January", "February", "March", "April"
        ],
        datasets: [{
            label: "Sales Stats",
            borderColor: '#34bfa3',
            borderWidth: 2,
            pointBackgroundColor: '#34bfa3',

            backgroundColor: '#34bfa3',

            pointHoverBackgroundColor: '#34bfa3',
            pointHoverBorderColor: '#34bfa3',
            data: [
                10, 20, 16,
                18, 12, 40,
                35, 30, 33,
                34, 45, 40,
                60, 55, 70,
                65, 75, 62
            ]
        }]
    }

    private options: Object = {
        type: 'line',
        data: this.data,
        options: {
            title: {
                display: false,
            },
            tooltips: {
                intersect: false,
                mode: 'nearest',
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: false
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            hover: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            },

            elements: {
                point: {
                    radius: 0,
                    borderWidth: 0,

                    hoverRadius: 0,
                    hoverBorderWidth: 0
                }
            }
        }
    }


    constructor(element, options = {}){
        
        new Chart(element, {
            ...this.options, 
            ...options
        })
    }

}