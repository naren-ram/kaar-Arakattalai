import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiChartComponent } from './pi-chart.component';

describe('PiChartComponent', () => {
  let component: PiChartComponent;
  let fixture: ComponentFixture<PiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiChartComponent], // if standalone
    }).compileComponents();

    fixture = TestBed.createComponent(PiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more unit tests if needed
});
