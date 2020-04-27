import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable({
    providedIn: 'root'
})
export class BackendService {
    private _eStoreColl: string = "estore";
    private itemCollection:AngularFirestoreCollection<any>;
    private itemDoc:AngularFirestoreDocument<any>;
    item :Observable<any>;
    constructor( public afAuth: AngularFireAuth, private afs: AngularFirestore){
        }   
get timestamp() {
            var d = new Date();
            return d;
            //return firebase.firestore.FieldValue.serverTimestamp();
    }
    getCollectionURL(filter){
return "onlinestore/uzair/"+filter;
}
getFilterProducts(coll: string, filters) {
    return this.afs.collection(this.getCollectionURL(coll), ref =>
    ref.where('delete_flag', '==', 'N')
        .where('tags' , 'array-contains', filters)
        .orderBy('tags', 'desc')
)
    .snapshotChanges().map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        });
    });
}
getFilterProducts1(coll: string) {
    return this.afs.collection(this.getCollectionURL(coll), ref =>
    ref.where('email', '==', this.afAuth.auth.currentUser.email)
        
)
    .snapshotChanges().map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        });
    });
}

isUserLoggedIn (): Observable<boolean> {
    return Observable.from(this.afAuth.authState)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
    
      return authenticated; 
      })
}
isUserAdmin()
{
    let collUrl= !this.isUserLoggedIn ? "abcd" :this.afAuth.auth.currentUser.uid;
collUrl= "onlinestore/uzair/admins"+ collUrl;
return this.getDoc1(collUrl);}
 getDoc1(collUrl: string) {
     this.itemDoc=this.afs.doc<any>(collUrl);
    return this.itemDoc.valueChanges();
 }
setNewDoc(coll: string, data: any, docId?: any) {
    const id = this.afs.createId();
    const item = { id, name };
    const timestamp = this.timestamp
    var docRef = this.afs.collection(this.getCollectionURL(coll)).doc(item.id);
    return docRef.set({
        ...data,
        _id: id,
        updatedAt: timestamp,
        createdAt: timestamp,
        delete_flag: "N",
        username: this.afAuth.auth.currentUser.displayName,
        useremail: this.afAuth.auth.currentUser.email
    });
}
    
getDoc(coll: string, filter?:any) {
    this.itemCollection= this.afs.collection<any>(this.getCollectionURL(coll));
    return this.itemCollection.valueChanges();
}
getDoc3(coll: string, filter?:any) {
    this.itemCollection= this.afs.collection<any>((coll));
    return this.itemCollection.valueChanges();
}
getOneDoc(collType,docId){
    let docUrl=this.getCollectionURL(collType) + "/" + docId;
    this.itemDoc=this.afs.doc<any>(docUrl);
    return this.itemDoc.valueChanges();

}
updateDocs(coll: string, data: any, docId?: any) {
    const id = this.afs.createId();
    alert(id);
    const item = { id, name };
    const timestamp = this.timestamp
    var docRef = this.afs.collection(this.getCollectionURL(coll)).doc(data._id);
    return docRef.update({
        ...data,
        _id: id,
        updatedAt: timestamp,
        
       
        username: this.afAuth.auth.currentUser.displayName,
        useremail: this.afAuth.auth.currentUser.email
    });
}
updateDocs1(coll: string, data: any, docId?: any) {
    const id = this.afs.createId();
    alert(id);
    const item = { id, name };
    const timestamp = this.timestamp
    var docRef = this.afs.collection(this.getCollectionURL(coll)).doc(data._id);
    return docRef.update({
        
    

        
       
        
        useremail: this.afAuth.auth.currentUser.email
    });
}
updateShoppingCart(coll: string, data){
    const id = this.afs.createId();
    const item = { id, name };
    const timestamp = this.timestamp
    var docRef = this.afs.collection(this.getCollectionURL(coll)).doc(item.id);
    return docRef.set({
        ...data,
        id: this.afAuth.auth.currentUser.uid,
        user: this.afAuth.auth.currentUser.displayName,
        email: this.afAuth.auth.currentUser.email,

        authorPhone: this.afAuth.auth.currentUser.phoneNumber,
        updatedAt: timestamp,
        createdAt: timestamp,
        delete_flag: "N",
    });
}

setProductPic(filePath, coll, docId?){
    
var docRef = this.afs.collection(this.getCollectionURL(coll)).doc(docId);
    return docRef.set({
        path: filePath
    },{merge: true});
}
deleteProductPic(coll, docId?){
    
    var docRef = this.afs.collection(this.getCollectionURL(coll)).doc(docId);
    return docRef.set({
        path: null
    },{merge: true});
}
}