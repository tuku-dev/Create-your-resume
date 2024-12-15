import { Component } from '@angular/core';
import { BasicDetailsComponent } from '../../components/home/basic-details/basic-details.component';
import { OtherDetailsComponent } from "../../components/home/other-details/other-details.component";

@Component({
  selector: 'app-home',
  imports: [BasicDetailsComponent, OtherDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
