import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Kostas',
    surName: 'Panagiwtou',
    age: 32,
    email: 'PanKws@gmail.com',
    address: 'Athens, Greece'
  }

  person1: Person = {
    givenName: 'Voula',
    surName: 'Tsirwnh',
    age: 22,
    email: 'VTsir@aueb.gr',
    address: 'Paris, France'
  }
}
