const router=require("express").Router()
const fetch=require('node-fetch');

router.post("/",async(req,res)=>{
  const {html}=req.body

  // res.sendFile(path.join(__dirname+'/tweet.html'))

  try {
    fetch(`https://localhost:5000/tweet`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        html:html
      })
    }).then(async response=>{
      const resp=await response.json()
      res.send("Good on my side")
    })
  }
  catch (e) {
    console.log(e.message);
    res.send(e.message)
  }

  res.render("tweet")
})


module.exports = router;
