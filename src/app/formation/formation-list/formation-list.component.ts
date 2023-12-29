import { Component, OnInit } from '@angular/core';
import { CrudFormationsService } from 'src/app/shared/crud-formations.service';
import { IFormation } from '../i-formtaion';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  formations: IFormation[] = [];
  filteredFormations: IFormation[] = [];
  searchTerm: string = '';

  constructor(private crudFormationsService: CrudFormationsService) {}

  ngOnInit(): void {
    this.crudFormationsService.getFormations().subscribe(
      (data) => {
        this.formations = data;
        this.filteredFormations = [...this.formations]; // Initialize filteredFormations with all formations
      },
      (error) => {
        console.error('Error fetching formations:', error);
      }
    );
  }

  search() {
    const searchTermLowerCase = this.searchTerm.toLowerCase();
  
    if (!searchTermLowerCase.trim()) {
      this.filteredFormations = [...this.formations];
    } else {
      this.filteredFormations = this.formations.filter(form => {
        return form.tags.some((tag: string) => tag.toLowerCase() === searchTermLowerCase);
      });
    }
  }
  
}
