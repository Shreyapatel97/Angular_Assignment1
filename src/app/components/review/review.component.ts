import { ReviewService } from './../../services/review/review.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  reviewData: any;
  current: number = 0;

  constructor(private reviewService: ReviewService) {
    this.reviewData = this.reviewService.getReviewData();
  }

  nextReview() {
    if (this.current !== this.reviewData.length - 1) {
      this.current = this.current + 1;
    } else {
      this.current = 0;
    }
  }

  prevReview() {
    if (this.current === 0) {
      this.current = this.reviewData.length - 1;
    } else {
      this.current = this.current - 1;
    }
  }
}
