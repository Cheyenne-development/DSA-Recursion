const emp = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: { Steve: "", Kyle: "", Andra: "" },
      Zhao: { Richie: 0, Sofia: 0, Jen: 0 },
    },
    Schrage: {
      VanDyck: { Sabrina: 0, Michelle: 0, Josh: 0 },
      Swain: { Blanch: 0, Tom: 0, Joe: 0 },
    },
    Sandberg: {
      Goler: { Eddie: 0, Julie: 0, Annie: 0 },
      Hernandez: { Rowi: 0, Inga: 0, Morgan: 0 },
      Moissinac: { Amy: 0, Chuck: 0, Vinni: 0 },
      Kelley: { Eric: 0, Ana: 0, Wes: 0 },
    },
  },
};

function displayObject(data, tabs = 0) {
  let fullString = ""; // We'll be recursively concatenating the object keys onto our string
  let tabString = ""; // Used to hold the number of \t characters we need depending on how deep into the recursion we are

  for (let i = 0; i < tabs; i++) {
    // Generate the correct number of \t characters
    tabString += "\t";
  }

  for (let el in data) {
    fullString += `\n${tabString}${el} ${displayObject(data[el], tabs + 1)}`;
  }

  return fullString;
}

console.log(displayObject(emp));
