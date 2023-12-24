let configure = ""
let configData = {
    frontEndUrl : ""
}
if(configure === "dev"){
    configData = {
        frontEndUrl : "http://localhost:3000/"
    }
}else{
    configData = {
        frontEndUrl : "http://localhost:3000/" // changed if ness...
    }
}

export default configData;