import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AceitosPage } from './aceitos.page';

describe('AceitosPage', () => {
  let component: AceitosPage;
  let fixture: ComponentFixture<AceitosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceitosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AceitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
