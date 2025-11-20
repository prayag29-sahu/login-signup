// // console.log("hello");
// //  let fs  = require('fs')
// //  fs.writeFileSync('index.txt',"hello ")
// //    let data= fs.readFileSync("index.txt")
// //    console.log(data.toString());
// //         fs.appendFileSync("index.txt","")
// //         fs.unlinkSync('index.txt')
   
// //  console.log(fs);
 
// // npm i -g nodemon
// // let os = require('os')
// // console.log(os.homedir());
// let express= require('express')
//     let app=       express()
//     app.use(express.json())


//     // app.use('/',(req,res,next)=>{
//     //     // res.send("mai nhi jane dungaa")
//     //     next()
//     // })

//     // app.get('/:id',(req,res)=>{

//     //    let {id}=    req.params
      
       
//     //     res.send(id)
//     // })
//     let arr=['ankit jain',"ankit","pravesh","tiwari" ,"pravesh tiwari"]

// //     app.get('/search',(req,res)=>{
// //          let {firstName,lastName}=   req.query
// //          console.log(`firstName: ${firstName} lastName: ${lastName}`);
// //          res.send(`firstName: ${firstName} lastName: ${lastName}`)
// //  // http://localhost:4000/search?firstName=ankit&lastName=om

// //     })

// app.post('/data',(req,res)=>{
//     let val=   req.body
//     console.log(val);
    
// })

//     // app.get('/dog',(req,res)=>{
//     //     res.send("dog.....")

//     // })
//     // app.post('/',(req,res)=>{
//     //     res.send("postt....")
//     // })
//     app.get('/home',(req,res)=>{
//         res.send("hello mmai hu don")

//     })
//     app.listen(4000,()=>{
//         console.log("server running on prt no 4000");
        
//     })

//     // app.use('/',(req,res,next)=>{
//     //     res.send("mai bilkul nhi jane dunga")
//     //     // next()

//     // })
         





// // htts://google.com/?first=ankit


//  let express=  require('express')
//      let mongoose=      require('mongoose')
//     let cors=   require('cors')

//    let User=    require('./user')
//    let bcrypt=    require('bcrypt')
//    let sendOtp=    require('./twillioService')




// // npm i mongoose
// // npm i bcrypt
// // npm i express

//  let app=     express()
//  app.use(cors())
   
//  app.use(express.json())

//  mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
//  then(()=>{
//     console.log("db conneted...");
//  })


//  app.get('/',(req,res)=>{
//     res.send("hiii")

//  })
//  app.post('/create',  async(req,res)=>{
//           let {userName,email,passWord}=   req.body
//       console.log(userName,email ,"heheh");
      
//      let user=     await  User.findOne({email})
//      console.log(user,"hiiii");
     
//      if(user){
//         res.send("user jinda haiii")
//      }
//          let updatedP=     await  bcrypt.hash(passWord,10)
//          console.log(updatedP,"HEH");
         
//         let userData=   new  User({
//             userName,
//             email,
//             passWord:updatedP
//          })
//               await userData.save()
//               res.send("account ban gya hai....")
//             //   console.log(userName,email, passWord);
            
//  })

//  app.post("/login",async(req,res)=>{
//     let {email,passWord}=   req.body
//     console.log(email,passWord);
    


//        let userInfo=    await User.findOne({email})
//        console.log(userInfo,"kyaa milegaaaaaaaa");
       
//        if(!userInfo){
//          res.send("user not found")
//        }else{
//         let validPass=   await bcrypt.compare(passWord,userInfo.passWord,)
//         if(validPass){
//          res.send("login ho gyaa")
//         }else{
//          res.send("pass sahi nhi haiiii")
//         }
//        }
        
//  })



//  app.post('/send-otp', async (req, res) => {
//   const { phoneNumber } = req.body;
//   console.log(phoneNumber,"heheh");
  
//   const otp = Math.floor(100000 + Math.random() * 900000);
//   try {
//     await sendOtp(phoneNumber, otp);
//     res.status(200).send({ message: 'OTP sent successfully', otp });
//   } catch (error) {
//     res.status(500).send({ error: 'Failed to send OTP' });
//   }
// });

  
//  app.listen(4000,()=>{
//     console.log("server running on port no 4000");
    
//  })






//  if([]){
//     console.log("hiii");
    
//  }else{
//     console.log("hello");
    
//  }
// let express= require('express')
// let mongoose= require('mongoose')
// //npm i mongoose
//   let app=      express()
//   mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
//   then(()=>{
//    console.log("db....");
//   })
//   app.get('/',(req,res)=>{
//    res.send("hello")
//   })
//   app.listen("4000",()=>{
//    console.log("server running on port no 4000");
  
//   })
//   // show dbs 
//   // use dbName 

  // show collections 
  // db.collectionsName.find()
//   Rbac
 let express= require('express')
   let mongoose=     require('mongoose')
let User=    require('./user')
let bcrypt=    require('bcrypt')
let jwt=    require('jsonwebtoken')
  const crypto = require('crypto');
  const cors = require('cors');

 let {sendEmail} = require('./sendEmail')
  mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
  then(()=>{
   console.log("db....");
  })
    
  let app=     express()
  app.use(express.json())
  app.use(cors())

//   app.use((req,res)=>{
//    res.send("mai hu idherr")

//   })
  app.get('/',(req,res)=>{
   res.send("hello")
   
  })

   app.post('/create',  async(req,res)=>{
          let {userName,email,passWord,role}=   req.body
      console.log(userName,email ,"heheh");
      
     let user=     await  User.findOne({email})
     console.log(user,"hiiii");
     
     if(user){
        res.send("user jinda haiii")
     }
         let updatedP=     await  bcrypt.hash(passWord,10)
         console.log(updatedP,"HEH");
         
        let userData=   new  User({
            userName,
            email,
            passWord:updatedP,
            role:role||'student'
         })
              await userData.save()
              res.send("account ban gya hai....")
            //   console.log(userName,email, passWord);
            
 })

  app.post("/login",async(req,res)=>{
    let {email,passWord}=   req.body
    console.log(email,passWord);
    
       let userInfo=    await User.findOne({email})
       console.log(userInfo,"kyaa milegaaaaaaaa");
       
       if(!userInfo){
         res.send("user not found")
       }else{
        let validPass=   await bcrypt.compare(passWord,userInfo.passWord,)
        if(validPass){
         let token = jwt.sign({  email: userInfo.email, role: userInfo.role }, "z");
         console.log(token,"tokennnnn");
         
         res.send("login ho gyaa")
        }else{
         res.send("pass sahi nhi haiiii")
        }
       }
        
 })
 function checkRole(role,role1){
   return (req,res,next)=>{
      let token = req.headers.authorization;
      if (!token) {
         return res.send('Unauthorizeddd User ||');
     }else{
      let deCodedToken = jwt.verify(token,  "JHBFIUWBFIUWB");

      if (role!==deCodedToken.role ) {
         return res.send('Access denieddd ||')
     }
     else {
         next();
     }

     }

   }
 }




 app.post('/forgot-password', async (req, res) => {
   const { email } = req.body;
   try {
     const user = await User.findOne({ email });
     if (!user) {
       return res.status(404).send('User not found');
     }
 
   
     const resetToken = crypto.randomBytes(20).toString('hex');
     user.resetToken = resetToken;
     user.resetTokenExpiry = Date.now() + 3600000; 
     await user.save();
 
 
    //  const resetUrl = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`;
    let resetUrl=`http://localhost:5173/reset/${resetToken}`
     await sendEmail(
       user.email,
       'Password Reset Request',
       `Click the link below to reset your password:\n\n${resetUrl}`
     );
 
     res.status(200).send('Password reset email sent');
   } catch (error) {
     res.status(500).send('Error sending password reset email: ' + error.message);
   }
 });



  
 // Reset Password
 app.post('/reset-password/:token', async (req, res) => {
   const { token } = req.params;
   const { newPassword } = req.body;
 
   try {
     const user = await User.findOne({
       resetToken: token,
       resetTokenExpiry: { $gt: Date.now() }, 
     });
 
     if (!user) {
       return res.status(400).send('Invalid or expired token');
     }
 
     // Hash the new password
     const hashedPassword = await bcrypt.hash(newPassword, 10);
     user.passWord = hashedPassword;
     user.resetToken = undefined;
     user.resetTokenExpiry = undefined;
     await user.save();
 
     res.status(200).send('Password reset successfully');
   } catch (error) {
     res.status(500).send('Error resetting password: ' + error.message);
   }
 });
 



  app.get('/public',(req,res)=>{
   res.send("isko koi bhi dekh sakta hai")

  })
  
  app.get('/private', checkRole('admin') , (req,res)=>{
   res.send("404......")

  })
  app.listen(4000,()=>{
   console.log("server running on port no 4000");
   
  })






//   let express=  require('express')
//   let User=   require('../models/userModel')
//   let router=   express.Router()


//  module.exports=router