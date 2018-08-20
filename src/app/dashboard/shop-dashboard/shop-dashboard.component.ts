import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {LineChart} from '../charts/line-chart'

@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.css']
})
export class ShopDashboardComponent implements AfterViewInit {

  @ViewChild('salesChart') salesChart;
    @ViewChild('engagementChart') engagementChart;
   
  constructor() { }

  ngAfterViewInit() {
    this._initCharts()
  }

  _initCharts(){
    this._salesChartInit(this.salesChart.nativeElement)
    this._engagementChart(this.engagementChart.nativeElement)
  }

  //
  _salesChartInit(element){
      if(!element){
          return;
      }
      const options = {};
      const chart = (new LineChart(element, options));
  }

  _engagementChart(element){
    if (!element) {
      return;
    }
    const options = {
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
          "January", "February", "March", "April"
        ],
        datasets: [{
          label: "Sales Stats",
          borderColor: '#ffb547',
          borderWidth: 2,
          pointBackgroundColor: '#ffb547',

          backgroundColor: '#ffb547',

          pointHoverBackgroundColor: '#ffb547',
          pointHoverBorderColor: '#ffb547',
          data: [
            10, 60, 66,
            55, 40, 20,
            15, 25, 33,
            34, 45, 40,
            60, 55, 70,
            65, 75, 62
          ]
        }]
      }
    };
    const chart = (new LineChart(element, options));
  }

}
