import { AddAuthorComponent } from './Components/add-author/add-author.component';
import { ShowAuthorsComponent } from './Components/show-authors/show-authors.component';
import { ShowBooksComponent } from './Components/show-books/show-books.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AddBookComponent } from './Components/add-book/add-book.component';

const routes: Routes = [
  { path: '', component: HomeComponent , children:[
    {path:'',component:ShowBooksComponent},
    {path:'books',component:ShowBooksComponent},
    {path:'authors',component:ShowAuthorsComponent},
    {path:'addAuthor',component:AddAuthorComponent}, 
    {path:'addBook',component:AddBookComponent}, 


  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
