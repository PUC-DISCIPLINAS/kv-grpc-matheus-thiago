const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("kv.proto", {});
const kvPackage = grpc.loadPackageDefinition(packageDef).kvPackage;

const commands = {
  GET: "GET",
  LIST: "LIST",
  PUT: "PUT",
};

const help = () => {
  console.log("\nPlease, type a valid command\n");
  console.log(
    commands.LIST,
    "\t\t\t List all items\n",
    commands.GET,
    " {key} \t\t get value of key\n",
    commands.PUT,
    " {key} {value} \t create a new item with key and value"
  );
};

const main = () => {
  const command = process.argv[2];
  if (!command) {
    help();
  } else {
    switch (command.toUpperCase()) {
      case commands.GET:
        console.log("GET");
        break;
      case commands.LIST:
        console.log("LIST");
        break;
      case commands.PUT:
        console.log("PUT");
        break;
      default:
        help();
    }
  }
};

main();
