/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TtgComponent } from './ttg.component';

describe('TtgComponent', () => {
  let component: TtgComponent;
  let fixture: ComponentFixture<TtgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
