// sets - primative JS type

function foodTruckFestival(menus) {
    let flatMenus = menus.flat();

    let combinedMenu = new Set();
    flatMenus.forEach(item => {
        combinedMenu.add(item);
    });

    const menuNode = document.querySelector("#combined-menu");
    for (let item of combinedMenu) {
        let foodNode = document.createElement('li')
        menuNode.appendChild(foodNode)
    }
}

foodTruckFestival([["Tacos", "Burgers"], ["Pizza"], ["Burgers, Fries"]])
