import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/app/interfaces/developer';
import { DeveloperService } from 'src/app/services/developer.service';

@Component({
  selector: 'developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.sass'],
})
export class DeveloperComponent implements OnInit {
  developers: Array<Developer> = [];
  constructor(public developerService: DeveloperService) {}

  ngOnInit(): void {
    this.getDevelopers();
  }
  getDevelopers() {
    this.developerService.getDevelopers().subscribe((data) => {
      this.developers = data as Array<Developer>;
    });
  }
}
