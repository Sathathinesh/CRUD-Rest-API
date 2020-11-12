const express = require('express');
// purpose for route 
const router = express.Router();

const Alien = require('../models/alienmodel');
/*
// specify the urls 
router.get('/',(req,res)=>{
   res.send('get by send method');
    // console.log('get request ');
});
*/

// get the data from database
router.get('/',async(req,res)=>{
     //res.send('get by send method');
     // console.log('get request ');

     try{
const aliens = await Alien.find();
res.json(aliens);
}

catch(err){
    res.send('Error' + err);
}

 });

router.get('/:id',async(req,res)=>{
try{
const alien = await Alien.findById(req.params.id);
res.json(alien);
}

catch(err){
   res.send('Error' + err);
}

});

router.post('/',async(req,res) => {
    const aline = new Alien({
        name : req.body.name,
        tech : req.body.tech,
        sub : req.body.sub
    })

    try{
     const ali = await aline.save();
     res.json(ali);
    }catch(err){
        res.send('Erro ' + err);
    }
});

router.patch('/:id',async(req,res)=>{
   try{
      const alien = await Alien.findById(req.params.id);
      alien.sub = req.body.sub
      const al = await alien.save();
      res.json(al);

   }catch(err){
    res.send('Error' + err);
   }
});

router.delete('/:id',async(req,res)=>{
    try{
       const alien = await Alien.findById(req.params.id);
       //alien.sub = req.body.sub
       const al = await alien.remove();
       res.json(al);
 
    }catch(err){
     res.send('Error' + err);
    }
 });

module.exports=router;

