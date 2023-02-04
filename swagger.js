const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/app/endpoints.js'];


swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./src/app/index.js')
});