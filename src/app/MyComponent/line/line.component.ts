import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent {

  lineChart = new Chart({
    
    chart:{
      type: 'bar',
      // backgroundColor: "red",
      
    },
    title: {
      text: "Monthly expenses"
    },
    xAxis: {
      categories:[
        'Jan',
        'Feb',
        'Mar',
        'Oct',
        'Dec',
      ]
    },
    yAxis: {
      title:{
        text: "Amount"
      }
    },
    series: [
      {
        name: "Maharashtra",
        type: 'bar',
        data: [1,6,2,8,10],
        color: "aqua"
      }
      
    ],
    credits:{
      enabled:false
    }
  })

}
