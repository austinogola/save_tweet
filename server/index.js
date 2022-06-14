const puppeteer = require('puppeteer');
const express=require("express")
const cors = require('cors');
const path = require('path');
const app=express()


app.use(cors())
app.use(express.json())

app.set('view engine','ejs')


// app.get('/',async(req,res)=>{
//   res.send("Homepage")
// })
app.post("/tweet",async(req,res)=>{
  const {html}=req.headers
  res.render("tweet",{code:html})

  const browser=await puppeteer.launch()
  const page=await browser.newPage()

  await page.goto('http://localhost:5000/tweet')

  await page.setViewport({width:600,height:500})
  await page.screenshot({path:'scrn.png'})
  req.img=img
  await browser.close()
  console.log('Image Created');
})


app.use('/screenshot',require('./routes/screenshot'))
app.use('/makeTweet',require('./routes/makeTweet'))
app.use('/render',require('./routes/render'))


app.listen(5000,()=>{
  console.log('Server runnign on port 5000');
})
