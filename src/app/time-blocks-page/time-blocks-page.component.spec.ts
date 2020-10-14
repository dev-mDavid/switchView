import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBlocksPageComponent } from './time-blocks-page.component';

describe('TimeBlocksPageComponent', () => {
  let component: TimeBlocksPageComponent;
  let fixture: ComponentFixture<TimeBlocksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeBlocksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeBlocksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
