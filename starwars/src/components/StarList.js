import React, {useState, useEffect} from "react";
import axios from "axios";
import StarCard from './StarCard';

const StarList = () => {
    const [starData, setStarData] = useState([]);

    useEffect(() => {
        axios
        .get("https://swapi.co/api/people/")
        .then((res) => {setStarData(res.data.results);
        })
        .catch(err => console.error(err));
    }, []); 
    console.log(starData);
    return  (
        <div className="Star">
            {starData.map(star => {
                return (
                    console.log(star.name + star.height + "starData from StarList"),
                    <StarCard name={star.name} height={star.height} weight={star.mass} gender={star.gender}
                    />
                )
            })}
        </div>)
}

export default StarList;