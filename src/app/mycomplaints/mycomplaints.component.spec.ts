import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomplaintsComponent } from './mycomplaints.component';

describe('MycomplaintsComponent', () => {
  let component: MycomplaintsComponent;
  let fixture: ComponentFixture<MycomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycomplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
