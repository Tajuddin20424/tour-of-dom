const sections = document.querySelectorAll('section');
for(const section of sections) {
    // console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

const placeContainer = document.getElementById('places-container');
placeContainer.classList.add('text-center');
placeContainer.classList.remove('lerge-text');


