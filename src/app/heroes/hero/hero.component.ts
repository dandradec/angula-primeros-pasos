import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent 
{
  public nombre:string = 'ironman';
  public edad:number = 46;

  get capitalzerName(): string
  {
    return this.nombre.toLocaleUpperCase();
  }

  getDescripcionHeroe(): string
  {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void
  {
    this.nombre = 'spiderman';    
  }

  cambiarEdad(): void
  {    
    this.edad = 32;
  }

  reset(): void
  {
    this.nombre = 'Ironman';
    this.edad = 46;
  }
}
