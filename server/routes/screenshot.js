const router = require('express').Router();
const shot = require('../middleware/shot');
const puppeteer = require('puppeteer');
const fetch=require('node-fetch');


router.post('/',async(req,res)=>{
    try {
      const {twtUrl}=req.body

      let relvHtml='';

      //Get embedding code
      try {
        fetch(`https://publish.twitter.com/oembed?url=${twtUrl}`,{
          method:'GET',
        }).then(async response=>{
          const resp=await response.json()
          relvHtml=await resp.html

          console.log('Image sent');
          try {
            fetch("http://localhost:5000/getTweet",{
              method:"POST",
              headers:{
                "Content-Type":"application/json",
              },
              body:JSON.stringify({
                html:relvHtml
              })
            }).then(async response=>{
              
            })
          }
          catch (e) {
            console.log(e.message);
            res.send(e.message)
          }
        })
      }
      catch (e) {
        console.log(e.message);
        res.send(e.message)
      }

      //Req to render html
      //


    } catch (e) {
      console.log(e.message);
      res.status(401).send(e.message)
    }
})


module.exports = router;
