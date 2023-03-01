import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-choose-client',
  templateUrl: './choose-client.component.html',
  styleUrls: ['./choose-client.component.css']
})
export class ChooseClientComponent implements OnInit {

  constructor(public crud:CrudService) { }

  ngOnInit(): void {
  }

}
