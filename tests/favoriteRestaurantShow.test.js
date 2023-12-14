import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show';
import FavoriteRestaurantView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-view';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurant have been liked', () => {
    it('should render the information that no restaurant have been liked', () => {
      const favoriteRestaurants = {
        getAllRestaurant: jest.fn().mockImplementation(() => []),
      };

      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      const restaurants = [];
      presenter._displayRestaurants(restaurants);

      expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
    });

    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = {
        getAllRestaurant: jest.fn().mockImplementation(() => []),
      };

      // eslint-disable-next-line no-new
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
    });
  });
});
