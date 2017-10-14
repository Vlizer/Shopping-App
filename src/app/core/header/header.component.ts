import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../shared/services/database.service';
import {AuthService} from '../../auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private databaseService: DatabaseService, public authService: AuthService) {
  }

  ngOnInit() {
  }

  onSaveData() {
    this.databaseService.saveRecipes();
  }

  onFetchData() {
    this.databaseService.fetchRecipes();
  }
}
