import { Component } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experienceData: any;

  constructor(private experienceService: ExperienceService) {
    this.experienceData = this.experienceService.getExperienceData();
  }
}
