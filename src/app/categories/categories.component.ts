import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  category = { id: 0, name: '', description: '' };
  categories = [
    {
      id: 1,
      name: 'Zapateria',
      description: 'Todo lo relacionado con zapatos.',
    },
    { id: 2, name: 'Pesca', description: 'Todo lo relacionado la pesca.' },
    {
      id: 3,
      name: 'Deportes',
      description: 'Todo lo relacionado con los deportes.',
    },
    { id: 4, name: 'Hogar', description: 'Todo lo relacionado con el hogar.' },
    {
      id: 5,
      name: 'Electrónica',
      description: 'Todo lo relacionado con la electrónica.',
    },
  ];

  create() {
    // posId es igual a -1 si no se encuentra
    // posId es igual al ìndice si se encuentra
    const posId = this.categories.findIndex(
      (category) => category.id == this.category.id
    );
    if (posId == -1) {
      alert('Add Id: ' + this.category.id);
      alert('Add Name: ' + this.category.name);
      alert('Add Description: ' + this.category.description);
      // El error que queda vinculado con el último qe se agrega
      const categoryNotBinded = {
        id: this.category.id,
        name: this.category.name,
        description: this.category.description,
      };
      //this.categories.push(this.category); -- Binded
      this.categories.push(categoryNotBinded); // Not Binded
    } else alert('Categoría existente y/o id inválido.');
  }

  // JavaScript Popup Boxes
  // alert, confirm and prompt
  delete(id: number) {
    if (confirm('¿Esta seguro de que desea eliminar la categoría?')) {
      const posId = this.categories.findIndex((category) => category.id == id);
      alert('Eliminar la categoría con el id: ' + id);
      this.categories.splice(posId, 1);
    }
  }
  get(category: { id: number; name: string; description: string }) {
    this.category.id = category.id;
    this.category.name = category.name;
    this.category.description = category.description;
  } // para saber que categoría actualizar
  update() {
    // como actualizo la categoría que seleccione?
    const index = this.categories.findIndex(
      (category) => category.id == this.category.id
    );
    const categoryNotBinded = {
      id: this.category.id,
      name: this.category.name,
      description: this.category.description,
    };
    this.categories[index] = categoryNotBinded;
    alert(this.categories[index].id);
  }
}
