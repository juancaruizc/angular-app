import { Component } from '@angular/core';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-overall-health',
  templateUrl: './overall-health.component.html',
  styleUrls: ['./overall-health.component.css'],
})
export class OverallHealthComponent {
  data: any = [];
  constructor(private company: CompaniesService) {
    this.company.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
