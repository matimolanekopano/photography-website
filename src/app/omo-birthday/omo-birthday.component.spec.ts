import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmoBirthdayComponent } from './omo-birthday.component';

describe('OmoBirthdayComponent', () => {
  let component: OmoBirthdayComponent;
  let fixture: ComponentFixture<OmoBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmoBirthdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmoBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
