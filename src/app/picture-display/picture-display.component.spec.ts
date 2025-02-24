import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureDisplayComponent } from './picture-display.component';

describe('PictureDisplayComponent', () => {
  let component: PictureDisplayComponent;
  let fixture: ComponentFixture<PictureDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
