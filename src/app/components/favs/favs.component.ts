import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { LocalApiService } from 'src/app/services/local-api.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss'],
})
export class FavsComponent implements OnInit {
  constructor(private localService: LocalApiService) {}
  favsList: User[] = [];
  loading = true;
  ngOnInit(): void {
    this.getFavs();
  }
  getFavs() {
    this.localService.getFavs().subscribe((el) => {
      this.favsList = el;

      this.loading = false;
    });
  }
}
