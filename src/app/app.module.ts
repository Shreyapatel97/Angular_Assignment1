import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ServiceComponent } from './components/service/service.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReviewComponent } from './components/review/review.component';
import { ContantComponent } from './components/contant/contant.component';
import { CommonComponent } from './components/common/common/common.component';
import { ProgressBarDirective } from './directives/progressbar.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    AboutMeComponent,
    EducationComponent,
    ExperienceComponent,
    ServiceComponent,
    PortfolioComponent,
    ReviewComponent,
    ContantComponent,
    CommonComponent,
    ProgressBarDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
