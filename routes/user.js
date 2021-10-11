const { Router } = require('express');

const {
  userGet,
  userPut,
  userPatch,
  userDelete,
  userPost
} = require('../controllers/user');

const router = Router();

router.get('/', userGet );

router.put('/:id', userPut );

router.patch('/', userPatch );

router.post('/', userPost );

router.delete('/', userDelete);

module.exports = router;
