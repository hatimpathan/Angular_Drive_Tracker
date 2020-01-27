import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwecreateDriveComponent } from './viewcreate-drive.component';

describe('ViwecreateDriveComponent', () => {
  let component: ViwecreateDriveComponent;
  let fixture: ComponentFixture<ViwecreateDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViwecreateDriveComponent ]
    })
    .compileComponents();
  }));''

  beforeEach(() => {
    fixture = TestBed.createComponent(ViwecreateDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
