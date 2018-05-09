var myChart = echarts.init(document.getElementById('chart1'));

option = {
    title: {
        text: 'Number of Aged Lifts vs Modernized ones in HK',
        subtext: 'Source: gov.hk',
        textStyle: {
            align: 'center'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['No. of lifts aged above 20 years', 'No. of lifts participated in modernization'],
        top: 30
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['2013', '2014', '2015', '2016']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: 'No. of lifts aged above 20 years',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: '#61a0a8'
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [29020, 30455, 33231, 35323]
        },
        {
            name: 'No. of lifts participated in modernization',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [915, 2123, 983, 883]
        }
    ]
};
myChart.setOption(option)
window.onresize = myChart.resize