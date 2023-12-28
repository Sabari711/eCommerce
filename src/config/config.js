let configure = ""
let configData = {
    frontEndUrl : "",
    gitPages : "/eCommerce"
}
if(configure === "dev"){
    configData = {
        frontEndUrl : "http://localhost:3000/",
        gitPages : "/eCommerce"
    }
}else{
    configData = {
        frontEndUrl : "https://e-commerce-vzh7.vercel.app/", // changed if ness...,
        gitPages : "/eCommerce"
    }
}

export default configData;