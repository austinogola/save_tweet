const router=require("express").Router()
const fetch=require('node-fetch');
const fs = require('fs');
// const starterHtml = require('../html.js');
// const enclosingHtml = require('../html.js');

const starterHtml=`<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Tweet page</title>
  </head>
  <body>`

  const enclosingHtml=`</body>
  </html>`

router.post("/",async(req,res)=>{
  const {html,name}=req.body

  // res.sendFile(path.join(__dirname+'/tweet.html'))

  fs.writeFile(`${name}.html`,starterHtml,async()=>{
    fs.appendFile(`${name}.html`,html,async()=>{
      fs.appendFile(`${name}.html`,enclosingHtml,async()=>{
        console.log('html file created');
      })
    })
  })

  try {
    fetch(`http://localhost:5000/screenshot/shot`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:name
      })
    }).then(async response=>{
      const resp=await response.json()
      res.send(resp)
    })
  }
  catch (e) {
    console.log(e.message);
    res.send(e.message)
  }
})


module.exports = router;
