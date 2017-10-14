import {Component, OnInit} from '@angular/core';
import {ProfilesService} from '../shared/services/profiles.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  serverList;
  constructor(private profilesService: ProfilesService) { }

  ngOnInit() {
    this.serverList = this.profilesService.getServerList();
    // this.serverList = Observable.of(true)
    //   .flatMap((shouldPresentNumbers) => Observable.of(shouldPresentNumbers ? [1, 2, 3, 4, 5] : []));
  }

  onSubmit(form: NgForm) {
    this.profilesService.pushProfile(form.value);
  }

}
