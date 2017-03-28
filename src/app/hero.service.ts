// This defines our hero.service used in components
import { Injectable } from '@angular/core';
// imports hero class definition
import { Hero } from './hero';
// imports const array of hero objects from mock heroes
import { HEROES } from './mock-heroes';

// What actually exports the hero service
@Injectable()

// Get HEROES array of hero objects and handles asyncricity through promise of array of hero objects.  The array gets returned after the promise is resolved.
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  // Used for hero detail.  Finds one hero object by ID
  getHero(id: number): Promise<Hero> {
   return this.getHeroes()
              .then(heroes => heroes.find(hero => hero.id === id));
 }
}
