import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { UserService } from 'src/app/servicios/user.service';

import { MeseroComponent } from './mesero.component';

describe('MeseroComponent', () => {
  let component: MeseroComponent;
  let fixture: ComponentFixture<MeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeseroComponent ],
      providers: [{provide: Auth, useValue: UserService},{provide: Firestore, useValue: UserService}],

      
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
