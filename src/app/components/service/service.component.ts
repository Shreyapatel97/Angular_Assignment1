import { ServiceService } from './../../services/service/service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  serviceData: any;
  constructor(private serviceService: ServiceService) {
    this.serviceData = this.serviceService.getServiceData();
  }
}
