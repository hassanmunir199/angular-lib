import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-library',
  template: `
    
  <h1>Pakistan time</h1>
  <p>
      my-library works!...!
    </p>
  `,
  styles: [
  ]
})
export class MyLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
