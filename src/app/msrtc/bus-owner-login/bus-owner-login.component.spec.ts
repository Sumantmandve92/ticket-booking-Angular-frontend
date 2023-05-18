import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusOwnerLoginComponent } from './bus-owner-login.component';

describe('BusOwnerLoginComponent', () => {
  let component: BusOwnerLoginComponent;
  let fixture: ComponentFixture<BusOwnerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusOwnerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusOwnerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
