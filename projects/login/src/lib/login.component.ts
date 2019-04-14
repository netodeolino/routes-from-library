import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-login',
  template: `
    <p>
      Login in Routes From Library works!
    </p>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
