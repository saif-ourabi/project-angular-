import { Component, OnInit } from '@angular/core';
import { CrudFormationsService } from 'src/app/shared/crud-formations.service';
import { IFormtaion } from '../i-formtaion';


@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  formations: IFormtaion[] = [];

  constructor(private crudFormationsService: CrudFormationsService) {}

  ngOnInit(): void {
    this.crudFormationsService.getFormations().subscribe(
      (data) => {
        this.formations = data;
      },
      (error) => {
        console.error('Error fetching formations:', error);
      }
    );
  }
}
