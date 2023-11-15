function newImage(charPath, posLeft, posBottom) {
    let character = document.createElement('img');
    character.src = 'assets/' + charPath;
    character.style.position = 'fixed';
    character.style.left = posLeft;
    character.style.bottom = posBottom;
    document.body.append(character);
}

newImage("green-character.gif", "100px", "100px");
newImage("pine-tree.png", "450px", "200px");


