import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatladiWeddingComponent } from './ratladi-wedding.component';

describe('RatladiWeddingComponent', () => {
  let component: RatladiWeddingComponent;
  let fixture: ComponentFixture<RatladiWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatladiWeddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatladiWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
