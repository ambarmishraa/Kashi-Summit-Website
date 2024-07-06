import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamaraKashiComponent } from './hamara-kashi.component';

describe('HamaraKashiComponent', () => {
  let component: HamaraKashiComponent;
  let fixture: ComponentFixture<HamaraKashiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HamaraKashiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamaraKashiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
