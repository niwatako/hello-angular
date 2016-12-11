import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = []


  constructor(
    public router: Router,
    public heroService: HeroService) {

     }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes() {
    this.heroService.getHeroes()
    .then( heroes => this.heroes = heroes.slice(0, 4))
  }

  gotoDetail(hero: Hero) {
    let link = ['detail', hero.id]
    this.router.navigate(link)
  }

}
