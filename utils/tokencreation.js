import jwt from "jsonwebtoken";

const tokenCreation=(id)=>{
    return jwt.sign({id},process.env.SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRY
    })
}

export {tokenCreation}