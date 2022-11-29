import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercatergorypageComponent } from './ordercatergorypage.component';

describe('OrdercatergorypageComponent', () => {
  let component: OrdercatergorypageComponent;
  let fixture: ComponentFixture<OrdercatergorypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercatergorypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdercatergorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
