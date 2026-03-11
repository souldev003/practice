const generateNumber = () => {
  const number = Math.ceil(Math.random() * 100);
  localStorage.setItem("number", number);
  console.log(number);
};

// generateNumber();

const showBtn = () => {
  const number = localStorage.getItem("number");
  console.log(number);
};

const setItemToLS = () => {
  const customer = {
    name: "hasan",
    age: "22",
    isStudent: true,
  };

  const customerString = JSON.stringify(customer);
  const customerObj = JSON.parse(customerString);
  console.log(customerString, customerObj);
};
