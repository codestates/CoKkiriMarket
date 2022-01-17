const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')

/* GET links listing. */

/**
 * @swagger
 * /user/authorize:
 *   post:
 *     description: 게시물 생성
 *     tags: [User]
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
 * /user/me:
 *   get:
 *     description: 게시물 생성
 *     tags: [User]
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
 * 
 * /user/login:
 *   post:
 *     description: 게시물 생성
 *     tags: [User]
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
 * /user/logout:
 *   post:
 *     description: 게시물 생성
 *     tags: [User]
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
 * /user/signout:
 *  delete:
 *      description: 로그 아웃
 *      tags: [User]
 *      responses:
 *          "204":
 *              description: "로그 아웃 성공"
 *              content:
 *                  applycation/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "successful"
 *          "400":
 *              description: "유효하지 않은 요청"
 *              content:
 *                  applycation/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Invalid user"
 *          "500":
 *              description: "기타 오류"
 *              content:
 *                  applycation/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "기타 오류"
 * 
 * 
 * 
 */

router.get('/logout', controller.logout);
router.post('/login', controller.login);
router.get('/verification', controller.verification);


module.exports = router;
