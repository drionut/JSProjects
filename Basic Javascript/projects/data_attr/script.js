function displayType(character) {
  var characterType = character.getAttribute("data-character-type");
  console.log(characterType + " is in the " + character.innerHTML + " universe");
}
