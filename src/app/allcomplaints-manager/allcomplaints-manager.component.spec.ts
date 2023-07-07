import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcomplaintsManagerComponent } from './allcomplaints-manager.component';

describe('AllcomplaintsManagerComponent', () => {
  let component: AllcomplaintsManagerComponent;
  let fixture: ComponentFixture<AllcomplaintsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcomplaintsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcomplaintsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
