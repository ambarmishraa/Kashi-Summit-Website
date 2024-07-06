import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSponserComponent } from './our-sponser.component';

describe('OurSponserComponent', () => {
  let component: OurSponserComponent;
  let fixture: ComponentFixture<OurSponserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurSponserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurSponserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
