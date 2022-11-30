import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }


   // Function is defined
   public hideloader() {
  
    // Setting display of spinner
    // element to none
    // document.getElementById('loading').style.display = 'none';
}

}
