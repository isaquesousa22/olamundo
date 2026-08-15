import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
nome:string = "isaque";
contador:number = 0;

aumentar(){
  this.contador++;
}

diminuir(){
  this.contador--;
}




}
