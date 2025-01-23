const upcomingEvents = [
    {
        title: "Tech Conference 2023",
        date: "2023-11-15",
        time: "10:00 AM",
        description: "Join us for a day of tech talks and networking.",
        organizers: "Tech Org",
        winners: "N/A",
        image: "path/to/image1.jpg", // Replace with actual image path
        photos: ["path/to/photo1.jpg", "path/to/photo2.jpg"] // Replace with actual photo paths
    },
    {
        title: "Music Festival 2023",
        date: "2023-12-01",
        time: "5:00 PM",
        description: "Enjoy live music from various artists.",
        organizers: "Music Lovers",
        winners: "N/A",
        image: "path/to/image3.jpg", // Replace with actual image path
        photos: ["path/to/photo5.jpg", "path/to/photo6.jpg"] // Replace with actual photo paths
    }
];

const pastEvents = [
    {
        title: "Art Exhibition 2023",
        date: "2023-10-01",
        description: "A showcase of local artists.",
        organizers: "Art Society",
        winners: "Best Artist: John Doe",
        image: "path/to/image2.jpg", // Replace with actual image path
        photos: ["path/to/photo3.jpg", "path/to/photo4.jpg"] // Replace with actual photo paths
    },
    {
        title: "Charity Run 2023",
        date: "2023-09-15",
        description: "A charity run to support local charities.",
        organizers: "Charity Org",
        winners: "Fastest Runner: Jane Smith",
        image: "path/to/image4.jpg", // Replace with actual image path
        photos: ["path/to/photo7.jpg", "path/to/photo8.jpg"] // Replace with actual photo paths
    }
];

function populateEvents() {
    const upcomingContainer = document.getElementById('upcoming-events');
    const pastContainer = document.getElementById('past-events');

    upcomingEvents.forEach(event => {
        const eventDiv = createEventDiv(event, true);
        upcomingContainer.appendChild(eventDiv);
    });

    pastEvents.forEach(event => {
        const eventDiv = createEventDiv(event, false);
        pastContainer.appendChild(eventDiv);
    });
}

function createEventDiv(event, isUpcoming) {
    const eventDiv = document.createElement('div');
    eventDiv.className = 'event';
    eventDiv.innerHTML = `
        <img src="${event.image}" alt="${event.title}">
        <h3>${event.title}</h3>
        <p>${event.date}${isUpcoming ? ` at ${event.time}` : ''}</p>
    `;
    eventDiv.onclick = () => openModal(event);
    return eventDiv;
}

function openModal(event) {
    document.getElementById('event-title').innerText = event.title;
    document.getElementById('event-description').innerText = event.description;
    document.getElementById('event-organizers').innerText = event.organizers;
    document.getElementById('event-winners').innerText = event.winners;

    const photosContainer = document.getElementById('event-photos');
    photosContainer.innerHTML = ''; // Clear previous photos
    const showPhotosButton = document.getElementById('show-photos');

    if (event.photos.length > 0) {
        showPhotosButton.style.display = 'block';
        showPhotosButton.onclick = () => {
            photosContainer.style.display = photosContainer.style.display === 'block' ? 'none' : 'block';
            if (photosContainer.style.display === 'block') {
                event.photos.forEach(photo => {
                    const img = document.createElement('img');
                    img.src = photo;
                    img.style.width = '100px'; // Adjust size as needed
                    img.style.margin = '5px';
                    photosContainer.appendChild(img);
                });
            }
        };
    } else {
        showPhotosButton.style.display = 'none';
    }

    const modal = document.getElementById('event-modal');
    modal.style.display = 'block';
}

const closeModal = () => {
    const modal = document.getElementById('event-modal');
    modal.style.display = 'none';
};

document.querySelector('.close').onclick = closeModal;
window.onclick = (event) => {
    const modal = document.getElementById('event-modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Populate events on page load
window.onload = populateEvents;
