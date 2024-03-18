var chartDom = document.getElementById('main-2-chart');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Hồ Sơ',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'outside'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '12',
          fontWeight: 'bold',
          font:{
            family:"'Clicker Script', cursive"
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 60229, name: 'Hồ sơ đã trả kết quả trước hạn', itemStyle: { color: '#5470C6' } },
        { value: 74694, name: 'Hồ sơ đã trả kết quả đúng hạn', itemStyle: { color: '#91CC75' } },
        { value: 35, name: 'Hồ sơ đã trả kết quả trễ hạn', itemStyle: { color: '#FAC858' } },
        { value: 4640, name: 'Hồ sơ đang xử lý còn hạn', itemStyle: { color: '#EE6666' } },
        { value: 1021, name: 'Hồ sơ đang xử lý quá hạn', itemStyle: { color: '#73C0DE' } }
      ]
    }
  ]
};
myChart.setOption(option);