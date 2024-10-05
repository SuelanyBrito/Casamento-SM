import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ThanksComponent } from './pages/about/thanks.component';
import { GeneralListComponent } from './pages/general-list/general-list.component';
import { NgOptimizedImage } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ListaCasamentoComponent } from './pages/lista-casamento/lista-casamento.component';
import { graphqlProvider } from 'src/libs';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input"
import { DialogComponent } from './sharepage/dialog/dialog.component';
import {MatCard} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DialogComponent,
    MenuComponent,
    HomeComponent,
    ThanksComponent,
    GeneralListComponent,
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
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTableModule,
        MatSelectModule,
        MatCheckbox,
        MatPaginator,
        MatSort,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatCard,
        MatProgressSpinnerModule
    ],
  providers: [
    graphqlProvider,
    Apollo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
