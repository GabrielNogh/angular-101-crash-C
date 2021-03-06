import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideComponent } from './components/side/side.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
