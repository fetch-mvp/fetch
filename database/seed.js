const faker = require('faker');

const pics = [
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/beagle.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/chowcow.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/corgi.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/germanshepherd.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/goldenR.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/goldenretrieversheperd.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/pitbull.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/popeye.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/shiba-inu-corgi-mix.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/shiba.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/siberian-husky-price.jpg"
];

const data = (num) => {
  let arr = []
  for (var i = 1; i <= num; i++) {
    let user = {};
    let ending = ["Dawg", 'Doge', 'Doogle'];
    let randomIndex = (range) => Math.floor(Math.random() * range + 1)
    let username = faker.name.firstName() + ending[randomIndex(2)];
    let password = "password";
    let email = `${username}@google.com`;
    let gender = ['female', 'male'];
    let location = ["Los Angeles", "Glendale", "South Pasadena", "Santa Monica", "Venice" ];
    user = {
      id: i,
      username: username,
      password: password,
      email: email,
      preferences: [],
      matches: [],
      images: [pics[i]],
      animalgender: gender[randomIndex(1)],
      description: `I'm just a small town dog that needs some new friends`,
      location: location[randomIndex(4)]
    }
    console.log(user)
    arr.push(user)
    user = {}
  }
  return arr
}
console.log(data(3))
module.exports = data;

