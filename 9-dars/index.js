// 1-Homework

let student = {
    firstName: "Salimjon",
    lastName: "Qahramonov",
    age: 16,
    region : `Uzbekistan`,
    course: "Fronted",
    id:100101,
  };
  
  if(student.age<=15){
    delete student.course
  }
  console.log(student);
  
  
  // 2-Homework
  
  let data = {
      name: "Phone",
      model: "iPhone",
      price: 700,
      quantity: 8
    };
    console.log(data.price * data.quantity);