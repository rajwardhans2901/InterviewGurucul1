import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent {

  pieChart = new Chart({
    chart:{
      type: 'pie',
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
        type:"pie",
        data: [
          {
            name: "Jan",
            y: 40
          },
          {
            name: "Feb",
            y: 20
          },
          {
            name: "Mar",
            y: 10
          },
          {
            name: "Oct",
            y: 80
          },
          {
            name: "Dec",
            y: 20
          }
        ]
      }
    ],
    credits:{
      enabled:false
    }
  })

}
