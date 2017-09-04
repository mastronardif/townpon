import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigdummyComponent } from './bigdummy.component';

describe('BigdummyComponent', () => {
  let component: BigdummyComponent;
  let fixture: ComponentFixture<BigdummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigdummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigdummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
