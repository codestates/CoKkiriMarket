const express = require('express');
const router = express.Router();
const controller = require('../controllers/post')

/* GET links listing. */
/**
 * @swagger
 * /post:
 *   post:
 *     description: 게시물 생성
 *     tags: [Post]
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: path
 *       name: user
 *       required: true
 *       type: integer
 *       description: 유저 Id
 *     responses:
 *       "200":
 *         description: "successful operation"
 *     
 *   get:
 *     description: 게시물 생성
 *     tags: [Post]
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: path
 *       name: user
 *       required: true
 *       type: integer
 *       description: 유저 Id
 *     responses:
 *       "200":
 *         description: "successful operation"
 * 
*/

router.get('/', controller.get);
router.post('/', controller.post);
router.get('/my', controller.my);


module.exports = router;
