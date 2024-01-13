import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureBoardComponent } from './departure-board.component';

describe('DepartureBoardComponent', () => {
  let component: DepartureBoardComponent;
  let fixture: ComponentFixture<DepartureBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartureBoardComponent],
    });
    fixture = TestBed.createComponent(DepartureBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
