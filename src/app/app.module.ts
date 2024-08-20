import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { MadrinhaComponent } from './pages/madrinha/madrinha.component';
import { PadrinhoComponent } from './pages/padrinho/padrinho.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgOptimizedImage } from '@angular/common';
import { OptImageMadrinhasComponent } from './pages/opt-image-madrinhas/opt-image-madrinhas.component';
import { OptImagePadrinhosComponent } from './pages/opt-image-padrinhos/opt-image-padrinhos.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ListaCasamentoComponent } from './pages/lista-casamento/lista-casamento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    MadrinhaComponent,
    PadrinhoComponent,
    ImageGalleryComponent,
    ListaCasamentoComponent
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    AppRoutingModule,
    NgOptimizedImage,
    OptImageMadrinhasComponent,
    OptImagePadrinhosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
