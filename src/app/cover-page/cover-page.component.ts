import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent implements OnInit {
nombre: string;
  constructor() { }

  ngOnInit(): void {
    // this.nombre = 'Juan Antonio Campoy Lira';
    // const app = document.getElementById('app');
    // // 2. Create a new <p></p> element programmatically
    // const p = document.createElement('p');
    // // 3. Add the text content
    // p.textContent = 'Hello, World! ' + this.nombre;
    // // 4. Append the p element to the div element
    // app?.appendChild(p);
  }

}
