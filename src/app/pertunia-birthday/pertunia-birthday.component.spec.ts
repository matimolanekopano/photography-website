import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertuniaBirthdayComponent } from './pertunia-birthday.component';

describe('PertuniaBirthdayComponent', () => {
  let component: PertuniaBirthdayComponent;
  let fixture: ComponentFixture<PertuniaBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PertuniaBirthdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PertuniaBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
