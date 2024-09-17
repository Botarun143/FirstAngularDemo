import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loansearch',
  templateUrl: './loansearch.component.html',
  styleUrl: './loansearch.component.css'
})
export class LoansearchComponent {

    constructor(private router:Router){}
  accountNumber:string='oneWaybinding';

  searchAccount(){
      console.log("input AccountNumber  "+this.accountNumber);
      this.router.navigate(['/loansearch']);
  }
}
