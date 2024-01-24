import { Component } from '@angular/core';
import { EducationService } from 'src/app/services/education/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationData: any;

  constructor(private educationService: EducationService) {
    this.educationData = this.educationService.getEducationData();
  }
}
