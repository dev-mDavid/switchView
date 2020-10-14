import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchViewPageComponent } from './switch-view-page.component';

describe('SwitchViewPageComponent', () => {
  let component: SwitchViewPageComponent;
  let fixture: ComponentFixture<SwitchViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
