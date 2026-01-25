import {test, expect} from '@playwright/test';

test ('loginrequest', async({request})=>
{

const response = await request.get('https://rahulshettyacademy.com/client/');

expect(response.status()).toBe(200);


    }
    
    
    )

test ('postrequestlogin', async({request})=>{

const responseBody = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login' ,  {

data : {
  userEmail: "rahulmestri239@gmail.com",
  userPassword: "Beautiful@678#"
}

})

expect(responseBody.status()).toBe(200);
const body = await responseBody.json();
console.log('Response Body:', body);
console.log('Token:', body.token);
expect(body.message).toBe('Login Successfully');

})