// Place data (description, main image, images with 2-word names and 1-word descriptions)
const placesData = {
    place1: {
        name: "Board of Directors",
        shortDescription: "Leadership",
        mainImage: 'https://github.com/vishalkumarojha/monolith/blob/main/popout/image/mishra.jpeg?raw=true',
        mainImageCaption: "Our Leaders",
        images: [
            {src: 'https://github.com/vishalkumarojha/monolith/blob/main/popout/image/Untitled_design__1___1_-removebg-preview.png?raw=true', title: 'John Doe', description: 'CEO'},
            {src: 'https://github.com/vishalkumarojha/monolith/blob/main/popout/image/Untitled_design__1___1_-removebg-preview.png?raw=true', title: 'Jane Smith', description: 'CFO'},
            {src: 'https://github.com/vishalkumarojha/monolith/blob/main/popout/image/Untitled_design__1___1_-removebg-preview.png?raw=true', title: 'Robert Brown', description: 'CTO'}
        ]
    },
    place2: {
        name: "Operations Manager",
        shortDescription: "Efficient Planning",
        mainImage: 'https://via.placeholder.com/200x150/7f7fff',
        mainImageCaption: "Strategy",
        images: [
            {src: 'https://via.placeholder.com/200x150/7f7fff', title: 'Emily Davis', description: 'Manager'},
            {src: 'https://via.placeholder.com/200x150/ff7fff', title: 'Operations Team', description: 'Staff'}
        ]
    },
    // Add more place data as needed
    place3: {
        name: "Board of Directors",
        shortDescription: "Leadership",
        mainImage: 'https://via.placeholder.com/200x150/ff7f7f',
        mainImageCaption: "Our Leaders",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', title: 'John Doe', description: 'CEO'},
            {src: 'https://via.placeholder.com/200x150/ffdf7f', title: 'Jane Smith', description: 'CFO'},
            {src: 'https://via.placeholder.com/200x150/7fff7f', title: 'Robert Brown', description: 'CTO'}
        ]
    },
    place4: {
        name: "Board of Directors",
        shortDescription: "Leadership",
        mainImage: 'https://via.placeholder.com/200x150/ff7f7f',
        mainImageCaption: "Our Leaders",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', title: 'John Doe', description: 'CEO'},
            {src: 'https://via.placeholder.com/200x150/ffdf7f', title: 'Jane Smith', description: 'CFO'},
            {src: 'https://via.placeholder.com/200x150/7fff7f', title: 'Robert Brown', description: 'CTO'}
        ]
    },
    place5: {
        name: "Board of Directors",
        shortDescription: "Leadership",
        mainImage: 'https://via.placeholder.com/200x150/ff7f7f',
        mainImageCaption: "Our Leaders",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', title: 'John Doe', description: 'CEO'},
            {src: 'https://via.placeholder.com/200x150/ffdf7f', title: 'Jane Smith', description: 'CFO'},
            {src: 'https://via.placeholder.com/200x150/7fff7f', title: 'Robert Brown', description: 'CTO'}
        ]
    },
    place6: {
        name: "Board of Directors",
        shortDescription: "Leadership",
        mainImage: 'https://via.placeholder.com/200x150/ff7f7f',
        mainImageCaption: "Our Leaders",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', title: 'John Doe', description: 'CEO'},
            {src: 'https://via.placeholder.com/200x150/ffdf7f', title: 'Jane Smith', description: 'CFO'},
            {src: 'https://via.placeholder.com/200x150/7fff7f', title: 'Robert Brown', description: 'CTO'}
        ]
    },
    place7: {
        name: "Board of Directors",
        shortDescription: "Leadership",
        mainImage: 'https://via.placeholder.com/200x150/ff7f7f',
        mainImageCaption: "Our Leaders",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', title: 'John Doe', description: 'CEO'},
            {src: 'https://via.placeholder.com/200x150/ffdf7f', title: 'Jane Smith', description: 'CFO'},
            {src: 'https://via.placeholder.com/200x150/7fff7f', title: 'Robert Brown', description: 'CTO'}
        ]
    },
    place8: {
        name: "Board of Directors",
        shortDescription: "Leadership",
        mainImage: 'https://via.placeholder.com/200x150/ff7f7f',
        mainImageCaption: "Our Leaders",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', title: 'John Doe', description: 'CEO'},
            {src: 'https://via.placeholder.com/200x150/ffdf7f', title: 'Jane Smith', description: 'CFO'},
            {src: 'https://via.placeholder.com/200x150/7fff7f', title: 'Robert Brown', description: 'CTO'}
        ]
    },
    place9: {
        name: "Board of Directors",
        shortDescription: "Leadership",
        mainImage: 'https://via.placeholder.com/200x150/ff7f7f',
        mainImageCaption: "Our Leaders",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', title: 'John Doe', description: 'CEO'},
            {src: 'https://via.placeholder.com/200x150/ffdf7f', title: 'Jane Smith', description: 'CFO'},
            {src: 'https://via.placeholder.com/200x150/7fff7f', title: 'Robert Brown', description: 'CTO'}
        ]
    },
    place10: {
        name: "Board of Directors",
        shortDescription: "Leadership",
        mainImage: 'https://via.placeholder.com/200x150/ff7f7f',
        mainImageCaption: "Our Leaders",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', title: 'John Doe', description: 'CEO'},
            {src: 'https://via.placeholder.com/200x150/ffdf7f', title: 'Jane Smith', description: 'CFO'},
            {src: 'https://via.placeholder.com/200x150/7fff7f', title: 'Robert Brown', description: 'CTO'}
        ]
    },
};

// Function to display the place details and images
function showPlaceDetails(placeId) {
    const place = placesData[placeId];
    const gallery = document.getElementById('gallery');

    // HTML structure for the place content
    const placeContent = `
        <div class="place-description">
            <h2 class="place-title">${place.name}</h2>
            <p class="place-text">${place.shortDescription}</p>
        </div>
        <div class="main-image-container">
            <h3 class="main-title">${place.name}</h3>
            <p class="main-description">${place.shortDescription}</p>
            <img src="${place.mainImage}" class="main-image" alt="${place.name}">
            <p class="image-caption">${place.mainImageCaption}</p>
        </div>
        <div class="image-grid">
            ${place.images.map(image => `
                <div class="image-grid-item">
                    <img src="${image.src}" alt="${image.title}">
                    <p class="image-grid-title">${image.title}</p>
                    <p class="image-grid-description">${image.description}</p>
                </div>
            `).join('')}
        </div>
    `;

    // Injecting the generated HTML into the gallery div
    gallery.innerHTML = placeContent;
}
