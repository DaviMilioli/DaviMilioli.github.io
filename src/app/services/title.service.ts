import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.updateTitlePage();
  }

  private updateTitlePage(){
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd), map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }

        return route.snapshot.data['title'] ? `Davi Milioli - ${route.snapshot.data['title']}` : 'Davi Milioli - Portfólio';
      })
    ).subscribe(title => this.title.setTitle(title));
  }
}
