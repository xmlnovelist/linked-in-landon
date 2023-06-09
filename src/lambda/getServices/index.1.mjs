import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var AWS = require('aws-sdk');

AWS.config.update({
  region: "us-east-1"
});

var dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context, callback) {
  var params = {
    TableName: "Services"
  };
  
  dynamodb.scan(params, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.Items);
    }
  });
}