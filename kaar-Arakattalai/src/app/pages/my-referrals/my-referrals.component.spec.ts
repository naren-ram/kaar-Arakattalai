import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReferralsComponent } from './my-referrals.component';

describe('MyReferralsComponent', () => {
  let component: MyReferralsComponent;
  let fixture: ComponentFixture<MyReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReferralsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
