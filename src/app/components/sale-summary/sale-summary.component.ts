import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BoxContainerComponent } from "../box-container/box-container.component";

@Component({
  selector: 'app-sale-summary',
  standalone: true,
  imports: [MatIconModule, CommonModule, BoxContainerComponent],
  templateUrl: './sale-summary.component.html',
  styleUrl: './sale-summary.component.scss'
})
export class SaleSummaryComponent {
  list = [
    { icon: 'insert_chart', header: '$1k', topic: 'Total Sales', plus: '+8%' },
    { icon: 'description', header: '300', topic: 'Total Order', plus: '+5%' },
    { icon: 'sell', header: '5', topic: 'Product Sold', plus: '+1,2%' },
    { icon: 'person_add', header: '8', topic: 'New Customers', plus: '0,5%' },
  ];

  public getColor(index: number): string {
    const colorContentClass = ['content-1', 'content-2', 'content-3', 'content-4',];
    return colorContentClass[index % colorContentClass.length];

  }
  public getBgIcon(index: number): string {
    const colorIconClass = ['bg-icon-1', 'bg-icon-2', 'bg-icon-3', 'bg-icon-4',];
    return colorIconClass[index % colorIconClass.length];
  }


}
