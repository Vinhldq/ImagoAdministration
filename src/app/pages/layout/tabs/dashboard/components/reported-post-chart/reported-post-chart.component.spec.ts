import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedPostChartComponent } from './reported-post-chart.component';

describe('ReportedPostChartComponent', () => {
  let component: ReportedPostChartComponent;
  let fixture: ComponentFixture<ReportedPostChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportedPostChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportedPostChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
