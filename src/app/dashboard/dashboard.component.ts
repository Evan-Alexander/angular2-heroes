import { Component, OnInit } from '@angular/core';

import { Hero } from './../hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  // creates empty array of type Hero
  heroes: Hero[] = [];

  // defines heroService which is used in component init to get array of hero objects.
  constructor(private heroService: HeroService) { }

  // gets all the hero object and then makes this.heroes = the first five
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
