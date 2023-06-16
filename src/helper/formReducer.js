const initialState = {
  firstName: "Abishek",
  middleName: "",
  lastName: "Parajuli",
  role: "Web Developer",
  town: "Haldibare",
  district: "Jhapa",
  country: "Nepal",
  bio: "I am an undergraduate Computer Science (BSc. CSIT) student at Tribhuvan University with a keen interest in Web Development and Software Engineering. With a good foundation in JavaScript.",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fname":
      return { ...state, firstName: action.inpValue };
    case "mname":
      return { ...state, middleName: action.inpValue };
    case "lname":
      return { ...state, lastName: action.inpValue };
    case "role":
      return { ...state, role: action.inpValue };
    case "town":
      return { ...state, town: action.inpValue };
    case "district":
      return { ...state, district: action.inpValue };
    case "country":
      return { ...state, country: action.inpValue };
    case "bio":
      return { ...state, bio: action.inpValue };
    default:
      return state;
  }
};

export { initialState, reducer };
