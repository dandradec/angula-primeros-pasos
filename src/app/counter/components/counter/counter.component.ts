import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>La base es: <span>{{counter}}</span></h3>
    <button (click)="incrementBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="incrementBy(-1)">-1</button>
    `    
})

export class CounterComponent 
{
    constructor() { }
    counter: number = 10;
    incrementBy(valor:number): void
    {
        this.counter += valor;
    }

    resetCounter(): void
    {
        this.counter = 10;
    }
}