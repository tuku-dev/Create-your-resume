import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAddressComponent } from './icon-address.component';

describe('IconAddressComponent', () => {
  let component: IconAddressComponent;
  let fixture: ComponentFixture<IconAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
