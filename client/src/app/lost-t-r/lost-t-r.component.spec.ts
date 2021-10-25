import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostTRComponent } from './lost-t-r.component';

describe('LostTRComponent', () => {
  let component: LostTRComponent;
  let fixture: ComponentFixture<LostTRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostTRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LostTRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
