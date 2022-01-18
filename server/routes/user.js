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
 * /user/mypage:
 *   get:
 *     description: 유저의 개인정보 및 마이페이지 정보 조회를 위한 엔드포인트
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
 *     description: email 로그인을 위한 엔드포인트
 *     tags: [User]
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: path
 *       name: user
 *       required: true
 *       type: integer
 *       description: 유저 Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:      # Request body contents
 *             type: object
 *             properties:
 *               email:
 *                 type: integer
 *               password:
 *                 type: string
 *     responses:
 *       "200":
 *         description: "successful operation"
 * 
 * /user/logout:
 *   post:
 *     description: 로그 아웃
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
 *      description: 회원 탈퇴를 요청합니다.
 *      tags: [User]
 *      responses:
 *          "204":
 *              description: "회원 탈퇴에 성공하였습니다."
 *              content:
 *                  applycation/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "successful"
 *          "400":
 *              description: "유효하지 않은 요청입니다."
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
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "기타 오류"
 *  
 * /user/verification/{token}:
 *    get:
 *      description: 회원가입 시 이메일 인증을 위한 엔드포인트
 *      tags: [User]
 *      produces:
 *      - "application/json"
 *      parameters:
 *      - in: path
 *        name: token
 *        required: true
 *        type: string
 *        description: 인증 토큰
 *      responses:
 *        "200":
 *          description: "인증 완료"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "인증 완료"
 *        "400":
 *          description: "만료된 인증 요청"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "만료된 인증 요청"
 * 
 */

router.get('/logout', controller.logout);
router.post('/login', controller.login);
router.get('/verification', controller.verification);
router.get('/email', controller.verification)


module.exports = router;
