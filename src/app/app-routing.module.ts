import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AwardsComponent } from './awards/awards.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "experience",
    component: ExperienceComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "education",
    component: EducationComponent
  },
  {
    path: "skills",
    component: SkillsComponent
  },
  {
    path: "interests",
    component: InterestsComponent
  },
  {
    path: "awards",
    component: AwardsComponent
  },
  {
    path: "contact",
    component: ContactsComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
