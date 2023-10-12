export const sayHello = () => { // <- Action creator
  return {
    type: "SAY_HELLO",
    payload: "Hi and welcome to my First Redux App", // <- Action
  };
};
