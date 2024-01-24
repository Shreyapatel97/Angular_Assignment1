import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  data = [
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.',
      image: '../assets/img/review-1.jpg',
      client: 'Client Name 1',
      profession: 'Profession 1',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.',
      image: '../assets/img/review-2.jpg',
      client: 'Client Name 2',
      profession: 'Profession 2',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.',
      image: '../assets/img/review-3.jpg',
      client: 'Client Name 3',
      profession: 'Profession 3',
    }
  ];

  constructor() {}

  getReviewData() {
    return this.data;
  }
}
