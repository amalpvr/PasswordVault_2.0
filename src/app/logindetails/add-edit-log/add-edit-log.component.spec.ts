import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLogComponent } from './add-edit-log.component';

describe('AddEditLogComponent', () => {
  let component: AddEditLogComponent;
  let fixture: ComponentFixture<AddEditLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
