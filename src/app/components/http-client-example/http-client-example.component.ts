import { Component, inject, OnInit } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokesService = inject(JokesService);

  dadJoke: String = '';
  chuckNorrisJoke: String = '';

  ngOnInit(): void {
    this.jokesService.getDadJokes().subscribe((data)=> {
      console.log("DAD JOKE", data)
      console.log("Dad joke", data)
    });

    this.jokesService.getChuckNorrisJokes().subscribe((data)=> {
      console.log("CHUCK NORRIS JOKE", data)
      console.log("Chuck joke ", data)
    });
  }

  refreshDadJoke(){
    this.jokesService.getDadJokes().subscribe((data)=>{
      console.log("Dad Joke", data.joke)
      this.dadJoke = data.joke
    })
  }

  refreshChuckNorrisJoke(){
    this.jokesService.getChuckNorrisJokes().subscribe((data)=>{
      console.log("Chuck Norris Joke", data.value)
      this.chuckNorrisJoke = data.value
    })
  }
}
