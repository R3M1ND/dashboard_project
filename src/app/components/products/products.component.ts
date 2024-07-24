import { Component } from '@angular/core';
import { BoxContainerComponent } from "../box-container/box-container.component";
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BoxContainerComponent, CommonModule, MatProgressBarModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  lists = [
    { id: 1, name: 'Home Decor Range', popularity: 45, sales: 45 },
    { id: 2, name: 'Disney Princess Pink Bag 18', popularity: 29, sales: 29 },
    { id: 3, name: 'Bathroom Essentials', popularity: 18, sales: 18 },
    { id: 4, name: 'Apple Smartwatches', popularity: 25, sales: 25 },
  ];

  public getDarkColor(index: number): string {
    const darkColorClass = ['blue-dark', 'green-dark', 'purple-dark', 'orange-dark'];
    return darkColorClass[index % darkColorClass.length];
  }
  public getLightColor(index: number): string {
    const lightColorClass = ['blue-light', 'green-light', 'purple-light', 'orange-light'];
    return lightColorClass[index % lightColorClass.length];
  }
  public getPercentClass(index: number): string {
    const percentClass = ['class-1', 'class-2', 'class-3', 'class-4'];
    return percentClass[index % percentClass.length];
  }

}
