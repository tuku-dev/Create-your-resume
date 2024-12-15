import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineUrlsComponent } from './online-urls.component';

describe('OnlineUrlsComponent', () => {
  let component: OnlineUrlsComponent;
  let fixture: ComponentFixture<OnlineUrlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineUrlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
