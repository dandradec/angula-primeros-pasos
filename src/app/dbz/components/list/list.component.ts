import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  
  @Input()
  public characterList: Character[] =
  [
    {
      nombre: 'Trunks',
      poder: 10
    }
  ];
  
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id?: string): void 
  {
    if (!id) return;
    this.onDelete.emit(id);
  }


}
