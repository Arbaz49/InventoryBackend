const dvelopmentErrors=(err,res)=>{
    res.status(err.statuscode).json({
        status:err.status,
        // err,
        message:err.message,
        stack:err.stack
    })
    }
    
    const productionErrors=(err,res)=>{
        res.status(err.statuscode).json({
            status:err.status,
            
            message:err.message,
        })
    }
    
    
    const GlobalErrorHandler=(err,req,res,next)=>{
        console.log("reached me ");
        if (err.message=="invalid token"){
            err.statuscode=401;
            err.status="not valid token";
        }
        err.statuscode=err.statuscode || 500;
        err.status=err.status||"server error";
        if(process.env.NODE_ENV=="development") dvelopmentErrors(err,res);
        else productionErrors(err,res);
    }
    
    
    export{GlobalErrorHandler}