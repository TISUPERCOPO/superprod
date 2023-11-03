import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducaoCadastroComponent } from './producao-cadastro.component';

describe('ProducaoCadastroComponent', () => {
  let component: ProducaoCadastroComponent;
  let fixture: ComponentFixture<ProducaoCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducaoCadastroComponent]
    });
    fixture = TestBed.createComponent(ProducaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
