import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/servicios/user.service';
import { MeseroComponent } from './mesero.component';

describe('MeseroComponent', () => {
  let component: MeseroComponent;
  let fixture: ComponentFixture<MeseroComponent>;
  let UserServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    UserServiceSpy = jasmine.createSpyObj<UserService>('UserService', ['register', 'login', 'signOutUser']);

    await TestBed.configureTestingModule({
      declarations: [MeseroComponent],
      providers: [{ provide: UserService, useValue: UserServiceSpy }],

    })
      .compileComponents();

    sessionStorage.setItem('User','{"uid":"AextYYpYUrghueil3WbfCfBN0p93","nombre":"Miguel"}');

    fixture = TestBed.createComponent(MeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showTakeOrder', () => {
    fixture.detectChanges();
    component.showTakeOrder();
    /* btnOpenReg.triggerEventHandler('click', null); */
    expect(component.showTakeO).toBeTruthy();
    expect(component.showOrdersR).toBeFalsy();
  });

  it('showOrderReady', () => {
    fixture.detectChanges();
    component.showOrderReady();
    /* btnOpenReg.triggerEventHandler('click', null); */
    expect(component.showOrdersR).toBeTruthy();
    expect(component.showTakeO).toBeFalsy();
  });

});
