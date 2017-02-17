import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'home-view',
	template: `<h3>{{greeting}}</h3>`
})
export class HomeView implements OnInit {
  public greeting: string = '';

  constructor(private http: Http) {}

  ngOnInit() {
    const subs = this.http.get('http://localhost:8000/data').map(res => res.json()).subscribe(data => {
      this.greeting = `${data.greeting} ${data.name}`;
      subs.unsubscribe();
    });
  }
}
