import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SectionOneComponent } from './components/main/section-one/section-one.component';
import { SectionTwoComponent } from './components/main/section-two/section-two.component';
import { SectionLongNameComponent } from './components/main/section-long-name/section-long-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionLongNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
