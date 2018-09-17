import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAuthWso2Component } from './ngx-auth-wso2.component';

describe('NgxAuthWso2Component', () => {
  let component: NgxAuthWso2Component;
  let fixture: ComponentFixture<NgxAuthWso2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAuthWso2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuthWso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
