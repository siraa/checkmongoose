const express = require("express");
const router= express.Router()

const Person = require('../models/personModel')




// add person @ post
// Create and Save a Record of a Model


router.post('/newperson',(req,res)=>{
    let newPerson= new Person(req.body)
    newPerson.save((err,data)=>{
        console.log(data)
        err ? console.log(err): res.send('person added succesfuly')
    })
})

//Create Many Records with model.create()
router.post('/createallperson', (req, res) => {
    console.log(req.body);
    // let newPerson= new Person(req.body)
    Person.create(req.body)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  });

  //Use model.find() to Search Your Database
  router.get('/',(req,res)=>{

    Person.find({},(err,data)=>{
        err ? console.log(err) : res.json(data)
    })
  })


    router.get("/:pizza", (req, res) => {

    Person.findOne({ favoriteFood: req.params.food })
      .then((data) => res.json(data))
      
      .catch((err) => res.send(console.log("erreuuur"))
      );
  })


// get person with id @get
  router.get('/:id',(req,res)=>{

    Person.find({_id:req.params.id},(err,data)=>{

        err ? console.log(err): res.json(data)
    })
  })

  // update person @put

  router.put('/updateperson/:id',(req,res)=>{

    Person.findByIdAndUpdate({_id:req.params.id},{...req.body} ,(err,msg)=>{

err ? console.log(err) : res.json({msg:'sami was updated'})
    })
  })

// Delete One Document Using model.findByIdAndRemove
// remove(req.params.name)

router.delete('/deleteperson/:id',(req,res)=>{


  Person.findByIdAndDelete({_id:req.params.id},(err,msg)=>{

    err ? console.log(err) : res.json({msg:'person deleted'})

  })
})

module.exports=router
