import { Component } from '@angular/core';
import { IconEmailComponent } from '../../icons/icon-email/icon-email.component';
import { IconMobileComponent } from '../../icons/icon-mobile/icon-mobile.component';
import { IconAddressComponent } from '../../icons/icon-address/icon-address.component';

@Component({
  selector: 'basic-details',
  imports: [IconEmailComponent, IconMobileComponent, IconAddressComponent],
  templateUrl: './basic-details.component.html',
  styleUrl: './basic-details.component.css',
})
export class BasicDetailsComponent {}
