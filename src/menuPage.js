const menuPage = () => {
    const menuContainer = document.getElementById('content');
    menuContainer.innerHTML = '';
    menuContainer.classList.add('menuContainer');

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Menu'
    menuContainer.appendChild(menuHeader);

    const appetizers = [
        'Avocado Bruschetta',
        'Crispy Cauliflower Bites',
        'Mediterranean Hummus Platter'
    ]

    const mainCourses = [
        'Chickpea Curry',
        'Lentil Shepard\'s Pie',
        'Vegan Paella'
    ]

    const desserts = [
        'Vegan Tiramisu',
        'Vegan Cheesecake',
        'Chocolate Cake'
    ]
    
    const menuSections = [
        {title: 'Appetizer', items: appetizers},
        {title: 'Main Course', items: mainCourses},
        {title: 'Dessert', items: desserts}
    ]

    menuSections.forEach(section => {
        const sectionHeader = document.createElement('h3');
        sectionHeader.textContent = section.title;
        menuContainer.appendChild(sectionHeader);

        section.items.forEach(item => {
            const menuItem = document.createElement('p');
            menuItem.textContent = item;
            menuContainer.appendChild(menuItem);
        })
    }
    )
}

export default menuPage;