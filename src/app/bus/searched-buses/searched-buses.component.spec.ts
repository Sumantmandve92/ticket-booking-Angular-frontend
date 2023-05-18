import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedBusesComponent } from './searched-buses.component';

describe('SearchedBusesComponent', () => {
  let component: SearchedBusesComponent;
  let fixture: ComponentFixture<SearchedBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedBusesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
