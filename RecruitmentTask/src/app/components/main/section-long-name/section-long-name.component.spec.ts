import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLongNameComponent } from './section-long-name.component';

describe('SectionLongNameComponent', () => {
  let component: SectionLongNameComponent;
  let fixture: ComponentFixture<SectionLongNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLongNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLongNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
