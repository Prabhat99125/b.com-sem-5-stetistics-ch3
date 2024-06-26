let x = no;
let y = xArray;
let y1 = rArray;
let centerLine = xArraySum / no.length;
let upperControlLimit = [];
let lowerControlLimit = [];
getData.addEventListener("click",() => {
    console.log("chart", x,y,y1);
    console.log("data", centerLine,upperControlLimitm,lowerControlLimit)
    // Prepare data for Chart.js - Chart 1 (y)
let data1 = {
    labels: x,
    datasets: [{
                label: 'X Chart',
                data: y,
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                pointRadius: 1.5,
                fill: false,
            },  {
                label: 'U.C.L.',
                data: Array(x.length).fill(upperControlLimit),
                borderColor: 'green',
                borderWidth: 1.9,
                borderDash: [10, 3],
                fill: false,
                pointRadius: 0
            },
            {
                label: 'C.L.',
                data: Array(x.length).fill(centerLine),
                borderColor: 'black',
                borderWidth: 1.9,
                borderDash: [0, 0],
                fill: false,
                pointRadius: 0,
                
            },
             {
                label: 'L.C.L.',
                data: Array(x.length).fill(lowerControlLimit),
                borderColor: 'red',
                borderWidth: 1.9,
                borderDash: [10, 3],
                fill: false,
                pointRadius: 0
            }]
        };
        
        // Prepare data for Chart.js - Chart 2 (y1)
        let data2 = {
            labels: x,
            datasets: [{
                label: 'R Chart',
                data: y1,
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                borderWidth: 1
            }, {
                label: 'Center Line (CL)',
                data: Array(x.length).fill(centerLine),
                borderColor: 'green',
                borderWidth: 1,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 0
            }, {
                label: 'Upper Control Limit (UCL)',
                data: Array(x.length).fill(upperControlLimit),
                borderColor: 'red',
                borderWidth: 1,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 0
            }, {
                label: 'Lower Control Limit (LCL)',
                data: Array(x.length).fill(lowerControlLimit),
                borderColor: 'red',
                borderWidth: 1,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 0
            }]
        };

        // Configuration options
        let options = {
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Sample Number'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            },
            animation: {
                // duration: 2000, // 2 seconds animation
                easing: 'linear'
            }
        };

        // Create Chart 1 on the canvas element
        let ctx1 = document.getElementById('chart1').getContext('2d');
        let chart1 = new Chart(ctx1, {
            type: 'line',
            data: data1,
            options: options
        });

        // Create Chart 2 on the canvas element
        let ctx2 = document.getElementById('chart2').getContext('2d');
        let chart2 = new Chart(ctx2, {
            type: 'line',
            data: data2,
            options: options
        });  
});
      