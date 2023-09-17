import { Component, OnInit } from '@angular/core';
import { DiptrishService } from 'src/app/services/diptrish.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  nameField: string | undefined;
  emailField: string | undefined;
  messageField: string | undefined;

  ngOnInit(): void {
    //this.showSuccess();
  }

  constructor(private api: DiptrishService) { }
  deleteRawMaterial() {
    const postData = {
      "name": this.nameField,
      "email": this.emailField,
      "text": this.messageField
    };

    console.log(postData);
    
    //this.loader = true;
    this.api.sendMail(postData).subscribe((data: any) => {
      //this.loader = false;
      if (data.status == 0) {
        Swal.fire({
          icon: 'warning',
          title: '<div class="swltitle">' + data.message + '</div>',
          showConfirmButton: true,
          allowEnterKey: false,
          allowOutsideClick: false
        })
        return
      }
      if (data.status == 1) {
        Swal.fire({
          icon: 'success',
          title: '<div class="swltitle">' + data.message + '</div>',
          showConfirmButton: true,
          allowEnterKey: false,
          allowOutsideClick: false
        }).then(e => {
          
        })
      }
    }, e => {
      console.log('error', e);
      //this.loader = false;

    });
  }

  // showSuccess() {
  //   Swal.fire(
  //     'Good job!',
  //     'You clicked the button!',
  //     'success'
  //   )
  // }
}
