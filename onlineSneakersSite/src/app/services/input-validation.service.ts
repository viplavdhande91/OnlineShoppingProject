import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputValidationService {

  constructor() { }



   public MatchPassword(password: string, confirmPassword: string): boolean {
     if(password === confirmPassword){
      return true;
     }

     return false;
    }

  }

