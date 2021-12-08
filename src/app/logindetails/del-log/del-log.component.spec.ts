import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelLogComponent } from './del-log.component';

describe('DelLogComponent', () => {
  let component: DelLogComponent;
  let fixture: ComponentFixture<DelLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
