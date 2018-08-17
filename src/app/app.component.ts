import { Component, OnInit } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

interface Pokemon {
  name: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit {
  title = 'pokemon';
  private pokemons: any [] = [];
  API_URL  =  'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get<Pokemon>(this.API_URL).subscribe(data => {
      console.log(data);
      this.pokemons = data['results'].map(data => data.name);  
    });
  }
}
