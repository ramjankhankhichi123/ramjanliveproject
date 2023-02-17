const { Router } = require('express');
const express = require('express');
const router = express.Router();
//const app = express();
router.use(express.json());


const {getprodect, setprodect, updateprodect, deleteprodect}=require('../controllers/prodectControllers')
router.get('/',getprodect)
router.post('/',setprodect)
router.put('/:_id',updateprodect)
router.delete('/:_id',deleteprodect)



module.exports = router;