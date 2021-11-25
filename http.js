const http=require("http")
const server=http.createServer((req,res)=>{
   if(req.url==="/"){
       res.end("homme")
   }
   if(req.url==="/about"){
       res.end("abouts")
   }
   res.end(`
   <h1>oops</h1>
   <a href="/">return home page</a>
   `)
})
server.listen(5000)