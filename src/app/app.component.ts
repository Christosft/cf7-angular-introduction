import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { PersonTableComponent } from './components/person-table/person-table.component';
// import { Person } from './shared/interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  name = "Christos";

  // Step 1: One way binding of data
  // person = {
  //   giveName: "Christos",
  //   surname: "Ftoulis",
  //   age: "45",
  //   email: "chrisosftoulis@gmail.com"
  // }

  // // Step 3: Component Input
  // person0: Person = {
  //   givenName: "Stamatios",
  //   surname: "Ftoulis",
  //   age: 78,
  //   email: "stamatis@gmail.com",
  //   address: "Athens, Greece"
  // }

  // person1: Person = {
  //   givenName: "Voula",
  //   surname: "Ftouli",
  //   age: 72,
  //   email: "voula@gmail.com",
  //   address: "New York, USA"
  // }

  // users: Person[] = [
  //   {
  //     "givenName": "Jacqueline",
  //     "surname": "Kemery",
  //     "age": 60,
  //     "email": "jkemery0@sbwire.com",
  //     "address": "Suite 71"
  //   }, {
  //     "givenName": "Margarette",
  //     "surname": "Croydon",
  //     "age": 60,
  //     "email": "mcroydon1@bbc.co.uk",
  //     "address": "Suite 43"
  //   }, {
  //     "givenName": "Joannes",
  //     "surname": "Lumsdale",
  //     "age": 84,
  //     "email": "jlumsdale2@wp.com",
  //     "address": "11th Floor"
  //   }, {
  //     "givenName": "Missie",
  //     "surname": "Dicke",
  //     "age": 31,
  //     "email": "mdicke3@cloudflare.com",
  //     "address": "Apt 33"
  //   }, {
  //     "givenName": "Juliet",
  //     "surname": "Rumin",
  //     "age": 5,
  //     "email": "jrumin4@wikimedia.org",
  //     "address": "PO Box 31739"
  //   }, {
  //     "givenName": "Nessy",
  //     "surname": "Molloy",
  //     "age": 51,
  //     "email": "nmolloy5@guardian.co.uk",
  //     "address": "6th Floor"
  //   }, {
  //     "givenName": "Lowrance",
  //     "surname": "Kelberer",
  //     "age": 99,
  //     "email": "lkelberer6@google.de",
  //     "address": "17th Floor"
  //   }, {
  //     "givenName": "Clotilda",
  //     "surname": "Croneen",
  //     "age": 10,
  //     "email": "ccroneen7@flavors.me",
  //     "address": "6th Floor"
  //   }, {
  //     "givenName": "Dan",
  //     "surname": "Benzies",
  //     "age": 52,
  //     "email": "dbenzies8@va.gov",
  //     "address": "Room 1357"
  //   }, {
  //     "givenName": "Kala",
  //     "surname": "Speers",
  //     "age": 98,
  //     "email": "kspeers9@prnewswire.com",
  //     "address": "Apt 839"
  //   }, {
  //     "givenName": "Morgen",
  //     "surname": "Nijs",
  //     "age": 62,
  //     "email": "mnijsa@wikimedia.org",
  //     "address": "Room 1986"
  //   }, {
  //     "givenName": "Arni",
  //     "surname": "Vaisey",
  //     "age": 1,
  //     "email": "avaiseyb@prlog.org",
  //     "address": "Apt 152"
  //   }, {
  //     "givenName": "Guinevere",
  //     "surname": "Thackray",
  //     "age": 79,
  //     "email": "gthackrayc@sfgate.com",
  //     "address": "Suite 43"
  //   }, {
  //     "givenName": "Spike",
  //     "surname": "Chart",
  //     "age": 72,
  //     "email": "schartd@example.com",
  //     "address": "Room 1265"
  //   }, {
  //     "givenName": "Kurt",
  //     "surname": "Ody",
  //     "age": 45,
  //     "email": "kodye@omniture.com",
  //     "address": "Apt 1813"
  //   }, {
  //     "givenName": "Winonah",
  //     "surname": "Taynton",
  //     "age": 9,
  //     "email": "wtayntonf@springer.com",
  //     "address": "Apt 1567"
  //   }
  // ]

}
