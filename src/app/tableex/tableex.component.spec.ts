import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableexComponent } from './tableex.component';

describe('TableexComponent', () => {
  let component: TableexComponent;
  let fixture: ComponentFixture<TableexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
