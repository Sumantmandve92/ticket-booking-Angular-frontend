import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSRTCHomeComponent } from './msrtchome.component';

describe('MSRTCHomeComponent', () => {
  let component: MSRTCHomeComponent;
  let fixture: ComponentFixture<MSRTCHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSRTCHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MSRTCHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
