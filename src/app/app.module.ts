import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DBZModule } from './dbz/dbz.modules';

import { AppComponent } from './app.component';
import { DbzComponent } from './dbz/dbz.component';
import { AddCharacterComponent } from './dbz/components/add-character/add-character.component';


@NgModule({
  declarations: [
    AppComponent,
    DbzComponent,        
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DBZModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
