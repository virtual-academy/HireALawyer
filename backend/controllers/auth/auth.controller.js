const userModel = require('../../models/user')
exports.login = (req, res)=>{
 console.log('signin')
}
exports.signup = (req, res)=>{
    // const data = new userModel{
    //     fullname : req.fullname,
    //     password : req.passwords,
    //     email : req.uID,
    //     city: req.citys
    // }

    const data = req.body;
    const user = userModel.create(data).then(()=>{
            console.log('user created successfuly');
        }
    ).catch((err)=>{
        console.log('Something Went Wrong'+ err);
        return;
    })
    res.status(200).json({
        msg:"User Created Successfully",
        data : user
    });
}