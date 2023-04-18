
import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService 
{
    public characters: Character[] = 
    [
        {
            id: uuid(),
            nombre: 'Krilin',
            poder: 1000,
        },
        {
            id: uuid(),
            nombre: 'Goku',
            poder: 9500,
        },
        {
            id: uuid(),
            nombre: 'Vegueta',
            poder: 7500,
        },
    ];

    addCharacter(character: Character): void
    {
        const newCharacter: Character = {id:uuid(), ...character};
        this.characters.push(newCharacter);
    }

    //onDeleteCharacter(index: number)
    //{
      //this.characters.splice(index, 1);
    //}

    deleteCharacterByID(id: string)
    {
        this.characters = this.characters.filter(character => character.id !== id);
    }
    
}