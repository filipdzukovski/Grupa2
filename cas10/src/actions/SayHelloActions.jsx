export const sayHello = () => { // <- Action creator
  return {
    type: "SAY_HELLO",
    payload: "Hi and welcome to my First Redux App", // <- Action
  };
};

export const farewellUser = () => { 
  return {
    type: "FAREWELL_USER",
    payload: "Thank you for visiting have a nice day",
  };
};
