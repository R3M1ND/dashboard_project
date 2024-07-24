import { Component } from '@angular/core';
import { BoxContainerComponent } from "../box-container/box-container.component";



@Component({
  selector: 'app-map',
  standalone: true,
  imports: [BoxContainerComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {


}
