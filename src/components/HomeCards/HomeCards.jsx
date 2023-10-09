import { useEffect, useState } from "react";
import HomeCard from "../HomeCard/HomeCard";

const HomeCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCards(data));
    },[])


    return (
        <div className="container mx-auto text-center mt-10 mb-10">
            <h3 className="text-4xl font-bold text-red-500 pb-10">Our Premium Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                cards?.map(data=><HomeCard key={data.id} data={data}></HomeCard>)
            }
            </div>
        </div>
    );
};

export default HomeCards;