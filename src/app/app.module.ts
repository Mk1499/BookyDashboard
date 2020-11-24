import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ShowBooksComponent } from './Components/show-books/show-books.component';
import { BookCardComponent } from './Components/book-card/book-card.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ShowAuthorsComponent } from './Components/show-authors/show-authors.component';
import { AuthorCardComponent } from './Components/author-card/author-card.component';
import { HomeComponent } from './Pages/home/home.component';
import { AddAuthorComponent } from './Components/add-author/add-author.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ShowBooksComponent,
    BookCardComponent,
    ShowAuthorsComponent,
    AuthorCardComponent,
    HomeComponent,
    AddAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
