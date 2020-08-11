import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaSolicitacaoSubcategoriaPage } from './nova-solicitacao-subcategoria.page';

describe('NovaSolicitacaoSubcategoriaPage', () => {
  let component: NovaSolicitacaoSubcategoriaPage;
  let fixture: ComponentFixture<NovaSolicitacaoSubcategoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaSolicitacaoSubcategoriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaSolicitacaoSubcategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
