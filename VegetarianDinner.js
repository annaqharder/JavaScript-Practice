function Menu(menu) {
    const menuNode = document.querySelector("#menu");
    const vegetarianOptions = menu.filter(
        (option) => option.isVegetarian === true
    );
    vegetarianOptions.forEach(option => {
        let dish = document.createElement('li');
        dish.textContent = option.name;
        menuNode.appendChild(dish)
    })
}

const menu = [
    {
        name: "Chicken Parmesan",
        isVegetarian: false
    },
    {
        name: "Stuffed Shells",
        isVegetarian: true
    },
    {
        name: "Spaghetti",
        isVegetarian: true
    },
    {
        name: "Tiramisu",
        isVegetarian: true
    }
]