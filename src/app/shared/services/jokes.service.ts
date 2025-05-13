import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const DAD_JOKES_API_URL = "https://icanhazdadjoke.com/";
const CHUCK_NORRIS_JOKES_API_URL = "https://api.chucknorris.io/jokes/random";
import { DadJoke, ChuckNorrisJoke } from '../interfaces/jokes';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  Http: HttpClient = inject(HttpClient);
  // constructor() { }
  getDadJokes() {
    return this.Http.get<DadJoke>(DAD_JOKES_API_URL, {
      headers: {
        Accept: "application/json"
      }
    })
  }

  getChuckNorrisJokes() {
    return this.Http.get<ChuckNorrisJoke>(CHUCK_NORRIS_JOKES_API_URL, {
      headers: {
        Accept: "application/json"
        }
      })
    }
  }
