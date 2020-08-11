import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConcluidosPage } from './concluidos.page';

describe('ConcluidosPage', () => {
  let component: ConcluidosPage;
  let fixture: ComponentFixture<ConcluidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcluidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConcluidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
