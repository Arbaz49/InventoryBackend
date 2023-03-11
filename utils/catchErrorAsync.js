const catchErrorAsync=fn=>(req,res,next)=>{
    fn(req,res,next).catch(err=>next(err));
}

export default catchErrorAsync;