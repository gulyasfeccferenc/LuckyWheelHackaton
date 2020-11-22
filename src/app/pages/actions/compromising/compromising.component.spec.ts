import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromisingComponent } from './compromising.component';

describe('CompromisingComponent', () => {
  let component: CompromisingComponent;
  let fixture: ComponentFixture<CompromisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompromisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompromisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
