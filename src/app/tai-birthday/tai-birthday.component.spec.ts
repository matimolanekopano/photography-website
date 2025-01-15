import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiBirthdayComponent } from './tai-birthday.component';

describe('TaiBirthdayComponent', () => {
  let component: TaiBirthdayComponent;
  let fixture: ComponentFixture<TaiBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaiBirthdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaiBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
