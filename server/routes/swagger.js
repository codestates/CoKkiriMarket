const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    info : { // 정보 작성
        title : "CoKkiriMarket",
        version : "1.0.0",
        description : "CoKkiriMarket API DOCs" 
    },
    host : "https://api.cokkirimarket.xyz", // base-url
    basePath : "/" // base path
};

const options = {
    swaggerDefinition: swaggerDefinition,
    apis : [__dirname + '/../routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;