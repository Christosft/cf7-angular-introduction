import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      "givenName": "Jacqueline",
      "surName": "Kemery",
      "age": 60,
      "email": "jkemery0@sbwire.com",
      "address": "Suite 71"
    }, {
      "givenName": "Margarette",
      "surName": "Croydon",
      "age": 60,
      "email": "mcroydon1@bbc.co.uk",
      "address": "Suite 43"
    }, {
      "givenName": "Joannes",
      "surName": "Lumsdale",
      "age": 84,
      "email": "jlumsdale2@wp.com",
      "address": "11th Floor"
    }, {
      "givenName": "Missie",
      "surName": "Dicke",
      "age": 31,
      "email": "mdicke3@cloudflare.com",
      "address": "Apt 33"
    }, {
      "givenName": "Juliet",
      "surName": "Rumin",
      "age": 5,
      "email": "jrumin4@wikimedia.org",
      "address": "PO Box 31739"
    }, {
      "givenName": "Nessy",
      "surName": "Molloy",
      "age": 51,
      "email": "nmolloy5@guardian.co.uk",
      "address": "6th Floor"
    }, {
      "givenName": "Lowrance",
      "surName": "Kelberer",
      "age": 99,
      "email": "lkelberer6@google.de",
      "address": "17th Floor"
    }, {
      "givenName": "Clotilda",
      "surName": "Croneen",
      "age": 10,
      "email": "ccroneen7@flavors.me",
      "address": "6th Floor"
    }, {
      "givenName": "Dan",
      "surName": "Benzies",
      "age": 52,
      "email": "dbenzies8@va.gov",
      "address": "Room 1357"
    }, {
      "givenName": "Kala",
      "surName": "Speers",
      "age": 98,
      "email": "kspeers9@prnewswire.com",
      "address": "Apt 839"
    }, {
      "givenName": "Morgen",
      "surName": "Nijs",
      "age": 62,
      "email": "mnijsa@wikimedia.org",
      "address": "Room 1986"
    }, {
      "givenName": "Arni",
      "surName": "Vaisey",
      "age": 1,
      "email": "avaiseyb@prlog.org",
      "address": "Apt 152"
    }, {
      "givenName": "Guinevere",
      "surName": "Thackray",
      "age": 79,
      "email": "gthackrayc@sfgate.com",
      "address": "Suite 43"
    }, {
      "givenName": "Spike",
      "surName": "Chart",
      "age": 72,
      "email": "schartd@example.com",
      "address": "Room 1265"
    }, {
      "givenName": "Kurt",
      "surName": "Ody",
      "age": 45,
      "email": "kodye@omniture.com",
      "address": "Apt 1813"
    }, {
      "givenName": "Winonah",
      "surName": "Taynton",
      "age": 9,
      "email": "wtayntonf@springer.com",
      "address": "Apt 1567"
    }
  ]
}
