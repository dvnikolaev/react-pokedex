export const getClassForType = (types) => {
  let type;

  if(types[0].type.name === 'normal' && types[1]) {
    type = types[1].type.name;
  } else {
    type = types[0].type.name;
  }


  switch (type) {
    case "fire":
      return "card--fire";
    case "water":
      return "card--water";
    case "electric":
      return "card--electric";
    case "poison":
      return "card--poison";
    case "flying":
      return "card--flying";
    case "bug":
      return "card--bug";
    case "grass":
      return "card--grass";
    case "ground":
      return "card--ground";
    case "fighting":
      return "card--fighting";
    case "rock":
      return "card--rock";
    case "ghost":
      return "card--ghost";
    case "steel":
      return "card--steel";
    case "psychic":
      return "card--psychic";
    case "dragon":
      return "card--dragon";
    case "ice":
      return "card--ice";
    case "dark":
      return "card--dark";
    case "fairy":
      return "card--fairy";
    case "shadow":
      return "card--shadow";
    default:
      return "card--normal";
  }
};
