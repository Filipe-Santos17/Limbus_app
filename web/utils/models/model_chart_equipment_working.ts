const EquipmentsWorking = {
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10
        }
    },
    labels:['Ativos', 'Inativos/Mal Contato'],
    colors:["#6DE497","#F04E5E"],
    grid: {
        padding: {
            bottom: -80
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

export default EquipmentsWorking;