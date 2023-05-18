import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleYourBusComponent } from './schedule-your-bus.component';

describe('ScheduleYourBusComponent', () => {
  let component: ScheduleYourBusComponent;
  let fixture: ComponentFixture<ScheduleYourBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleYourBusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleYourBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
