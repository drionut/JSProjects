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
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        selectedSize = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    getVegetables(runningTotal, text);
}

function getVegetables(runningTotal, text) {
    // var vegetableTotal = 0;
    // var selectedVegetable = [];
    var veggiesCount = 0;
    var vegetableArray = document.getElementsByClassName("vegetables");

    for (var i = 0; i < vegetableArray.length; i++) {
        if (vegetableArray[i].checked) {
            // selectedVegetable.push(vegetableArray[i].value);
            veggiesCount += 1;
            text = text + vegetableArray[i].value + "<br>";
        }
    }

    // Sorry - No discount on veggies this year due to COVID 19

    // var vegetableCount = selectedVegetable.length;
    // if (vegetableTotal > 1) {
    //     vegetableTotal = vegetableCount - 1;
    // } else {
    //     vegetableCount = 0;
    // }

    runningTotal = runningTotal + veggiesCount;
    getTopping(runningTotal, text);
}

function getTopping(runningTotal, text) {
    var toppingCount = 0;
    // var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");

    for (var i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            // selectedTopping.push(toppingArray[i].value);
            text = text + toppingArray[i].value + "<br>";
            toppingCount += 1;
        }
    }

    // var toppingCount = selectedTopping.length;

    // some discount
    if (toppingCount > 1) {
        toppingCount = toppingCount - 1;
    } else {
        toppingCount = 0;
    }

    runningTotal = runningTotal + toppingCount;

    document.getElementById("showText").innerHTML = text;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}
