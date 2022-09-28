import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokeService } from 'src/app/service/poke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData

  constructor(
    private service: PokeService // <-- injeção ou criação de instância ocorre aqui
  ) {
    this.pokemon = { 
      id:0, name:'',
      sprites:{
        front_default:''
      }, types:[]
    }

   }

  ngOnInit() {
    this.getPokemon('pikachu')
  }
    
  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }

        },
        error: (err) => console.log('not found')
      }
    )
  }

}
