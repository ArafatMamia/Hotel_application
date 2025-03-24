const {Router, response} = require('express')
const router = Router()

// add a person
router.post('/', (req,res)=>{

})

// get all persons
router.get('/', (req,res)=>{
   res.json({response:"it's working"})
})
// get persons by work type
router.get('/:workType', (req,res)=>{

})
// update a person
router.put('/:id', (req,res)=>{

})
// delete a person
router.delete('/:id', (req,res)=>{

})
module.exports = router