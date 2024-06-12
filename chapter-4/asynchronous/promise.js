const myPromise = new Promise((resolve) => resolve("Hello World"));

myPromise.then((result) => {
  console.log(result);
});

function isPasswordCorrect(password) {
  const passwordPromise = new Promise((resolve, reject) => {
    console.log("Password:", password);
    if (password === "123456") {
      return resolve("Password is correct!");
    }

    reject("Wrong Password!");
  });

  return passwordPromise;
}

isPasswordCorrect("123455")
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.error(reject));
