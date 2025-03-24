const {Router} = require('express')
const Person = require('../models/Person')

const router = Router()


// add a person
router.post('/', async(req,res)=>{
     try{
       const data = req.body
       const newPerson = new Person(data)
       await newPerson.save()
       res.status(200).json({msg:"data saved"})

     }catch(err){
        res.status(500).json({error:"ineternal server error"})
     }
})

// get all persons
router.get('/', async(req,res)=>{
    try{
       const response = await Person.find()
       res.status(200).json(response)

     }catch(err){
        res.status(500).json({error:"ineternal server error"})
     }
})
// get persons by work type
router.get('/:workType', async(req,res)=>{
try{
    const workType = req.params.workType
       const response = await Person.find({work:workType})
       res.status(200).json(response)

     }catch(err){
        res.status(500).json({error:"ineternal server error"})
     }
})
// update a person
router.put('/:id', async(req,res)=>{
try{
    const id = req.params.id
    const data = req.body
    console.log(id, data)
       const response = await Person.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        })
       res.status(200).json(response)

     }catch(err){
        res.status(500).json({error:"ineternal server error"})
     }
})
// delete a person
router.delete('/:id', async(req,res)=>{
try{
    const id = req.params.id
       const response = await Person.findByIdAndDelete(id)
       res.status(200).json(response)

     }catch(err){
        res.status(500).json({error:"ineternal server error"})
     }
})
module.exports = router