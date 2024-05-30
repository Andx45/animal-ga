import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAppointmentComponent } from './reg-appointment.component';

describe('RegAppointmentComponent', () => {
  let component: RegAppointmentComponent;
  let fixture: ComponentFixture<RegAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
