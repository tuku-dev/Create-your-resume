import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMobileComponent } from './icon-mobile.component';

describe('IconMobileComponent', () => {
  let component: IconMobileComponent;
  let fixture: ComponentFixture<IconMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
