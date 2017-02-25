import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
	selector: 'home-view',
	template: `<h3>{{subs | async}}</h3>`
})
export class HomeView implements OnInit {
  public subs: Observable<string>;

  constructor(private http: Http) {}

  ngOnInit() {
    this.subs = this.http.get('http://localhost:8000/data').map(res => res.json()).map(data => {
      return `${data.greeting} ${data.name}`;
    });
  }
}
