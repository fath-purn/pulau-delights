import TheRestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
        <section class="hero-element" id="hero">
          <img src="./hero-image_4.jpg" width="450" alt="Restaurant" />
          <h2>Pulau Delights</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, labore perferendis praesentium dolorem voluptatibus.</p>
          <a href="#maincontent" class="skip-link-content">List Restaurant</a>
        </section>

        <!-- Daftar Restorant -->
        <section class="restorant-list" id="maincontent">
            <h2>Daftar Restaurant</h2>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.restaurantList();
    const restaurantContainer = document.querySelector('#maincontent');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
    });

    const skipLink = document.querySelector('.skip-link');
    skipLink.href = '#maincontent';
    // TODO: tampilkan restaurant di dalam DOM
  },
};

export default RestaurantList;
