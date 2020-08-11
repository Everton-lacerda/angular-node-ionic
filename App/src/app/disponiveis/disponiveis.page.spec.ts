import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisponiveisPage } from './disponiveis.page';

describe('DisponiveisPage', () => {
  let component: DisponiveisPage;
  let fixture: ComponentFixture<DisponiveisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisponiveisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisponiveisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
