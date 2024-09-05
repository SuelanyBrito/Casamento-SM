import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GeneralListComponent } from './pages/general-list/general-list.component';
import { NgOptimizedImage } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ListaCasamentoComponent } from './pages/lista-casamento/lista-casamento.component';
import { graphqlProvider } from 'src/libs';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    GeneralListComponent,
    FooterComponent,
    ImageGalleryComponent,
    ListaCasamentoComponent
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    ApolloModule,
  ],
  providers: [
    graphqlProvider,
    Apollo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
