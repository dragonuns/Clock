const path = require("path");
const http = require("http")
const server = http.createServer()
const fs = require('fs');
const { resolve } = require("path");
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
fs.readFile(path.join(__dirname,"/index.html"),'utf8',function(err,result){
    // console.log(err);
    if(err){
        console.log("读取文件失败!\n"+err.mesage);
    }
          console.log("读取文件成功!" )
          resolveCSS(result)
          resolveJS(result)
          resolveHTML(result)
          function resolveCSS(htmlStr){
         var     r1 = regStyle.exec(htmlStr);
         const newCss = r1[0].replace("<style>","").replace("</style>","");
         fs.writeFile(path.join(__dirname,"/index.css"),newCss,(err,result)=>{
            if(err)console.log("写入CSS样式失败！\n" + err.message);
            console.log("写入CSS样式成功！");
         })
          }
          function resolveJS(htmlStr){
            var     r2 = regStyle.exec(htmlStr);
            const newJs = r2[0].replace("<script>","").replace("</script>","");
            fs.writeFile(path.join(__dirname,"/index.js"),newJs,(err,result)=>{
               if(err)console.log("写入JS失败！\n" + err.message);
               console.log("写入JS成功！");
            })
             }
             function resolveHTML(htmlStr){
                
                const newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace("regScript", '<script src="./index.js"></script>');

               
                fs.writeFile(path.join(__dirname,"/clock.html"),newHTML,(err,result)=>{
                   if(err)console.log("写入HTML失败！\n" + err.message);
                   console.log("写入HTML成功！");
                })
                 }
server.on("request",(req,res)=>{
    console.log("有人访问");
})
 server.listen(8080,()=>{
    console.log(111);
 })      
})