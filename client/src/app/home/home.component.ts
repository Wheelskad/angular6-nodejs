import { Component, OnInit } from '@angular/core';
import { LuisService } from '../providers/luis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  strValue = '';
  title = 'Angular6';

  constructor(private luisService: LuisService) { }

  ngOnInit() {
    this.luisService.getLogs().subscribe(res => {
      console.log(res);
      const luisData: any = res;
      this.strValue = luisData.value;
    }, err => {
      console.log(err);
    });
  }
}
