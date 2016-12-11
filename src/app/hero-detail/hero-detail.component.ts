import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',//HTMLの新しいタグやng-なんとかとバッティングしないように、xxx-形式のプリフィクスを付ける
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    public heroService: HeroService,
    public route: ActivatedRoute) {
    }

  // 基本的に初期化処理はこちらに書いて、constructor は利用しないらしい。
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero)
    })
  }

  goBack() {    
    window.history.back();
  }
}
