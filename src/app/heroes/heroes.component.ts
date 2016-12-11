import { Component } from '@angular/core';
import { Router } from '@angular/router';
// パスを指定しない場合 node_modulesから探してしまう
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  title = 'Hello Angular!;';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    public heroService: HeroService,
    public router: Router) {
    // public: this.heroService = heroService;
    // private でも良いが、AOTを利用する場合はpublicでないとアクセス権限が無いと怒られる。
  }

  // constructor と ngOnInit の違い
  // constructor: JavaScriptで New された時に呼ばれるやつ。
  // コンポーネントの初期化はngOnInitで、コンストラクタはDIだけにする。
  // Angular 2アンチパターン集 - Qiita
  // http://qiita.com/armorik83/items/90b60fae2622f7c1f1a2
  ngOnInit() {
    // 処理が増えたときのためにメソッドに切り出しておきましょう。
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then((heroes) => {
      this.heroes = heroes
    });
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    let hero = this.selectedHero.id
    this.router.navigate(['detail', this.selectedHero.id])

  }
}


// unsubscrive や clear intereval をonDestroyでする