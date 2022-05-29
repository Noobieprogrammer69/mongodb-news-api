const router = require('express').Router();
const auth = require('../middlewares/auth')
const userCtrl = require('../controllers/userCtrl');

router.get('/user/:id',auth, userCtrl.getUser)
router.patch('/user',auth, userCtrl.updateUser)

module.exports = router