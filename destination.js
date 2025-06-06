document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const placeKey = urlParams.get("place");

  const destinations = {
    "nairobi": {
      title: "Nairobi - The Heartbeat of Kenya",
      description: `
        Nairobi, the vibrant capital of Kenya, is a modern city with unmatched wildlife access. Imagine sipping cocktails at a rooftop bar with giraffes roaming nearby, or experiencing world-class museums, cuisine, and luxury shopping, all just minutes from Nairobi National Park. Nairobi blends raw African beauty with luxurious urban living, offering travelers a truly unique experience.
      `,
      howToReach: "Fly into Jomo Kenyatta International Airport. Uber and private car pickups available.",
      image: "img/nairobi.jpg",
      packages: [
        {
          name: "Giraffe Manor Experience",
          image: "img/giraffe-manor.jpg",
          description: "Stay in a luxury colonial-style manor where giraffes visit your breakfast table. Includes full-board and private game drives.",
          price: "$1,250 / Night",
          location: "Lang’ata, Nairobi"
        },
        {
          name: "Nairobi Helicopter City Tour",
          image: "img/heli-tour.jpg",
          description: "A premium chopper ride over Nairobi National Park and the city skyline. Champagne included.",
          price: "$850 / Person",
          location: "Wilson Airport, Nairobi"
        },
        {
          name: "Luxury Safari at Emakoko Lodge",
          image: "img/emakoko.jpg",
          description: "Stay in a riverside luxury lodge inside Nairobi National Park. Enjoy game drives, massages, and fine dining.",
          price: "$1,400 / Night",
          location: "Inside Nairobi National Park"
        }
      ]
    },
    // Add other destinations here with the same structure...
  };

  const destination = destinations[placeKey];

  const container = document.getElementById("destination-content");

  if (!destination) {
    document.getElementById("destination-title").textContent = "Destination Not Found";
    container.innerHTML = "<p>Sorry, we couldn't find that destination. Please go back and choose a valid place.</p>";
    return;
  }

  document.getElementById("destination-title").textContent = destination.title;

  const hero = `
    <div class="text-center mb-5">
      <img src="${destination.image}" alt="${destination.title}" class="img-fluid hero-img">
    </div>
    <section class="mb-5">
      <h2 class="section-title">Description</h2>
      <p class="fs-5">${destination.description}</p>
      <h2 class="section-title">How to Reach</h2>
      <p class="fs-5">${destination.howToReach}</p>
    </section>
  `;

  const packages = destination.packages.map(pkg => `
    <div class="col-md-4 mb-4">
      <div class="card package-card h-100">
        <img src="${pkg.image}" class="card-img-top" alt="${pkg.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${pkg.name}</h5>
          <p class="card-text">${pkg.description}</p>
          <div class="mt-auto">
            <p class="fw-bold mb-1 text-primary">${pkg.price}</p>
            <p class="text-muted">${pkg.location}</p>
            <a href="#" class="btn btn-dark w-100 mt-2">Explore Package</a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  const packageSection = `
    <section>
      <h2 class="section-title">Premium Packages</h2>
      <div class="row">
        ${packages}
      </div>
    </section>
  `;

  container.innerHTML = hero + packageSection;
});

