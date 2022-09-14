const httpServer=require("./index")

httpServer.listen(8081,()=>{
    console.log(`server started at: http://localhost:8081/welcome`)
})