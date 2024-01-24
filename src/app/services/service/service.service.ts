import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  servicesData = [
    {
    icon: 'fa fa-desktop',
    title: 'Web Design',
    description:
    'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
    },
    {
    icon: 'fa fa-laptop',
    title: 'Web Development',
    description:
    'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
    },
    {
    icon: 'fa fa-search',
    title: 'SEO',
    description:
    'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
    },
    {
    icon: 'fa fa-envelope-open-text',
    title: 'Digital Marketing',
    description:
    'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
    }
    ];
  constructor() {


  }

  getServiceData(){return this.servicesData}
}
