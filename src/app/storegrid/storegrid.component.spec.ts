import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoregridComponent } from './storegrid.component';

describe('StoregridComponent', () => {
  let component: StoregridComponent;
  let fixture: ComponentFixture<StoregridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoregridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoregridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
