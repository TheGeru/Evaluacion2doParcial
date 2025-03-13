import { Component } from '@angular/core';
import { hamburguesas } from '../../models/hamburguesas.model';
import { ServicesService } from '../../services/services.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-ejercicio1erparcial',
  imports: [FormsModule],
  templateUrl: './ejercicio1erparcial.component.html',
  styleUrl: './ejercicio1erparcial.component.css'
})
export class Ejercicio1erparcialComponent {
  
  hamburguesas: any;
  hamburguesa = new hamburguesas();

  constructor(private serviceService: ServicesService){
    this.getHamburguesa();
  }

  async getHamburguesa(): Promise<void>{
    this.hamburguesas = await firstValueFrom(this.serviceService.getHamburguesa());
  }

  async insertarHamburguesa(){
    await this.serviceService.aggregarHamburguesa(this.hamburguesa);
    this.getHamburguesa
  }

  selectHamburguesa(hamburguesaSeleccionada: hamburguesas){
    this.hamburguesa = hamburguesaSeleccionada;
  }

  async updateHamburguesa(){
    await this.serviceService.modificarHamburguesa(this.hamburguesa);
    this.hamburguesa = new hamburguesas(); 
    this.getHamburguesa();
  }

  async deleteHamburguesa(){
    await this.serviceService.eliminarHamburguesa(this.hamburguesa);
    this.hamburguesa = new hamburguesas();
    this.getHamburguesa();
  }
}
