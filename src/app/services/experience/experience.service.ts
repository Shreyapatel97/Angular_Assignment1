import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  data = [
    {
      startDate: '01-Jan-2020',
      endDate: '31-Dec-2050',
      companyName: 'Codex Solution',
      location: 'San Francisco, CA',
      position: 'Project Manager',
      description:
        'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
    },
    {
      startDate: '01-Jan-2020',
      endDate: '31-Dec-2050',
      degree: 'Soft Solution Ltd',
      location: 'San Francisco, CA',
      position: 'Web Developer',
      description:
        'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
    },
    {
      startDate: '01-Jan-2020',
      endDate: '31-Dec-2050',
      degree: 'ABC Soft Ltd',
      location: 'San Francisco, CA',
      position: 'Web Designer',
      description:
        'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
    },
    {
      startDate: '01-Jan-2020',
      endDate: '31-Dec-2050',
      degree: 'Soft Agency',
      location: 'San Francisco, CA',
      position: 'Graphic Designer',
      description:
        'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
    }
  ];

  constructor() {}

  getExperienceData() {
    return this.data;
  }
}
