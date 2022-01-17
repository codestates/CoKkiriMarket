const express = require('express');
const router = express.Router();
const userRouter = require('./user')
const postRouter = require('./post')

const swaggerUi = require('swagger-ui-express')
const swaggerRouter = require('./swagger')

/* 라우팅 */
router.use('/user', userRouter);
router.use('/post', postRouter)
router.use('/apidocs', swaggerUi.serve, swaggerUi.setup(swaggerRouter));

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;