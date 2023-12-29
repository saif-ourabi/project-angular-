import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFormation } from '../../i-formtaion';
import { CrudFormationsService } from 'src/app/shared/crud-formations.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  formationId: string 
  formation: IFormation
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private crudFormationsService: CrudFormationsService
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.formationId = params.get('id');

      if (this.formationId !== null) {
        this.crudFormationsService.getFormationById(this.formationId)
          .subscribe((formation: IFormation) => {
            this.formation = formation;
          });
      }
    });
  }

}
