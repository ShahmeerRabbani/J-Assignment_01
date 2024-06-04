// Question No 01

const myBioData = {
  name: `Shahmeer Rabbani`,
  age: 20,
  email: `shahmeersaleem324@gmail.com`,
  address: `Karachi, Pakistan`,
  institute: `Jawan Pakistan`,
  phone: `+92 317 2980810`,
  education: `Intermediate`,
};

document.write(
  `Name: ${myBioData.name} <br><br>
   Age: ${myBioData.age} <br><br> 
   Email: <a href="shahmeersaleem324@gmail.com">${myBioData.email}</a> <br><br> 
   Address: ${myBioData.address} <br><br> 
   Institute Name: ${myBioData.institute} <br><br> 
   Phone Number: ${myBioData.phone} <br><br> 
   Education: ${myBioData.education}
   `
);

// Question No 02

const math = 70;
const Physics = 80;
const Chemistry = 90;
const Biology = 85;
const English = 90;

const total = math + Physics + Chemistry + Biology + English;

const percentage = (total / 500) * 100;

let grade;
if (percentage >= 80) {
  grade = "A+";
} else if (percentage >= 70) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 50) {
  grade = "C";
} else {
  grade = "F";
}

document.write(
  `<h1>MarkSheet</h1>
  Marks in Math: ${math}<br><br>
  Marks in Physics: ${Physics}<br><br>
  Marks in Chemistry: ${Chemistry}<br><br>
  Marks in Biology: ${Biology}<br><br>
  Marks in English: ${English}<br><br>
  Total Marks: ${total}<br><br>
  Percentage: ${percentage}%<br><br>
  Grade: ${grade}
  `
);


// Question No 03


// var fName = 'Shahmeer';

// console.log(fName);

// {
//   var fName = 'Rabbani';
// }
// console.log(fName)


// let fName = 'Shahmeer';

// console.log(fName);

// {
//   fName = 'Rabbani';
//   console.log(fName)
// }


// const fName = 'Shahmeer';

// console.log(fName);


//   fName = 'Rabbani';
//   console.log(fName)


// function abc(){
//   const name = 'shahmeer'
//   console.log(name)
// }

// abc()
