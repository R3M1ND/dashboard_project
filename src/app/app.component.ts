import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SaleSummaryComponent } from './components/sale-summary/sale-summary.component';
import { VisitorComponent } from "./components/visitor/visitor.component";
import { RevenueComponent } from "./components/revenue/revenue.component";
import { CustomerComponent } from "./components/customer/customer.component";
import { CompareComponent } from "./components/compare/compare.component";
import { LevelComponent } from "./components/level/level.component";
import { ProductsComponent } from "./components/products/products.component";
import { MapComponent } from "./components/map/map.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent, SaleSummaryComponent, VisitorComponent, RevenueComponent, CustomerComponent, CompareComponent, LevelComponent, ProductsComponent, MapComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard_project';
  sidebarTitle = 'Dabang';
  sideBarItems = [
    { title: 'Dashboard', icon: 'incomplete_circle', page: '/' },
    { title: 'Leaderboard', icon: 'leaderboard', page: '/leaderboard' },
    { title: 'order', icon: 'shopping_cart', page: '/' },
    { title: 'Products', icon: 'local_mall', page: '/' },
    { title: 'Sales Report', icon: 'show_chart', page: '/' },
    { title: 'Messages', icon: 'sms', page: '/' },
    { title: 'Settings', icon: 'settings', page: '/' },
    { title: 'Sign Out', icon: 'logout', page: '/' },
  ];
  showSelectedMenu: string = 'Dashboard';
  onMenuItemClick(item: string) {
    this.showSelectedMenu = item;
    console.log('Menu item clicked: ', item);


  }

}
