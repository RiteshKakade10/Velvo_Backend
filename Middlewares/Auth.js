import jwt, { decode } from 'jsonwebtoken';

const ensureToken=(req,res,next)=>{
    const auth=req.headers['authorization'];

    if(!auth){
        return res.status(403).json(
            {
                message:"Unauthorized Token!!"
            }
        );
    }

    try{
        const decoded=jwt.verify(auth,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(error){
        res.status(403).json({
            message:"Internal Server Error!"
        })

    }
}

 export default ensureToken;