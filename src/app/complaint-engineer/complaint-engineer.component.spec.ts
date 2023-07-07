import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintEngineerComponent } from './complaint-engineer.component';

describe('ComplaintEngineerComponent', () => {
  let component: ComplaintEngineerComponent;
  let fixture: ComponentFixture<ComplaintEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
