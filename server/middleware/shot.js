const puppeteer = require('puppeteer');


const shot=async(req,res,next)=>{
  try {
    const {url}=req.body

    const browser=await puppeteer.launch()
    const page=await browser.newPage()

    await page.goto(url)

    await page.setViewport({width:600,height:500})
    const img=await page.screenshot({path:'scrn.png'})
    req.img=img
    await browser.close()

    res.send(req.img)
    console.log('Image just sent');

  }catch (e) {
    console.log(e.message);
    return res.status(401).send(e.message);
  }
}
