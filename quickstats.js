// Sample Data
const labels = ['1', '5', '10', '15', '20', '25', '30'];

function createChart(chartId) {
    new Chart(document.getElementById(chartId), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sales',
                data: [10, 25, 15, 30, 20, 35, 28],
                borderColor: '#d35400',
                backgroundColor: 'rgba(211,84,0,0.2)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Create 4 Charts
createChart('chart1');
createChart('chart2');
createChart('chart3');
createChart('chart4');