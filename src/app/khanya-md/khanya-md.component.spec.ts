import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhanyaMdComponent } from './khanya-md.component';

describe('KhanyaMdComponent', () => {
  let component: KhanyaMdComponent;
  let fixture: ComponentFixture<KhanyaMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhanyaMdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhanyaMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
