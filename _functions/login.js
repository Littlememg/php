exports.handler = (event, context, callback) => {
  console.log("---Form Data---");
  console.log(event.body);
  
  let result = "/"
  if (event.body == "accesscode=demo") {
    result = "/super-long-url/"
  }

  callback(null, {
    statusCode: 200,
    body: result
  });
}
