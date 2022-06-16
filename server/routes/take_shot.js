const router = require('express').Router();
const details = require('../middleware/details');



router.post('/',async(req,res)=>{
    try {
      const {twtUrl}=req.body


      const tweetId=String(twtUrl.split('/').slice(-1))

      console.log(tweetId);

      const tweet=await details.tweet(tweetId)
      console.log(tweet['created_at']);

      res.status(200).json(tweet)

    } catch (e) {
      res.status(401).send(e.message)
    }
})



module.exports = router;
