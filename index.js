const express = require("express");

//initialisation
const ourAPP = express();

ourAPP.get("/", (request, response)=> {
    response.json({message:"Request Served !!"});
});

ourAPP.listen(4000,()=> console.log("Server is running"));