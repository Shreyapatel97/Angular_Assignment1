import { AboutMeService } from './../../services/about-me/about-me.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  aboutData: any;
  constructor(private aboutMeService: AboutMeService) {
    this.aboutData = this.aboutMeService.getAboutData();
  }
}
