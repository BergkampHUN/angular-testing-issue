import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponent } from './test.component';
import { TestService } from '../test.service';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  const testServiceMock = jasmine.createSpyObj('TestService', ['getCase']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      providers: [
        { provide: TestService, useValue: testServiceMock },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('expect service has been called', () => {
    spyOn(component, 'edit');
    component.edit();
    expect(component.edit).toHaveBeenCalledTimes(1);
    expect(testServiceMock.getCase).toHaveBeenCalled();
  });
});
