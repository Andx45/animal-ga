import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPassComponent } from './confirm-pass.component';

describe('ConfirmPassComponent', () => {
  let component: ConfirmPassComponent;
  let fixture: ComponentFixture<ConfirmPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmPassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
