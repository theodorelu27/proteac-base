/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorldclashComponent } from './worldclash.component';

describe('WorldclashComponent', () => {
  let component: WorldclashComponent;
  let fixture: ComponentFixture<WorldclashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldclashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldclashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
