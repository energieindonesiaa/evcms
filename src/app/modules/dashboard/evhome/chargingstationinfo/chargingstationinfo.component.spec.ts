import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingstationinfoComponent } from './chargingstationinfo.component';

describe('ChargingstationinfoComponent', () => {
  let component: ChargingstationinfoComponent;
  let fixture: ComponentFixture<ChargingstationinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingstationinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingstationinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
