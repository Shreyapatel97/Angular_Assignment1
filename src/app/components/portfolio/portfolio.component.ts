import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioData: any;
  filter = ['All', 'Design', 'Development', 'Marketing'];
  current: string = 'All';

  constructor(private portfolioService: PortfolioService) {
    this.portfolioData = this.portfolioService.getPortfolioData();
  }
  ngOnInit() {}

  click(current: string) {
    this.current = current;
    if (current == 'All') {
      this.portfolioData = this.portfolioService.getPortfolioData();
    } else if (current === 'Design') {
      this.portfolioData = this.portfolioService
        .getPortfolioData()
        .filter((res: any) => res.title == 'web-des');
    } else if (current === 'Development') {
      this.portfolioData = this.portfolioService
        .getPortfolioData()
        .filter((res: any) => res.title == 'web-dev');
    } else {
      this.portfolioData = this.portfolioService
        .getPortfolioData()
        .filter((res: any) => res.title == 'dig-mar');
    }
  }
}
