function newImage(charPath, posLeft, posBottom, eventFlag) {
    let character = document.createElement('img');
    character.src = 'assets/' + charPath;
    character.style.position = 'fixed';
    character.style.left = posLeft;
    character.style.bottom = posBottom;
    document.body.append(character);

    if (eventFlag === 1) {
        character.addEventListener('click', function() {
            character.remove();
        })
    }
}


newImage("green-character.gif", "100px", "100px", 0);
newImage("pine-tree.png", "450px", "200px", 0);
newImage("tree.png", "200px", "300px", 0);
newImage("pillar.png", "350px", "100px", 0);
newImage("crate.png", "150px", "200px", 0);
newImage("well.png", "500px", "425px", 0);

newImage("sword.png", "500px", "405px", 1);
newImage("shield.png", "165px", "185px", 1);
newImage("staff.png", "600px", "100px", 1);

