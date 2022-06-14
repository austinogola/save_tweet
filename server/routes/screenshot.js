const router = require('express').Router();
const shot = require('../middleware/shot');
const puppeteer = require('puppeteer');
const fetch=require('node-fetch');


router.post('/',async(req,res)=>{
    try {
      const {twtUrl}=req.body

      let relvHtml='';

      const name=String(twtUrl.split('/').slice(-1))
      console.log(name,typeof name);

      //Get embedding code
      try {
        fetch(`https://publish.twitter.com/oembed?url=${twtUrl}`,{
          method:'GET',
        }).then(async response=>{
          const resp=await response.json()
          relvHtml=await resp.html
          console.log('Html code retrived')

          fetch("http://localhost:5000/makeTweet",{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({
              html:relvHtml,
              name:name
            })
          }).then(async response=>{
              const resp=await response.json()
              res.json(resp)
          })
        })
      }catch (e) {
        res.status(401).send(e.message)
      }
    } catch (e) {
      res.status(401).send(e.message)
    }
})


router.post('/shot',async(req,res)=>{
  const {name}=req.body
  console.log(name);
  const browser=await puppeteer.launch({headless:true})
  const page=await browser.newPage()
  await page.goto(`http://localhost:5000/render/${name}`)
  await page.screenshot({path:`${name}.png`})
  await browser.close()
  console.log('Screenshot taken');
  res.json({"Status":'Screenshot done'})
})


module.exports = router;
