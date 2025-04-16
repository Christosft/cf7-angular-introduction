import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
    name = "Kostas";

    person = {
      givenName: "Kostas",
      surname: "Ftoulis",
      age: "48",
      email: "kostaft@gmail.com"
    }
}
