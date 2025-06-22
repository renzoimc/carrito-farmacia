import { RedirectCommand, Routes } from '@angular/router';
import { CatalogoPrincipal } from './catalogo/catalogo-principal/catalogo-principal';
import { CarritoPrincipal } from './carrito/carrito-principal/carrito-principal';

export const routes: Routes = [
    { path:'' , component: CatalogoPrincipal},
    //{ path: '**' , pathMatch: 'full' , redirectTo: ''}
    {path: 'carrito' , component: CarritoPrincipal}
];
