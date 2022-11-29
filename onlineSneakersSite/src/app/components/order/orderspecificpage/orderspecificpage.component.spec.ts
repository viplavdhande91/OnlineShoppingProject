import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderspecificpageComponent } from './orderspecificpage.component';

describe('OrderspecificpageComponent', () => {
  let component: OrderspecificpageComponent;
  let fixture: ComponentFixture<OrderspecificpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderspecificpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderspecificpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
