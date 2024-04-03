function logObjectProperties(obj:any) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
  
  // Example usage:
  const person = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  };
  
  logObjectProperties(person);
  