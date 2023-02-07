import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { RemoteApiService } from 'src/app/services/remote-api.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list: User[] = [];
  loading = true;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  constructor(private remoteService: RemoteApiService) {}

  ngOnInit(): void {
    this.remoteService.getList().subscribe((el: User[]) => {
      console.log(el);

      this.list = el;
      this.loading = false;
    });
  }
}
