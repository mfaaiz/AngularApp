import { Component, OnInit,ViewChild,OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BackendService} from '../../service/backend.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {

  toggleField: string;
  members: any[];
  dataSource: MatTableDataSource<any>;
  myDocData;
  savedChanges = false;
    error: boolean = false;
    errorMessage: String = "";
    dataLoading: boolean = false;
private querySubscription;
@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['email',  'user','phoneno','date' ,'pass' ];
  constructor(private backendService: BackendService) { }


  ngOnInit() {
  

  this.toggleField = "resMode";
  this.dataSource = new MatTableDataSource(this.members);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.dataLoading = true;
  this.querySubscription = this.backendService.getDoc3('userData')
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
      
      this.dataLoading = true;
       this.querySubscription = this.backendService.getFilterProducts('product',filters)
           .subscribe(members => {
               this.members = members;
               this.dataSource = new MatTableDataSource(members);          
                this.dataSource.paginator = this.paginator;
               this.dataSource.sort = this.sort;
           })};
  
//   getData() {
//      this.dataLoading = true;
//        this.querySubscription = this.backendService.getDoc('cart')
//            .subscribe(members => {
//                this.members = members;
//                this.dataSource = new MatTableDataSource(members);          
//                 this.dataSource.paginator = this.paginator;
//                this.dataSource.sort = this.sort;
//            })};
  
  setData(formData) {
    formData.tags = formData.tags.split(',');
    this.dataLoading = true;
    this.backendService.setNewDoc('product', formData).then((res) => {
        this.savedChanges = true;
        this.dataLoading = false;
    }).catch(error => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
    })}
    updateData(formData) {
    
      this.dataLoading = true;
      this.backendService.updateDocs('cart', formData).then((res) => {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          this.savedChanges = true;
      }).catch(error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
      });
  }
  getDoc(docId) {
    this.dataLoading = true;
    this.querySubscription = this.backendService.getOneDoc('cart', docId)
        .subscribe(res => {
            this.myDocData = res;
            this.toggle('editMode');
            this.dataLoading = false;
        },
            (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            },
            () => { this.error = false; this.dataLoading = false; });
  }
  
                 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  ngOnDestroy() {
  
    if (this.querySubscription) {
        this.querySubscription.unsubscribe();
  }}
}
