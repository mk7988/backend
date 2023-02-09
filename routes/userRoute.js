import express from 'express'
const router = express.Router()
import { registrationController,loginController } from '../controllers/userController.js'


// router.post('/register',(req,res)=>{
//     res.send("hiiiiiiiiiii")
// })

router.post('/registration',registrationController)
router.post('/login',loginController)


router.get('/')

export default router