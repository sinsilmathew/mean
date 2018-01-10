function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = "Test Check";
    callback(name);
  }
  
  processUserInput(greeting);

  var data='test.json';
  console.log(data);