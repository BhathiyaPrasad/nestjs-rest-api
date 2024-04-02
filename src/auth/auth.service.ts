import { Injectable } from "@nestjs/common";

@Injectable({})
 export class AuthService{

    signup() {
        return'Sign Up';
      }

    signin() {
    return 'Sign In ';
  }



 }