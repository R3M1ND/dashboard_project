import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',

})
export class SidebarComponent {
  @Input() title: string = '';
  @Input() items: { title: string, icon: string, page: string }[] = [];
  @Output() onMenuClick = new EventEmitter<string>();

  isMenuClick: string | null = null;


  toggleOnClickMenu(item: string) {
    if (this.isMenuClick === item) {
      this.isMenuClick = null;
    } else {
      this.isMenuClick = item;
    }
    this.onMenuClick.emit(item);
  }


}
