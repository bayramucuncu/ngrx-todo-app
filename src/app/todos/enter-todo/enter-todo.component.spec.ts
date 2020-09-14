import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterTodoComponent } from './enter-todo.component';

describe('EnterTodoComponent', () => {
  let component: EnterTodoComponent;
  let fixture: ComponentFixture<EnterTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
