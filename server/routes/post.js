const express = require('express');
const router = express.Router();
const controller = require('../controllers/post')

/* GET links listing. */
/**
 * @swagger
 * /posts:
 *   post:
 *     description: 게시물 생성
 *     tags: [Post]
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "body"
 *       in: "body"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/Post"
 *     responses:
 *       "200":
 *         description: "successful operation"
 *     
*/

router.get('/', controller.get);
router.post('/', controller.post);
router.get('/my', controller.my);


module.exports = router;
