/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BbcComponent } from './bbc.component';

describe('BbcComponent', () => {
  let component: BbcComponent;
  let fixture: ComponentFixture<BbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
