import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowndetailComponent } from './towndetail.component';

describe('TowndetailComponent', () => {
  let component: TowndetailComponent;
  let fixture: ComponentFixture<TowndetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowndetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowndetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
