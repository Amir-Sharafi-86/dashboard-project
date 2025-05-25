


let burger_menu = document.querySelector('.burger_menu')
let sidbar = document.querySelector('aside')
let bg_cover = document.querySelector('.bg_cover')

burger_menu.addEventListener('click', e => {
  console.log('click')
  sidbar.classList.add('d_block')
  bg_cover.classList.add('d_block')
})
bg_cover.addEventListener('click', e => {
  console.log('click')
  sidbar.classList.remove('d_block')
  bg_cover.classList.remove('d_block')
})



var options = {
  chart: {
    type: 'area',
    fontFamily: 'Raleway',
    height: 350,
  },
  series: [{
    name: 'فروش',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 12, 14, 15]
  }],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2001],
    axisBorder: {
      show: true,
      color: '#31353F',
      height: 1,
      width: '100%',
      offsetX: 0,
      offsetY: 0
    },
    axisTicks: {
      show: false,
    },
    
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#3A6FF8'],
  fill: {
    colors: ['#3A6FF8'],

    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.1,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },
}

var chart = new ApexCharts(document.querySelector("#chart_bitcoin_btc"), options);

chart.render();


let btnSeconde = document.querySelector('#seconde_btn')
let btnOne = document.querySelector('#one_btn')

btnSeconde.addEventListener('click', function (e) {

  console.log('click')
  chart.updateSeries([{
    name: 'test',
    data: [740, 460, 35, 50, 49, 60, 70, 91, 125, 12, 14, 15]
  }])

})

btnOne.addEventListener('click', function (e) {

  console.log('click')
  chart.updateSeries([{
    name: 'فروش',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 12, 14, 15]
  }])

})