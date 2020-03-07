import React from 'react';
import PropTypes from 'prop-types';

function Food({name, image, rating}) {
    return (
        <div>
            <h1>I like {name}</h1>
            <img src={image} alt={name}/>
            <h3>{rating}
                / 5.0
            </h3>
        </div>
    )
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number
}

const foodLike = [
    {
        id: 1,
        name: "arar",
        image: "asdfasd",
        rating: 3.4
    }, {
        id: 2,
        name: "arar",
        image: "asdfasd",
        rating: 3.5
    }, {
        id: 3,
        name: "arar",
        image: "asdfasd",
        rating: 4
    }
]

function App() {
    return (
        <div className="App">
            {foodLike.map(dish => (<Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>))}
        </div>
    );
}

export default App;
