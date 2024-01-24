import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  data = [
    {
      title: 'web-des',
      image: '../assets/img/portfolio-1.jpg',
      image2: '../assets/img/portfolio-1.jpg',
      name: 'Project Name',
      division: 'Web Design',
    },
    {
      title: 'web-des',
      image: '../assets/img/portfolio-2.jpg',
      image2: '../assets/img/portfolio-2.jpg',
      name: 'Project Name',
      division: 'Web Design',
    },
    {
      title: 'web-dev',
      image: '../assets/img/portfolio-3.jpg',
      image2: '../assets/img/portfolio-3.jpg',
      name: 'Project Name',
      division: 'Web Development',
    },
    {
      title: 'web-dev',
      image: '../assets/img/portfolio-4.jpg',
      image2: '../assets/img/portfolio-4.jpg',
      name: 'Project Name',
      division: 'Web Development',
    },
    {
      title: 'dig-mar',
      image: '../assets/img/portfolio-5.jpg',
      image2: '../assets/img/portfolio-5.jpg',
      name: 'Project Name',
      division: 'Digital Marketing',
    },
    {
      title: 'dig-mar',
      image: '../assets/img/portfolio-6.jpg',
      image2: '../assets/img/portfolio-6.jpg',
      name: 'Project Name',
      division: 'Digital Marketing',
    }
  ];

  constructor() {}

  getPortfolioData() {
    return this.data;
  }
}
