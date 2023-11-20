import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubomarcasComponent } from './cubomarcas.component';

describe('CubomarcasComponent', () => {
  let component: CubomarcasComponent;
  let fixture: ComponentFixture<CubomarcasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CubomarcasComponent]
    });
    fixture = TestBed.createComponent(CubomarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
