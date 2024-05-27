import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPetsComponent } from './reg-pets.component';

describe('RegPetsComponent', () => {
  let component: RegPetsComponent;
  let fixture: ComponentFixture<RegPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegPetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
