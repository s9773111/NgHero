import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  // 補0
  // heroes = HEROES.map(function(hero) {
  //   const paddedId = hero.id < 10 ? '0' + hero.id : hero.id;
  //   return Object.assign({},hero, {id: paddedId});
  // });
  // selectedHero?: Hero;
  heroes: Hero[] = [];
  onSelect(hero:Hero):void{
    //this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  hero: Hero = {
    id:1,
    name:'Windstorm'
  };

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
