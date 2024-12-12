const UserModel =require ("../model/usermodel.js");



exports.login = async(req,res) =>{
   const username = req.body.username;
   const password = req.body.password;

   if(!username || !password){
    return res.json({
        msg : "Plase enter your info",
        stete : 0,
        data : [],
    })
   }

  const ouruser = await UserModel.findOne({
    $or :[{
        username : username,
        password : password,
    }]
  })

  if(!ouruser){
   return res.json({
        msg : "The username or password not found , plase try again",
        stete : 0,
        data : [],
    })
  }else{
    return res.json({
         msg : "OK Everey thing corect",
         stete : 1,
         data : ouruser,
     })
   }

//   if(!ouruser == ouruser.password){
//    return res.json({
//         msg : "the user name or the password wrong ,plase try again",
//         stete : 0,
//         data : [],
//     })
//   }
}

exports.sineup = async(req,res) =>{
    
    const username = req.body.username;
     const email = req.body.email;
     const phone = req.body.phone;
     const password = req.body.password;
if(!username || !email || !phone || !password){
   return res.json({
        msg : "Plase enter your information",
        stete : 0,
        data : [],
    });
}
const ouruser = await UserModel.findOne({
    $or :[
        {username : username},
        {email : email},
    ]
});
    if(ouruser){
        return res.json({
            msg : "This user name already on the system",
            stete : 0,
            data : [],
        })
    }
    await UserModel.create({
        username : username,
        email : email,
        phone : phone,
        password : password,        
    }).then( (data)=>{
      return res.json({
            msg: "Accaunt Cereated Sucssefule" ,
            stete: 1,
            data: data,
        })
    }).catch((err)=>{
     console.log(err);
    return res.json({
        msg : "Error try again",
        stete : 0,
        data : [],
     })
    })

}

