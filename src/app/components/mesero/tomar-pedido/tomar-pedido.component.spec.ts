import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomarPedidoComponent } from './tomar-pedido.component';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/servicios/user.service';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
// import { AppComponent } from './app.component';
// import { UserService } from './servicios/user.service';

describe('TomarPedidoComponent', () => {
  let component: TomarPedidoComponent;
  let fixture: ComponentFixture<TomarPedidoComponent>;
  let order;
  let selectEgg:any;
  let selectCheese:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomarPedidoComponent ],
      providers: [{provide: Auth, useValue: UserService},{provide: Firestore, useValue: UserService}],

    })
    .compileComponents();

    sessionStorage.setItem('User','{"uid":"AextYYpYUrghueil3WbfCfBN0p93","nombre":"Miguel"}');

    fixture = TestBed.createComponent(TomarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    selectEgg=fixture.nativeElement.querySelector('#egg');
    selectCheese=fixture.nativeElement.querySelector('#cheese');
    order=[
            {index:1,
            descripcion:'cafe',
            precio: 5,
            cantidad: 1},
            {index: 2,
            descripcion:'jugo',
            precio: 6,
            cantidad: 1},
            {index: 2,
            descripcion:'leche',
            precio: 7,
            cantidad: 2}
          ];
    component.pedido = order;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filterMenu Hamburguesa simple', () => {
    component.filterMenu("Hamburguesa simple");
    expect(component.selectSimple).toBeTruthy();
    expect(component.selectDoble).toBeFalsy();
  });

  it('filterMenu Hamburguesa doble', () => {
    component.filterMenu("Hamburguesa doble");
    expect(component.selectSimple).toBeFalsy();
    expect(component.selectDoble).toBeTruthy();
  });

  it('filterMenu desayuno', () => {
    component.filterMenu('Desayuno');
    expect(component.typeMenu).toBe('Desayuno');
    expect(component.simpleDoble).toBeFalsy();
  });

  it('deleteItems', () => {
    component.deleteItems('cafe');
    expect(component.pedido.length).toBe(2);
   });

  it('addItems', () => {
  component.addItems('cafe', 5);
  expect(component.pedido[0].cantidad).toBe(2);
  expect(component.pedido[0].precio).toBe(10);
  });

  it('addNombre', () => {
    component.addNombre(0,'jugo', 6, 1);
    console.log('cafe' + component.pedido[0].cantidad);
    expect(component.pedido[1].cantidad).toBe(2);
    expect(component.pedido[1].precio).toBe(12);
    });

  it('removeItems', () => {
  component.removeItems('leche', 14);
  expect(component.pedido[2].cantidad).toBe(1);
  expect(component.pedido[2].precio).toBe(7);
  });

  it('removeItems', () => {
  component.removeItems('jugo', 6);
  expect(component.pedido.length).toBe(2);
  });

  it('precioTotal', () => {
    component.precioTotal();
    expect(component.total).toBe(18);
    });

/*   it('addEgg', () => {
    fixture.detectChanges(); */
    /* selectEgg.value = '2'; */
/*     console.log('selectEgg.value '+ selectEgg.value);
    selectEgg.triggerEventHandler('click', {
      selectEgg.value = '2',
    }); */
    /* component.addEgg(); */
/*     expect(component.egg).toBe('2');
    }); */

});
