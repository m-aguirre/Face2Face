'use strict';
const express = require('express');
const router = express.Router();
const MessagesController = require('../controllers').Messages;

router.route('/')
  .get(MessagesController.getAll)
  ;

router.route('/:id')
  .put(MessagesController.addToMessages)
  // .delete(ProfileController.deleteOne)
  ;

module.exports = router;