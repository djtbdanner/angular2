import { Component, OnInit} from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail-component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="let heroLi of heroes" 
          [class.selected]="heroLi === selectedHero"
          (click)="onSelect(heroLi)">
            <span class="badge">{{heroLi.id}}</span> {{heroLi.name}}
        </li>
    </ul>
    
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    
    `,
    providers: [HeroService]


})

export class AppComponent  implements OnInit  {

    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService) { }

//   getHeroes(): void {
 //    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
 //  }

   getHeroes(): void {
     this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
   }

     ngOnInit(): void {
        this.getHeroes();
     }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
 
}
