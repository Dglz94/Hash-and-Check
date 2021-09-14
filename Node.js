const bycrpt = require("bcryptjs");

const password = "mypass123";
const saltRounds = 10;

//generate hash string
bycrpt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    throw err;
  } else {
    bycrpt.hash(password, salt, (err, hash) => {
      if (err) {
        throw err;
      } else {
        console.log(hash);
      }
    });
  }
});

const hash = "$2a$10$gIEWwo0LFQfpPlDbT9ptUOPbDCplhnId5juSZQLqAJmU84t1AZ1Wy";
const passwordEnteredByuser = "BigBoi123";

//Check password
bycrpt.compare(passwordEnteredByuser, hash, (err, isMatch) => {
  if (err) {
    throw err;
  } else if (!isMatch) {
    console.log("Password doesnt match");
  } else {
    console.log("Password matches!");
  }
});
