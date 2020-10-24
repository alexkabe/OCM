import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepotCamionPage } from './depot-camion.page';

describe('DepotCamionPage', () => {
  let component: DepotCamionPage;
  let fixture: ComponentFixture<DepotCamionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotCamionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepotCamionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
