
const contactPage = () => {
    const contactContainer = document.getElementById('content');
    contactContainer.innerHTML = '';
    contactContainer.classList.add('contactPage');

    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact';
    contactContainer.appendChild(contactHeader);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Phone: +358 454902973';
    contactContainer.appendChild(phoneNumber);

    const address = document.createElement('p');
    address.textContent = 'Address: Suonenjoentie 9 Äänekoivisto'
    contactContainer.appendChild(address);
}   

export default contactPage;