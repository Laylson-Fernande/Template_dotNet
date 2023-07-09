/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { User_rowComponent } from './user.component';

describe('User_rowComponent', () => {
  let component: User_rowComponent;
  let fixture: ComponentFixture<User_rowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User_rowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User_rowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
