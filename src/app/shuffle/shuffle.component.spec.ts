/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShuffleComponent } from './shuffle.component';

describe('ShuffleComponent', () => {
  let component: ShuffleComponent;
  let fixture: ComponentFixture<ShuffleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShuffleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});