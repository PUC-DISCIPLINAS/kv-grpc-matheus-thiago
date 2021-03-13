const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("kv.proto", {});
const kvPackage = grpc.loadPackageDefinition(packageDef).kvPackage;

const commands = {
  GET: "GET",
  LIST: "LIST",
  PUT: "PUT",
};

const client = new kvPackage.KeyValue(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

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

const get = () => {
  const userKey = process.argv[3];
  if (userKey) {
    client.get({ key: userKey }, (err, response) => {
      if (response) {
        console.log("Item: ", response.value);
      } else {
        console.log("Couldn't find the key ", userKey);
      }
    });
  } else {
    console.log("\nPlease, type a key to search");
  }
};

const put = () => {
  const userKey = process.argv[3];
  const userVal = process.argv[4];
  if (userKey && userVal) {
    client.put({ key: userKey, value: userVal }, (err, response) => {
      if (response)
        console.log(
          "Item criado: { \n\tkey:",
          response.key,
          "\n\tvalue: ",
          response.value,
          "\n}"
        );
        else 
          console.log("\n This key already exists, please try another one")       
    });
  } else {
    console.log("\nPlease, type a key and a value to add");
  }
};

const list = () => {
  const call = client.getAllKeysStream();
  call.on("data", (item) => {
    console.log("item -> key: ", item.key, "\tvalue: ", item.value);
  });
  call.on("end", () => {
    console.log("\n======= end =======\n");
  });
  call.on("error", () => {
    console.log("Couldn't connect to server");
  });
};

const main = () => {
  const command = process.argv[2];
  if (!command) {
    help();
  } else {
    switch (command.toUpperCase()) {
      case commands.GET:
        get();
        break;
      case commands.LIST:
        list();
        break;
      case commands.PUT:
        put();
        break;
      default:
        help();
    }
  }
};

main();
