/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignUp1Component } from './SignUp1.component';

describe('SignUp1Component', () => {
  let component: SignUp1Component;
  let fixture: ComponentFixture<SignUp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
