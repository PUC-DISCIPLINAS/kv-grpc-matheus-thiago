const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("kv.proto", {});
const kvPackage = grpc.loadPackageDefinition(packageDef).kvPackage;

const main = () => {
  const server = new grpc.Server();
  server.addService(kvPackage.KeyValue.service, {
    "put": put,
    "get": get,
    "getAllKeysStream" : getAllKeysStream
  });
  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
  console.log("GRPC server is running")
};

const data = [];

const put = (object, callback) => {

  const verif = data.find((item) => item.key === object.request.key);
  if(verif) {
    callback(({
      code: 400,
      message: "invalid input",
      status: grpc.status.INTERNAL
    }))
  } else {
    const item = {
      "key": object.request.key,
      "value": object.request.value 
    }
    data.push(item);
    callback(null, item);
  }
}

const get =  (object, callback) => {
  const verif = data.find((item) => item.key === object.request.key);
  if(verif)
    callback(null, verif)
  else  
    callback(({
      code: 400,
      message: "invalid input",
      status: grpc.status.INTERNAL
    }))
}

const getAllKeysStream = (call,callback) => {
  data.forEach((item) => call.write(item))
  call.end();
}

main();
