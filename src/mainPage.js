function mainPage() {
    const landingPage = document.getElementById('content')
    landingPage.classList.add('landingPage');
    landingPage.innerHTML = '';
    
    const title = document.createElement('h2');
    title.textContent = 'Root & Blossom';



    const openingHoursContainer = document.createElement('div');

    const openingHoursHeader = document.createElement('h3');
    openingHoursHeader.textContent = 'Opening Hours';

    const openingHoursMonToSat = document.createElement('p')
    openingHoursMonToSat.textContent = 'Monday - Saturday: 12am - 10pm';
    
    const openingHoursSunday = document.createElement('p')
    openingHoursSunday.textContent = 'Sunday: Closed';

    openingHoursContainer.appendChild(openingHoursHeader);
    openingHoursContainer.appendChild(openingHoursMonToSat);
    openingHoursContainer.appendChild(openingHoursSunday);

    landingPage.appendChild(title);
    landingPage.appendChild(openingHoursContainer);
};

export default mainPage;