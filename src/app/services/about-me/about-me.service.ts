import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  data = [
    { name: 'Design', percentage: 85 },
    { name: 'SEO', percentage: 95 },
    { name: 'Development', percentage: 90 },
    { name: 'Marketing', percentage: 85 }
  ];

  constructor() {}

  getAboutData() {
    return this.data;
  }
}
