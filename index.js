function newImage(charPath, posLeft, posBottom, eventFlag) {
    let character = document.createElement('img');
    character.src = 'assets/' + charPath;
    character.style.position = 'fixed';
    character.style.left = posLeft + 'px';
    character.style.bottom = posBottom + 'px';
    document.body.append(character);

    if (eventFlag === 1) {
        character.addEventListener('dblclick', function() {
            character.remove();
        })
    }
}


newImage("green-character.gif", 100, 100, 0);
newImage("pine-tree.png", 450, 200, 0);
newImage("tree.png", 200, 300, 0);
newImage("pillar.png", 350, 100, 0);
newImage("crate.png", 150, 200, 0);
newImage("well.png", 500, 425, 0);

newImage("sword.png", 500, 405, 1);
newImage("shield.png", 165, 185, 1);
newImage("staff.png", 600, 100, 1);


const windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

console.log(windowWidth);

for (let i = 1; i <= windowWidth; i += 100) {
    windowHeight -= 100;
    console.log('height: ' + windowHeight);
    console.log('i: ' + i);
    newImage("sky.png", i, windowHeight, 0);
}