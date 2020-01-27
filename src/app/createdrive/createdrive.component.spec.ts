import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedriveComponent } from './createdrive.component';

describe('CreatedriveComponent', () => {
  let component: CreatedriveComponent;
  let fixture: ComponentFixture<CreatedriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
