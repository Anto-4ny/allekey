// destination.js

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const placeKey = urlParams.get("place");

  const destinations = {
    "nairobi": {
      title: "Nairobi - The Heartbeat of Kenya",
      description: `
        Nairobi is Kenya’s capital and largest city. Explore national parks, modern culture, nightlife, and the only city with a safari park inside it — Nairobi National Park.
      `,
      howToReach: "Fly into Jomo Kenyatta International Airport. Local taxis or Uber are readily available.",
      image: "img/nairobi.jpg"
    },
    "mombasa": {
      title: "Mombasa - Coastal Charm and Swahili Culture",
      description: `
        Mombasa is a coastal paradise famous for its white sandy beaches, historical forts, and rich Swahili culture. Enjoy snorkeling, dhow rides, and vibrant nightlife.
      `,
      howToReach: "Fly into Moi International Airport or take the SGR train from Nairobi.",
      image: "img/mombasa.jpg"
    },
    "diani": {
      title: "Diani Beach - Serenity by the Sea",
      description: `
        Diani is one of Africa’s top beach destinations, offering crystal clear waters, coral reefs, skydiving, and top-tier resorts.
      `,
      howToReach: "Fly into Ukunda Airstrip or drive from Mombasa (about 45 minutes).",
      image: "img/diani.jpg"
    },
    "maasai-mara": {
      title: "Maasai Mara - The Ultimate Safari Experience",
      description: `
        Home of the Great Migration, Maasai Mara is the crown jewel of Kenya’s wildlife parks. See lions, elephants, cheetahs, and more in their natural habitat.
      `,
      howToReach: "Fly into Mara airstrips or drive (~5-6 hours) from Nairobi.",
      image: "img/maasai-mara.jpg"
    },
    "naivasha": {
      title: "Naivasha - Lakeside Getaway",
      description: `
        Naivasha offers freshwater adventures, boat rides, Crescent Island walks with giraffes, and Hell's Gate hiking and biking trails.
      `,
      howToReach: "Only 1.5 hours from Nairobi by car or shuttle.",
      image: "img/naivasha.jpg"
    },
    "kisumu": {
      title: "Kisumu - Lake Victoria's Gem",
      description: `
        Kisumu is known for its waterfront charm, fishing culture, and peaceful lakeside sunsets. Visit Dunga Beach, Impala Sanctuary, and the museum.
      `,
      howToReach: "Fly from Nairobi to Kisumu International Airport or take a long-distance bus (~7 hrs).",
      image: "img/kisumu.jpg"
    }
  };

  const destination = destinations[placeKey];

  if (!destination) {
    document.getElementById("destination-title").textContent = "Destination Not Found";
    document.getElementById("destination-content").innerHTML = "<p>Sorry, we couldn't find that destination. Please go back and choose a valid place.</p>";
    return;
  }

  // Set the title
  document.getElementById("destination-title").textContent = destination.title;

  // Set the content
  document.getElementById("destination-content").innerHTML = `
    <img src="${destination.image}" alt="${destination.title}" style="width:100%; max-height: 400px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">
    <section>
      <h2>Description</h2>
      <p>${destination.description}</p>
    </section>
    <section>
      <h2>How to Reach</h2>
      <p>${destination.howToReach}</p>
    </section>
  `;
});
