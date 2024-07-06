import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KashiSummitComponent } from './kashi-summit.component';

describe('KashiSummitComponent', () => {
  let component: KashiSummitComponent;
  let fixture: ComponentFixture<KashiSummitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KashiSummitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KashiSummitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
