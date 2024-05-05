exports.login = (req, res)=>{
    const data = {
        id: "1",
        name:"shahid",
        password:"azeem",
        msg:"Login Successfull"
    }

    res.status(200).send(data);
    res.status(200).json(data);
}
exports.signup = (req, res)=>{
    console.log('Signup Successfull......');
}