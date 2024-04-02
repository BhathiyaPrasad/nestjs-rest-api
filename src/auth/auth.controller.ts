import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller ('auth')
 
export  class AuthController{
    constructor(authservice: AuthService){}

    @Post('signup')
    signup(){
   return 'Signed up Successfully'
}
    @Post('signin')
    signin(){
        return 'Signin Successfully'
    }

}