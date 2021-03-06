var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var crypto = require('crypto');
var auth = require('./auth');
var mailer = require('../config/mailer');
var mailConfig = require("../config/config.json").mailer;
var mail = new mailer();
/* GET users listing. */
router.get('/getuser',auth.required, function(req, res, next) {

  User.findById(req.payload.id, function(err, user) {
    if (err) {
      return res.status(500).json({ 
        "Success": false, 
        "msg": "Fail" 
      });
    }
    if (!user) {
      return res.status(401).json({ 
        "Success": false, 
        "msg": "login Fail, please login again" 
      });
    } else {
        var token = user.generateJWT();
        var user = user.toAuthJSON();
        res.status(200).json({
            token: token,
            user: user
        });
    }
})
});

router.post('/usercreation',function(req,res,next){

  var user=new User();
 // console.log(req.body)
  user.full_name=req.body.fullname;
  user.email=req.body.email;
  user.mobileno=req.body.mobile;
  user.setPassword(req.body.password);

  user.save(function(err,data){
    if (err) {
      return res.status(500).json({ 
        "Success": false, 
        "msg": "User Email Id or Mobile Number already Existed" 
      });

  }
    if (!data) {
      return res.status(401).json({ 
        "Success": false, 
        "msg": "Registration Fail" 
      });

  } else {

    let mailOptins = {
      "subject": "Welcome to Mill to Meal",
      "html": '<b>Dear ' + req.body.fullname + '</b><p>Your Registration is Successfully Done.</p>'
    
  }
  mail.Transport(mailOptins, req);

    return res.status(200).json({
      "Success":true, 
      "msg":"Registred successfully..."
    });
  }
  })

});

router.post('/login',function(req,res,next){
   console.log(req.body)
  User.findOne({$or:[{email:req.body.email},{mobileno:req.body.email}]},function(err,data){
    console.log(data)
    if (err) {
     
      return res.status(500).json({ 
        "Success": false, 
        "msg": "Invalid login credentials" 
      });
      
  }
  if (!data) {

    return res.status(401).json({
       "Success": false, 
       "msg": "Invalid login credentials" 
  });
    
}

  if (!data.validPassword(req.body.password)) {
      
      return res.status(401).json({ 
        "Success": false, 
        "msg": "Invalid login credentials" 
      });
      
  }
  else{
 var token = data.generateJWT();
  var user = data.toAuthJSON();
  res.status(200).json({
      "Success":true,
      "msg": 'Successfully logged in',
      token: token,
      user: user
  });

  }
  })
});


router.post('/forgotpassword',function(req,res,next){
  
  console.log(req.body);
  User.findOne({$or:[{email:req.body.email},{mobileno:req.body.email}]},function(err,data){
    console.log(data)
    if (err) {
      
     return  res.status(500).json({ 
         "Success": false, 
         "msg": "Invalid emailId/Mobile Number" 
       });
       
   }
   if (!data) {
 
    return  res.status(401).json({
        "Success": false, 
        "msg": "Invalid Email Id/Mobile Number" 
   });
     
 }

 if(data){
   let otp= Math.floor(Math.random() * 2000000);
   console.log(otp);
   data.otp=otp;
   let mailOptins = {
    "subject": "Forgot Password - OTP",
    "html": '<b>Dear ' + data.full_name + '</b><p>Your One Time Password  is:'+ otp+'</p>'
  
}
mail.Transport(mailOptins, req);
   data.save(function(err,data){
     if(err)
     throw err;
    return  res.status(200).json({ 
      "Success": true, 
      "msg": " OTP Send To Your Registred Email ID  Successfully." 
    }); 
   })
 }
  })    

});

router.post('/verifyotp',function(req,res,next){
  User.findOne({$or:[{email:req.body.email},{mobileno:req.body.email}]},function(err,data){
    console.log(data)
    if (err) {
      
     return  res.status(500).json({ 
         "Success": false, 
         "msg": "Not a valid User." 
       });
       
   }
   if (!data) {
 
    return  res.status(401).json({
        "Success": false, 
        "msg": "Not a valid User." 
   });
     
 }

 if(data.otp===req.body.otp){
   
  return  res.status(200).json({
    "Success": true, 
    "msg": "Entered OTP Correct." 
});
}
else{
  return  res.status(500).json({
    "Success": false, 
    "msg": "In correct OTP Entered." 
});
}

  })    

});

router.post('/resendotp',function(req,res,next){
  
  console.log(req.body);
  User.findOne({$or:[{email:req.body.email},{mobileno:req.body.email}]},function(err,data){
    console.log(data)
    if (err) {
      
     return  res.status(500).json({ 
         "Success": false, 
         "msg": "Invalid emailId/Mobile Number" 
       });
       
   }
   if (!data) {
 
    return  res.status(401).json({
        "Success": false, 
        "msg": "Invalid Email Id/Mobile Number" 
   });
     
 }

 if(data){
  let otp=data.otp;
   let mailOptins = {
    "subject": "Forgot Password - OTP",
    "html": '<b>Dear ' + data.full_name + '</b><p>Your One Time Password  is:'+ otp+'</p>'
  
}
mail.Transport(mailOptins, req);
return  res.status(200).json({ 
  "Success": true, 
  "msg": " OTP Send To Your Registred Email ID  Successfully." 
}); 
   
 }
  })    

});


router.put('/setpassword',function(req,res,next){
  // var user = new User();
  User.findOne({$or:[{email:req.body.email},{mobileno:req.body.email}]},function(err,data){
    console.log(data)
    if (err) {
      
     return  res.status(500).json({ 
         "Success": false, 
         "msg": "Not a valid User." 
       });
       
   }
   if (!data) {
 
    return  res.status(401).json({
        "Success": false, 
        "msg": "Not a valid User." 
   });
     
 }
if(data){
  data.setPassword(req.body.password)
  data.save(function(err,data){
if (err)
throw err;
return  res.status(200).json({
  "Success": true, 
  "msg": "Password update successfully." 
});
  })

  }
})

});
// user manage address
router.post('/manageaddress',auth.required, function(req, res, next) {
  User.findById(req.payload.id, function(err, user) {
    if (err) {
      return res.status(500).json({ 
        "Success": false, 
        "msg": "connection Fail" 
      });
    }
    if (!user) {
      return res.status(401).json({ 
        "Success": false, 
        "msg": "Not a valid User" 
      });
    } else {
        
var address={
        addressid:req.body.addressid,
        fullname:req.body.fullname,
        mobile:req.body.mobile,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        pincode:req.body.pincode
}
user.address.push(address);
user.save(function(err,data){
  if(err)
  throw err;
  res.json({ 
      "Success": true, 
      "msg": " Address save successfully." 
    }); 
})
    }
})
});

//Get user addeess

router.get('/getaddress',auth.required, function(req, res, next) {

  User.findById(req.payload.id, function(err, address) {
    if (err) {
      return res.status(500).json({ 
        "Success": false, 
        "msg": "Fail to connection" 
      });
    }
    if (!address) {
      return res.status(401).json({ 
        "Success": false, 
        "msg": "Not get any data! plz Login " 
      });
    } else {
        var address = address.address;
        
        res.status(200).json({
          address: address
        });
    }
})
});

router.put('/editaddress',auth.required, function(req, res, next) {
   User.findById(req.payload.id, function(err,address) {
     if(err){
       return res.status(500).json({ 
         "Success": false, 
         "msg": "Fail to connection" 
       });
     }
     
     if (!address) {
       return res.status(401).json({ 
         "Success": false, 
         "msg": "Invalid user" 
       });
     }
     else{
        var addressToUpdate = [];
       for (var i = 0; i < address.address.length; i++) {
         addressToUpdate.push(address.address[i]);
         
           if (address.address[i].addressid == req.body.addressid) {
                addressToUpdate[i].fullname = req.body.fullname;
                addressToUpdate[i].mobile = req.body.mobile;
                addressToUpdate[i].city=req.body.city
                addressToUpdate[i].pincode=req.body.pincode
                addressToUpdate[i].state=req.body.state
                addressToUpdate[i].address=req.body.address
           }
         
       }
       address.address = [];
      address.address = addressToUpdate;
       
     address.save(function(err,data){
     if (err)
     throw err;
     return  res.status(200).json({
       "Success": true, 
       "msg": "User update successfully." 
     });

   })

     }

   });
 })
     
 //Delete address

 router.delete('/deleteAddress/:id', auth.required, function (req, res, next) {
   console.log(req.params, req.payload.id);
   User.find({ _id: req.payload.id }, function (err, address) {
     if (!address) { 
       return res.sendStatus(401);
       }
     if (address[0].address.length > 0) {
       for (i = 0; i < address[0].address.length; i++) {
         if (address[0].address[i].addressid == req.params.id) {
           address[0].address.splice(i, 1);
           break;
 
         }
       }
       address[0].save();
       return res.status(200).json({ 
         "Success": true,
         "msg": "Address deleted successfully" });
     }
 
 
   })
 });
 

// Update Password

router.put('/updateepassword',auth.required, function(req, res, next) {
console.log(req.body)
  User.findById(req.payload.id, function(err, data) {
    if (err) {
      return res.status(500).json({ 
        "Success": false, 
        "msg": "Fail to connection" 
      });
    }
    if (!data) {
      return res.status(401).json({ 
        "Success": false, 
        "msg": "Not a valid data! plz Login " 
      });
    } 

    if (!data.validPassword(req.body.oldpassword)) {
      
      return res.status(401).json({ 
        "Success": false, 
        "msg": "Old Password Not Matched...  " 
      });
      
  }
  else{
    data.setPassword(req.body.confirmpassword)
    data.save(function(err,data){
  if (err)
  throw err;
  return  res.status(200).json({
    "Success": true, 
    "msg": "Password update successfully." 
  });
    })
  }
})
});
router.put('/updateUser',auth.required, function(req, res, next) {
console.log(req.body);
  User.findById(req.body.id, function(err, user) {
    if(err){
      return res.status(500).json({ 
        "Success": false, 
        "msg": "Fail to connection" 
      });
    }
    
    if (!user) {
      return res.status(401).json({ 
        "Success": false, 
        "msg": "Invalid user" 
      });
    }
    else{
      user.full_name=req.body.fullname;
      user.email=req.body.email;
      user.mobileno=req.body.mobile;
      user.gender=req.body.gender;
      
    user.save(function(err,data){
    if (err)
    throw err;
    return  res.status(200).json({
      "Success": true, 
      "msg": "User update successfully." 
    });

    })
   
  }
    });
})
   


module.exports = router;
