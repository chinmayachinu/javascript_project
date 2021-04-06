let image = document.getElementsByTagName('img')

let itemArray = ["./option1.png", "./option1.png", "./option1.png"
    , "./option1.png", "./option1.png", "./option1.png"
    , "./option1.png", "./option1.png", "./option1.png"];
let isCross = false;


for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function () {
        // image[i].src="./ox.png";
        handleClick(i);
        console.log(i + " is clicked")
    })
}




function handleClick(itemNumber) {
    if (itemArray[itemNumber] === "./option1.png") {
        itemArray[itemNumber] = isCross ? "./ox.png" : "./xx.png";
        isCross = !isCross;
        image[itemNumber].src = itemArray[itemNumber];
    }
    else {
        return alert("Already filled");
    }
    checkIsWinner();
}

function checkIsWinner() {
    if (itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== "./option1.png") {
        if (itemArray[0] === "./ox.png") { alert("O won"); }
        else { alert("X won"); }
        reset();
    }
    else if (itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5] && itemArray[3] !== "./option1.png") {
        if (itemArray[3] === "./ox.png") { alert("O won"); }
        else { alert("X won"); }
        reset();
    }
    else if (itemArray[6] === itemArray[7] && itemArray[6] === itemArray[8] && itemArray[6] !== "./option1.png") {
        if (itemArray[6] === "./ox.png") { alert("O won"); }
        else { alert("X won"); }
        reset();
    }
    else if (itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6] && itemArray[0] !== "./option1.png") {
        if (itemArray[0] === "./ox.png") { alert("O won"); }
        else { alert("X won"); }
        reset();
    }
    else if (itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7] && itemArray[1] !== "./option1.png") {
        if (itemArray[1] === "./ox.png") { alert("O won"); }
        else { alert("X won"); }
        reset();
    }
    else if (itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8] && itemArray[2] !== "./option1.png") {

        if (itemArray[2] === "./ox.png") { alert("O won"); }
        else { alert("X won"); }
        reset();
    }
    else if (itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8] && itemArray[0] !== "./option1.png") {

        if (itemArray[0] === "./ox.png") { alert("O won"); }
        else { alert("X won"); }
        reset();
    }
    else if (itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6] && itemArray[2] !== "./option1.png") {
        if (itemArray[2] === "./ox.png") { alert("O won"); }
        else { alert("X won"); }
        reset();
    }
    else {
        //alert("Draw");
    }
}

function reset() {
    /*for (let i = 0; i < image.length; i++) {
        image[i].src = "./option1.png";
    }
    let itemArray = ["./option1.png", "./option1.png", "./option1.png"
        , "./option1.png", "./option1.png", "./option1.png"
        , "./option1.png", "./option1.png", "./option1.png"];
    isCross = false;*/
    location.reload();
}

