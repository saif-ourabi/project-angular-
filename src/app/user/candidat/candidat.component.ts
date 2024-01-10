import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Iuser } from 'src/app/shared/iuser';
import { LoginService } from 'src/app/shared/login.service';
import { CrudFormationsService } from 'src/app/shared/crud-formations.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  userId: string;
  user: Iuser;

  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private loginService: LoginService) {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.loadUserDetails();
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  private loadUserDetails(): void {
    this.loginService.getuserbyid(this.userId).subscribe(
      (user) => {
        this.user = user;
        console.log('User details:', this.user);
      },
      (error) => {
        console.error('Error loading user details:', error);
      }
    );
  }
}
