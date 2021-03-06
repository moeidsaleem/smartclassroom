import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  notification
  selectedUser
  users
  notifications;
  selectedNotification;


  constructor(private api:ApiService) { }

  ngOnInit() {
    this.notification={
      message:'',
      priority:'',
      date:'',
    }
    // this.api.getAllNotifications().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data()
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   })
    // }).subscribe(data=>{ this.notifications = data;console.log(this.notifications)})
    // this.api.getAssigments('asda').map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data()
    //     const id = a.payload.doc.id;
    //     const type = 'doctor';
    //     return { id,type, ...data };
    //   })
    // }).subscribe(doctors=>{
    //   this.api.getWorkers().map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data()
    //       const id = a.payload.doc.id;
    //       const type = 'worker';
    //       return { id,type, ...data };
    //     })
    //   }).subscribe(workers=>{
    //     let u= doctors;
    //     this.users= u.concat(workers);
    //     console.log(this.users);
    //   })

    // });
    this.users =0;

  }


  setStatus(status,notif){
    notif.status = status;
    // this.api.updateNotification(notif.id, notif).then(r=>{
    //   console.log('status Updated');
    // })
  }

  onChange(e){
    let obj=JSON.parse(e)
    this.selectedUser = { userName:obj.name, userId:obj.id,userType:obj.type }
    console.log(this.selectedUser);
  }



  send(){
    console.log('generating notification');
    console.log(this.notification);
   if(this.selectedUser && this.notification.type == 'specific'){
    this.notification.userName = this.selectedUser.userName;
    this.notification.userId = this.selectedUser.userId;
    this.notification.userType = this.selectedUser.userType;
   }
   this.notification.status = 'sent'; /* or it can be 'read' */
   $('#exampleModal').modal('hide')

    // this.api.generateNotification(this.notification).then(resp=>{
    //   console.log('notification Generated');

      
    // });
  
  }
  deleteNotification(notificationId){
    $('#deleteModal').modal('hide');
    //now removing the vaccine
    // this.api.deleteNotification(notificationId).then(res=>{
    //   this.selectedNotification ={};
    //   console.log(`notification deleted.`)
    // }, err=>{})
  }

}