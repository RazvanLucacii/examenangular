import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarpedidoComponent } from './insertarpedido.component';

describe('InsertarpedidoComponent', () => {
  let component: InsertarpedidoComponent;
  let fixture: ComponentFixture<InsertarpedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarpedidoComponent]
    });
    fixture = TestBed.createComponent(InsertarpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
