import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const axios = require('axios');

export const handler = async(event, context, callback) => {

    console.log(event.body);
    var urltocheck = event["queryStringParameters"]['urltocheck'] 
    var fullURL = 'https://api.websitecarbon.com/site?url='+urltocheck;
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: fullURL,
        headers: { }
};
console.log(fullURL)


return axios(config)
.then(function (response) {
  var response = {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value"
        },
        "body": JSON.stringify(response.data.statistics),
        "isBase64Encoded": false
    };

    return response;
    
})
.catch(function (error) {
  console.log(error);
});
};
