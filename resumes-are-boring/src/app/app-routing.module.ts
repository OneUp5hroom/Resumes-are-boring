import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  
  {path: 'resume-component', component: ResumeComponent},
  {path: 'hobbies-component', component: HobbiesComponent},
  {path: 'links-component', component: LinksComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
