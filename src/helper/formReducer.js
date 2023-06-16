const initialState = {
  firstName: "Roronoa",
  middleName: "",
  lastName: "Zoro",
  role: "Swordsman x King of Hell",
  town: "Shimotsuki",
  district: "East Blue",
  country: "One Piece World",
  bio: "Roronoa Zoro, also known as 'Pirate Hunter' Zoro, is a main combatant of the Straw Hat Pirates, publicly recognized as the right-hand man of his captain Monkey D. Luffy.",
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
