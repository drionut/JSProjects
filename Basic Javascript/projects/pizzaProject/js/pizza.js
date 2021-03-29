function getReceipt() {
    var text = "<h3>Your Order: </h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text = text + selectedSize + "<br>";
        }
    }

    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 4;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Large Pizza") {
        selectedSize = 10;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 12;
    }
    runningTotal = sizeTotal;
    getVegetables(runningTotal, text);
}

function getVegetables(runningTotal, text) {
    var vegetableTotal = 0;
    var selectedVegetable = [];
    var vegetableArray = document.getElementsByClassName("vegetables");

    for (var i = 0; i < vegetableArray.length; i++) {
        if (vegetableArray[i].checked) {
            selectedVegetable.push(vegetableArray[i].value);
            text = text + vegetableArray[i].value + "<br>";
        }
    }

    var vegetableCount = selectedVegetable.length;
    if (vegetableTotal > 1) {
        vegetableTotal = vegetableCount - 1;
    } else {
        vegetableCount = 0;
    }

    runningTotal = runningTotal + vegetableTotal;

    getTopping(runningTotal, text);
}

function getTopping(runningTotal, text) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");

    for (var i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            selectedTopping.push(toppingArray[i].value);
            text = text + toppingArray[i].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;
    if (toppingTotal > 1) {
        toppingTotal = toppingCount - 1;
    } else {
        toppingTotal = 0;
    }

    runningTotal = runningTotal + toppingTotal;

    document.getElementById("showText").innerHTML = text;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}
