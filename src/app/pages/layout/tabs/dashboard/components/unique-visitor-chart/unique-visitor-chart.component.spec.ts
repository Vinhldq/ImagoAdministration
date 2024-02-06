import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueVisitorChartComponent } from './unique-visitor-chart.component';

describe('UniqueVisitorChartComponent', () => {
  let component: UniqueVisitorChartComponent;
  let fixture: ComponentFixture<UniqueVisitorChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniqueVisitorChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniqueVisitorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
