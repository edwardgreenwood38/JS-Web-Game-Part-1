function newImage(charPath, posLeft, posBottom, eventFlag, zindex) {
    let character = document.createElement('img');
    character.src = 'assets/' + charPath;
    character.style.position = 'fixed';
    character.style.left = posLeft + 'px';
    character.style.bottom = posBottom + 'px';
    character.style.zIndex = zindex;
    document.body.append(character);

    if (eventFlag === 1) {
        character.addEventListener('dblclick', function() {
            character.remove();
        })
    }
}


newImage("green-character.gif", 100, 100, 0, 1);
newImage("pine-tree.png", 450, 200, 0, 1);
newImage("tree.png", 200, 300, 0, 1);
newImage("pillar.png", 350, 100, 0, 1);
newImage("crate.png", 150, 200, 0, 1);
newImage("well.png", 500, 425, 0, 1);

newImage("sword.png", 500, 405, 1, 1);
newImage("shield.png", 165, 185, 1, 1);
newImage("staff.png", 600, 100, 1, 1);



// bonus section

for(let j = window.innerHeight; j > window.innerHeight - 500; j -= 100) {
    for (let i = 1; i <= window.innerWidth; i += 100) {
        newImage("sky.png", i, j, 0, -10);
    }
}


for(let j = 1; j < window.innerHeight - 400; j += 100) {
    for (let i = 1; i <= window.innerWidth; i += 100) {
        newImage("grass.png", i, j, 0, -10);
    }
}
