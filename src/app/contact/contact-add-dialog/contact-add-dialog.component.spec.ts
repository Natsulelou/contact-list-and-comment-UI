import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAddDialogComponent } from './contact-add-dialog.component';

describe('ContactAddDialogComponent', () => {
  let component: ContactAddDialogComponent;
  let fixture: ComponentFixture<ContactAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
