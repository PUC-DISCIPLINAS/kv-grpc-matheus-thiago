const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync('kv.proto',{

});
const kvPackage = grpc.loadPackageDefinition(packageDef).kvPackage;
