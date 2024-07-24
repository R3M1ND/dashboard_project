import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  title = 'Dabang';
  isMenuClick: string | null = null;

  items = [
    { title: 'Dashboard', icon: 'incomplete_circle' },
    { title: 'Leaderboard', icon: 'leaderboard' },
    { title: 'order', icon: 'shopping_cart' },
    { title: 'Products', icon: 'local_mall' },
    { title: 'Sales Report', icon: 'show_chart' },
    { title: 'Messages', icon: 'sms' },
    { title: 'Settings', icon: 'settings' },
    { title: 'Sign Out', icon: 'logout' },
  ];

  toggleOnClickMenu(item: string) {
    if (this.isMenuClick === item) {
      this.isMenuClick = null;

    } else {
      this.isMenuClick = item;
    }
  }
}
