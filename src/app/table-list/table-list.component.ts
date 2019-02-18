import { Component, OnInit } from '@angular/core';
import {DockerServiceService} from "../docker-service.service";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  response : any;

  constructor(private  service: DockerServiceService) { }

  ngOnInit() {
      this.service.getCustomers()
          .subscribe( data => {
              this.response = data;
          });
  }

}
