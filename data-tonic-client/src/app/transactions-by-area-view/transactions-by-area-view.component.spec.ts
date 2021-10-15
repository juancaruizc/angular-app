import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsByAreaViewComponent } from './transactions-by-area-view.component';

describe('TransactionsByAreaViewComponent', () => {
  let component: TransactionsByAreaViewComponent;
  let fixture: ComponentFixture<TransactionsByAreaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsByAreaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsByAreaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
