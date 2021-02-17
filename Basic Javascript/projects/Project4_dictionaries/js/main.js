function Europe() {
  var Country = {
    // Name: "Kingdom of Denmark",
    Name: "Denmark",
    Capital: "Copenhagen",
    Language: "Danish",
    Religion: "Christianity",
    Area: 42933,
    Population: 5837213,
    Currency: "EURO",
  };

  delete Country.Area;

  document.getElementById("outputText").innerText = Country.Name + " capital is " + Country.Capital;
}
