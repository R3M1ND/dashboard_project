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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, SaleSummaryComponent, VisitorComponent, RevenueComponent, CustomerComponent, CompareComponent, LevelComponent, ProductsComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard_project';
}
