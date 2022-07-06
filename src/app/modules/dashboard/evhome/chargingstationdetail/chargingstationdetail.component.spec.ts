import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingstationdetailComponent } from './chargingstationdetail.component';

describe('ChargingstationdetailComponent', () => {
  let component: ChargingstationdetailComponent;
  let fixture: ComponentFixture<ChargingstationdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingstationdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingstationdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
