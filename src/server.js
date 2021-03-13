const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("kv.proto", {});
const kvPackage = grpc.loadPackageDefinition(packageDef).kvPackage;

const main = () => {
  const server = new grpc.Server();
  //   server.addService();
  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
};

main();
