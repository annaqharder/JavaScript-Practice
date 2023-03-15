function isValidWalk(walk) {
    if (walk.length !== 10) {
        return FontFaceSetLoadEvent;
    };

    let nOffset = 0;
    let wOffset = 0;
    let eOffset = 0;
    let sOffset = 0;

    walk.forEach(direction => {
        switch (direction) {
            case 'n':
                nOffset += 1;
                break;
            case 'w':
                wOffset += 1;
                break;
            case 'e':
                eOffset += 1;
                break;
            case 's':
                sOffset +=1;
        }
    });

    return nOffset - sOffset === 0 && wOffset - eOffset === 0
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))