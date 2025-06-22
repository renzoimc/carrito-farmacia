import { Component, inject, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito';
import { CarritoModel } from '../../models/carrito-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito-principal',
  imports: [CommonModule , FormsModule],
  templateUrl: './carrito-principal.html',
  styleUrl: './carrito-principal.css'
})
export class CarritoPrincipal implements OnInit{
  public carritoService = inject(CarritoService);
  listCarrito: CarritoModel[] = [];

    ngOnInit(): void {
      this.getListCarrito();
    }

    getListCarrito(){
      this.listCarrito = this.carritoService.getCarrito();
    }

    eliminarItem(index: number){
      this.carritoService.eliminar(index);
      this.getListCarrito();
    }

    onkeyDown(event: any){
      event.preventDefault();
    }

    actualizar( item: CarritoModel , index: number){
      this.carritoService.actualizar(index , item.cantidad);
    }
}
