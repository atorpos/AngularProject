import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {ImageDropzoneComponent} from './image-dropzone/image-dropzone.component';
import {NgxEchartsDirective, NgxEchartsModule} from 'ngx-echarts';
import { EChartsOption} from 'echarts';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ImageDropzoneComponent, NgxEchartsDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo';

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [12, 19, 3, 5, 2, 3],
        type: 'bar',
        name: 'Sample Data'
      }
    ],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Sample Data']
    }
  };


}
