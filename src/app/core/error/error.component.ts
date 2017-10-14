import {Component, OnInit} from '@angular/core';
import {ErrorService} from '../../shared/services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorCounter;

  constructor(private errorService: ErrorService) {
  }

  ngOnInit() {
    this.errorCounter = this.errorService.getErrorCounter();
  }

}
