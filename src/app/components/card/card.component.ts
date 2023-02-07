import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { LocalApiService } from 'src/app/services/local-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private localService: LocalApiService) {}
  @Input() item!: User;
  @Input() parent!: string;

  ngOnInit(): void {}

  check(event: any) {
    console.log(event);
    if (event.checked == true)
      this.localService.addToFav(this.item).subscribe((el) => console.log(el));
  }
}
