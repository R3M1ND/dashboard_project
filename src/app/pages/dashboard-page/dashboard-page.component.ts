import { Component } from '@angular/core';
import { SaleSummaryComponent } from "../../components/sale-summary/sale-summary.component";
import { VisitorComponent } from "../../components/visitor/visitor.component";
import { RevenueComponent } from "../../components/revenue/revenue.component";
import { CustomerComponent } from "../../components/customer/customer.component";
import { CompareComponent } from "../../components/compare/compare.component";
import { ProductsComponent } from "../../components/products/products.component";
import { MapComponent } from "../../components/map/map.component";
import { LevelComponent } from "../../components/level/level.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [SaleSummaryComponent, VisitorComponent, RevenueComponent, CustomerComponent, CompareComponent, ProductsComponent, MapComponent, LevelComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {


}
