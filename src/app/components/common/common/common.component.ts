import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent {
  @Input() commonData: any;
  isExperience: boolean = false;

  ngOnInit() {
    this.isExperience = this.commonData[0].companyName !== undefined;
  }
}
