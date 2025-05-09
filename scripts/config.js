
const mainBannerSource = "images/sakura_shaders.jpg";
const secondaryBannerSource = "images/spawn_portal.jpg";

const cardImageSource1 = "images/bern_town.jpg";
const cardImageSource2 = "images/wool_farm.jpg";
const cardImageSource3 = "images/city_rp.jpg";

const galleryImageSource1 = "images/bamboo_house.jpg";
const galleryImageSource2 = "images/weed_farm.jpg";
const galleryImageSource3 = "images/andtyryrtu_lever.jpg";
const galleryImageSource4 = "images/pablos.jpg";
const galleryImageSource5 = "images/justik_charity.jpg";
const galleryImageSource6 = "images/amogus.jpg";

const galleryImageSources = [galleryImageSource1, galleryImageSource2, galleryImageSource3,
    galleryImageSource4, galleryImageSource5, galleryImageSource6];

const cardImageSources = [cardImageSource1, cardImageSource2, cardImageSource3];

document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll('[class*="e-gallery-image elementor-gallery-item__image"]');
    galleryImages.forEach((el, i) => {
        el.setAttribute("data-thumbnail", galleryImageSources[i]);

    });
})

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".twbb_cta-image-html-tag");
    cards.forEach((el, i) => {
        const img = el.querySelector("img")
        img.src = cardImageSources[i];
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const secondaryBanner = document.getElementById("secondary_banner");
    secondaryBanner.src = secondaryBannerSource;
    console.log("Secondary Banner done");
    console.log(secondaryBanner.source);
})

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector('[class*="elementor-motion-effects-layer"]').style.backgroundImage = `url('${mainBannerSource}')`;

    }, 100);
})

