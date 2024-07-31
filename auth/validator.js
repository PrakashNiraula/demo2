const validator = require('validator');
var passwordValidator = require('password-validator');
const emailvalidator = require("email-validator");


const uservalidation = (data) => {

    let errors = {};

    var password = new passwordValidator();
    
    password
        .is().min(4)                                   
        .is().max(100)                                  
                                    
        .has().digits(2)                               
        .has().not().spaces()                          
        .is().not().oneOf(['Passw0rd', 'Password123']); 

    
    console.log(password.validate('validPASS123'));
   
    console.log(password.validate('invalidPASS'));
    
   
    console.log(password.validate('joke', { list: true }));
    

    if (data.username) {
        if (!validator.isLength(data.username.trim(), { min: 6, max: 30 }))
            errors.username = 'Username must me 6 and 30 charater';

    } else {
        errors.username = 'Username is required';
    }

    if (data.name) {
        if (!validator.isLength(data.name.trim(), { min: 3, max: 30 }))
            errors.name = 'name must me 3 and 30 charater';

    } else {
        errors.name = 'name is required';
    }

    if (data.address) {
        if (!validator.isLength(data.address.trim(), { min: 3, max: 30 }))
            errors.address = 'address must me 3 and 30 charater';

    } else {
        errors.address = 'address is required';
    }

    if (data.phone) {
        if (!validator.isLength(data.phone.trim(), { min: 10, max: 30 }))
            errors.phone = 'Phone number must be 10 digits';

    } else {
        errors.phone = 'name is required';
    }

    // if(data.email){
    //    if(emailvalidator.validate(data.email))
    //     errors.email= 'Pleae enter a genuine email';
    //     // Your call to model here
    // }else{
    //     errors.email='Invalid email';
    // }



    return {
        errors, isValid: Object.keys(errors).length == 0
    }

}

module.exports = {
    uservalidation,
   

}