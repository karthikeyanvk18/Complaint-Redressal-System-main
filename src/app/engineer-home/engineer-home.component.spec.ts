import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerHomeComponent } from './engineer-home.component';

describe('EngineerHomeComponent', () => {
  let component: EngineerHomeComponent;
  let fixture: ComponentFixture<EngineerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
