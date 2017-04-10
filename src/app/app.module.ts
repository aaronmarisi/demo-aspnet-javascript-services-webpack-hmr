import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent, rootElementTagName } from './app.component';
import { MainComponent } from './main.component';
import { OtherComponent } from './other.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',  component: MainComponent },
  { path: 'other', component: OtherComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { rootElementTagName } from './app.component';
