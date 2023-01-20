import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';

// rotas que direcionam às páginas específicas
const routes: Routes = [
  // página home
  {
    path: '',
    component: HomeComponent
  },
  // página content
  // foi criado uma pasta 'data' com os dados que irão receber um id
  {
    path: 'content/:id',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
