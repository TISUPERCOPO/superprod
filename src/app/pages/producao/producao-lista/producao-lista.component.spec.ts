import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducaoListaComponent } from './producao-lista.component';

describe('ProducaoListaComponent', () => {
  let component: ProducaoListaComponent;
  let fixture: ComponentFixture<ProducaoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducaoListaComponent]
    });
    fixture = TestBed.createComponent(ProducaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
