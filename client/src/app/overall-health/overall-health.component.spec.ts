import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallHealthComponent } from './overall-health.component';

describe('OverallHealthComponent', () => {
  let component: OverallHealthComponent;
  let fixture: ComponentFixture<OverallHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
