import { Component } from '@angular/core';
import { BasicDetailsComponent } from '../../components/home/basic-details/basic-details.component';

@Component({
  selector: 'app-home',
  imports: [BasicDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
