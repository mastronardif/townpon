import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharttwoComponent } from './charttwo.component';

describe('CharttwoComponent', () => {
  let component: CharttwoComponent;
  let fixture: ComponentFixture<CharttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
