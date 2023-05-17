import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TlvService } from '../services/tlv.service';
import Swal from 'sweetalert2';
import { EmailRes } from '../models/email.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  email = new FormControl('',
    Validators.compose([
      Validators.required,
      Validators.email
    ]))


  constructor(private fb: FormBuilder,
    private tlvService: TlvService) { }


  ngOnInit(): void {
  }

  sendEmail() {
    var email = this.email.value || '';
    this.tlvService.sendEmail(email).
      subscribe((res: EmailRes) => {

        Swal.fire('', 'Success connect to API ' + res.time, 'success');


      },
        (err) => {
          console.log(err);
          Swal.fire('', "Failed to connect API " + err.error
          , 'error');


        });
  }


}
