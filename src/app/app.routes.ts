import { Routes } from '@angular/router';
import { LibrosComponent } from './pages/libros/libros.component';
import { Ejercicio1erparcialComponent } from './pages/ejercicio1erparcial/ejercicio1erparcial.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path: 'libros', component: LibrosComponent},
    {path: 'ejercicio1', component: Ejercicio1erparcialComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', redirectTo: 'libros'}
];
