let samjhana = {
  name: "SamJhana Bhattarai ",
  age: 20,
  hobby: "Reading,Writing",
  mobile: "9812345678",
  campus: "Sukuna Multiple Campus",
  email: "samjhanab@gmail.com",
  location: "BiratChowk, Morang",
  faculty: "BICTE",
  country: "Nepal",
  father: "Bilash Bhattarai",
  mother: "Gita Bhattarai",
  sister: "Kopila Bhattarai",
  image: "Surprise surprise;)",
  semester: "Fourth Semester",
};
let suraj = {
  Name: "Suraj Basnet ",
  Age: 25,
  Hobby: "Coding, Riding",
  Mobile: "9812345678",
  Campus: "Sukuna Multiple Campus",
  Faculty: "BICTE",
  Location: "Ilam",
  Country: "Nepal",
};
const ask = prompt("Do you want to know about samjhana ?");
if (samjhana[ask]) {
  document.write(samjhana[ask]);
} else if (suraj[ask]) {
  document.write(suraj[ask]);
} else {
  document.write("Please enter a valid request");
}
