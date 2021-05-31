import React from 'react';


export default function Home() {

    const [restaurants, setRestaurants] = useState([]);
    return(
        <div className="mt-3">
            {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant._id} restaurant={restaurant}></RestaurantCard>
            ))}
        </div>
    )
}