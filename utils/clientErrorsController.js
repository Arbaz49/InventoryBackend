class apiErrorsModel extends Error{
    constructor(message,statusCode){
        super(message)
        this.statuscode = statusCode;
        this.status=String(statusCode).startsWith('4')?"please check your request":"server error";
        this.applicationError = true;
        Error.captureStackTrace(this);
    }
}
export default apiErrorsModel;

