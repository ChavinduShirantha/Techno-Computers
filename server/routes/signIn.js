const express=require('express');
const router=express.Router();
const signController=require('../controller/SignInController');


router.post('/logUser',signController.login);


module.exports=router;
