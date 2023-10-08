var filterRestaurants = function (restaurants, veganFriendly, maxPrice, maxDistance) {
    return restaurants
        .filter(([id, rating, vegan, price, distance]) =>
            (!veganFriendly || vegan === veganFriendly) &&
            price <= maxPrice &&
            distance <= maxDistance
        )
        .sort(([id1, rating1], [id2, rating2]) =>
            rating2 - rating1 || id2 - id1
        )
        .map(([id]) => id);
};
const restaurants = [
    [1, 4, 1, 40, 10],
    [2, 8, 0, 50, 5],
    [3, 8, 1, 30, 4],
    [4, 10, 0, 10, 3],
    [5, 1, 1, 15, 1]
];
const result = filterRestaurants(restaurants, 1, 50, 10);
console.log(result);

restaurants.map(([id, id1]) => {
    console.log(id, id1);
})