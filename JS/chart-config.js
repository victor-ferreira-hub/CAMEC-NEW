let myChart = null;

export function updateChart(dados) {
    const top10 = dados.sort((a,b) => b.registros - a.registros).slice(0, 10);
    const ctx = document.getElementById('myChart').getContext('2d');
    
    const chartData = {
        labels: top10.map(d => d.nome),
        datasets: [
            { label: 'Registros', data: top10.map(d => d.registros), backgroundColor: '#000' },
            { label: 'SMS', data: top10.map(d => d.sms), backgroundColor: '#999' }
        ]
    };

    if (!myChart) {
        myChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: { responsive: true, maintainAspectRatio: false }
        });
    } else {
        myChart.data.labels = chartData.labels;
        myChart.data.datasets = chartData.datasets;
        myChart.update();
    }
}