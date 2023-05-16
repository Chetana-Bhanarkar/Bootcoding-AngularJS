import { Component, OnInit , OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit , OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  allUsers : any = [];
  constructor(private service : UsersService){}

  ngOnInit(): void {
   this.dtOptions={
    pagingType: 'full_numbers',
    pageLength: 5,
    processing: true
   };
    this.users();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  users(){
    this.service
        .users()
        .subscribe((response: any) => {
          this.allUsers = response;
          console.log(this.allUsers);
          this.dtTrigger.next(null);
        });
  }
}



