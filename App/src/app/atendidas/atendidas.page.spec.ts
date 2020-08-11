import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtendidasPage } from './atendidas.page';

describe('AtendidasPage', () => {
  let component: AtendidasPage;
  let fixture: ComponentFixture<AtendidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtendidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
