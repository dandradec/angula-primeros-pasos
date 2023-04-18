import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent 
{
    public nameHeroes: string[] = ['Spiderman', 'Hulk', 'Superman', 'Ironman', 'Batman'];
    public deleteHeroe?: string;

    deleteLastHeroe(): void
    {
      this.deleteHeroe = this.nameHeroes.pop();
    }
}
