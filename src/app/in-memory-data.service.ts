import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Blade dancer' },
      { id: 12, name: 'Destroyer' },
      { id: 13, name: 'Mage' },
      { id: 14, name: 'Assassin' },
      { id: 15, name: 'Summoner' },
      { id: 16, name: 'Sword master' },
      { id: 17, name: 'Kungfu master' },
      { id: 18, name: 'Gunslinger' },
      { id: 19, name: 'Warlock' },
      { id: 20, name: 'Soul fighter' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}