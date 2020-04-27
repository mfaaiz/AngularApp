import { Component, OnInit, Input ,ViewChild} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {  AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import {BackendService} from '../../service/backend.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-addacart',
  templateUrl: './addacart.component.html',
  styleUrls: ['./addacart.component.css']
})
export class AddacartComponent implements OnInit {

  
  toggleField: string;
  members: any[];
  dataSource: MatTableDataSource<any>;
  myDocData;
  savedChanges = false;
    error: boolean = false;
    errorMessage: String = "";
    dataLoading: boolean = false;
    private querySubscription;
    displayedColumns = [ 'name','email','qty','price', '_id'];
    // users: User[]= [];
    @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
    constructor(private backendService: BackendService,private afs: AngularFirestore) { }
    ngOnInit() {
      this.toggleField = "resMode";
      this.dataSource = new MatTableDataSource(this.members);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataLoading = true;
      this.querySubscription = this.backendService.getFilterProducts1('cart')
          .subscribe(members => {
              this.members = members;
              this.dataSource = new MatTableDataSource(members);          
               this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
             
            })};
       
toggle(filter?) {
  this.dataLoading = false;
  if (!filter) { filter = "resMode" }
  else { filter = filter; }
  this.toggleField = filter;
}
getFilterData(filters){
  {
  

   
    this.dataLoading = true;
    this.querySubscription = this.backendService.getFilterProducts('product',filters)
        .subscribe(members => {
            this.members = members;
            this.dataSource = new MatTableDataSource(members);          
             this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        })};
  }

getData() {
  this.dataLoading = true;
    this.querySubscription = this.backendService.getFilterProducts1('cart')
        .subscribe(members => {
            this.members = members;
            this.dataSource = new MatTableDataSource(members);          
             this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        })};

      }
// interface User{
//   authorEmail:string;
//   name:string;
//   features:string;
//}