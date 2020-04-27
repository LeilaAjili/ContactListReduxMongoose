const express=require("express")
const router=express.Router()
const Contact=require("../models/contact")




router.get("/",async(req,res)=>{
  try {
    const contacts=await Contact.find()
    contacts.length===0?res.status(400).json({msg:"Object is Empty"}):res.json(contacts)
  } catch (err) {
    console.error(err)
  }

})

router.post('/',async(req,res)=>{

    try {
      const {name,mail,phone, link}=req.body
      const newContact = new Contact({
        name,
        mail,
        phone,
        link
      });
      const contacts= await newContact.save()
      
      res.json(contacts)
    } catch (err) {
      console.error(err.message);
    }
})


router.delete("/:id",async(req,res)=>{
    try {
      let id_contact=req.params.id
      await Contact.findOneAndDelete({ _id:id_contact})
      res.send({success:true})
      
    } catch (err) {
      console.error(err.message)
      res.send({success:false})
      
    }
  })

  

 
router.put('/:id',async(req,res)=>{
    try {
      const contactlist=req.body
      await Contact.findOneAndUpdate({_id:req.params.id},{$set:{...contactlist}})
      res.send({success:true})
    } catch (err) {
      console.error(err.message)
      res.send({success:false})
       
    }
  })


module.exports=router