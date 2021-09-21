import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrzaveFromComponent } from './drzave-from.component';

describe('DrzaveFromComponent', () => {
  let component: DrzaveFromComponent;
  let fixture: ComponentFixture<DrzaveFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrzaveFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrzaveFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
