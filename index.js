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
newImage("tree.png", "200px", "300px");
newImage("pillar.png", "350px", "100px");
newImage("crate.png", "150px", "200px");
newImage("well.png", "500px", "425px");



