import { inject, Injectable } from '@angular/core';
import { libro } from '../models/libro.model';
import { producto } from '../models/producto.model';
import { collection, collectionData, deleteDoc, doc, Firestore} from '@angular/fire/firestore';
import { first } from 'rxjs';
import { addDoc, updateDoc } from '@angular/fire/firestore';
import { hamburguesas } from '../models/hamburguesas.model';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  private db: Firestore = inject(Firestore);

  constructor() { }

  //*OBTENER DATOS DE LA COLECCION LIBROS------------------
  getLibros(){
    const librosCollection = collection(this.db, 'libros');
    return collectionData((librosCollection), {idField: 'id'})
    .pipe(first());
  }

  aggregarLibro(libro:libro){
    const librosCollection = collection(this.db, 'libros');
    const librosData = {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anio: libro.anio
    }
    addDoc(librosCollection, librosData);
  }

  modificarLibro(libro: libro) {
    if (!libro.id) {
        console.error("Error: El libro no tiene un ID válido.");
        return;
    }
    const documentRef = doc(this.db, 'libros', libro.id); // 🔹 Se pasa la colección y el ID correcto
    updateDoc(documentRef, {
        titulo: libro.titulo,
        autor: libro.autor,
        editorial: libro.editorial,
        anio: libro.anio
    }).catch(error => console.error("Error al modificar libro:", error));
  }
  
  eliminarLibro(libro: libro) {
    if (!libro.id) {
        console.error("Error: El libro no tiene un ID válido.");
        return;
    }
    const documentRef = doc(this.db, 'libros', libro.id); // 🔹 Se pasa la colección y el ID correcto
    deleteDoc(documentRef)
        .then(() => console.log("Libro eliminado con éxito"))
        .catch(error => console.error("Error al eliminar libro:", error));
      }

      //*FIN DE LOS METODOS PARA LOS LIBROS-------------------------------------------------------------------------

      //*OBTENER DATOS DE LA COLECCION PRODUCTOS-------------------------------------------------
  getProductos(){
    const productosCollection = collection(this.db, 'productos1');
    return collectionData((productosCollection), {idField: 'id'})
    .pipe(first());
  }

  async aggregarProducto(producto:producto){
    const productosCollection = collection(this.db, 'productos1');
    const productosData = {
      Cantidad: producto.Cantidad,
      Descripcion: producto.Descripcion,
      Precio: producto.Precio
    }
    await addDoc(productosCollection, productosData);
  }

  modificarProducto(producto: producto){
    if(!producto.id) {
      console.error("Error: El prducto no tiene un id valido");
      return;
    }
    const documentRef = doc(this.db, 'productos1', producto.id);
    updateDoc(documentRef, {
      Cantidad: producto.Cantidad,
      Descripcion: producto.Descripcion,
      Precio: producto.Precio
    }).catch(error => console.error("Error al modificar el producto", error));
  }

  eliminarProducto(producto: producto){
    if (!producto.id) {
      console.error("Error: El libro no tiene un ID válido.");
      return;
  }
  const documentRef = doc(this.db, 'productos1', producto.id); // 🔹 Se pasa la colección y el ID correcto
  deleteDoc(documentRef)
      .then(() => console.log("Libro eliminado con éxito"))
      .catch(error => console.error("Error al eliminar libro:", error));
  }
  //*FIN METODOS PARA PRODUCTOS -----------------------------------------------------------------
  //*Metodos para el componente de Ejercicio1erParcial
  getHamburguesa(){
    const hamburguesasCollection = collection(this.db, 'hamburguesas');
    return collectionData((hamburguesasCollection), {idField: 'id'})
    .pipe(first());
  }

  async aggregarHamburguesa(hamburguesas: hamburguesas){
    const hamburguesasCollection = collection(this.db, 'hamburguesas');
    const hamburguesaData = {
      nombre: hamburguesas.nombre,
      precio: hamburguesas.precio,
      descripcion: hamburguesas.descripcion
    }
    await addDoc (hamburguesasCollection, hamburguesaData);
  }

  modificarHamburguesa(hamburguesas: hamburguesas){
    if(!hamburguesas.id){
      console.error("Error: EL producto tiene un id invalido");
      return;
    }
    const documentRef = doc(this.db, 'hamburguesas', hamburguesas.id);
    updateDoc(documentRef, {
      nombre: hamburguesas.nombre,
      precio: hamburguesas.precio,
      descripcion: hamburguesas.descripcion
    }).catch(error => console.error("Error al modificar el producto"));
  }
  
  eliminarHamburguesa(hamburguesas: hamburguesas){
    if(!hamburguesas.id){
      console.error("Error: EL producto tiene un id invalido");
      return;
    }
    const documentRef = doc(this.db, 'hamburguesas', hamburguesas.id);
    deleteDoc(documentRef)
    .then(() => console.log("Hamburguesa eliminada correctamente"))
    .catch(error => console.error("Error al eliminar el producto"));
  }
}
