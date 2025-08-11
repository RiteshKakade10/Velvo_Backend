const validateuser=(req,res,next)=>{

const name=req.body;
if(name=="Ritesh"){
    return res.json({
        "message":"Signin successfully"
    })
}
}

export default validateuser;