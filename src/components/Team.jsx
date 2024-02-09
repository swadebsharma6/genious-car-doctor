import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";


const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(()=>{
        fetch(`https://genius-car-server-sooty.vercel.app/team`)
        .then(res => res.json())
        .then(data => setTeam(data))
    }, [])

    return (
        <section className="mb-16">
        <div className="max-w-2xl mx-auto text-center p-4 my-10 space-y-3">
        <p className="text-xl font-bold text-orange-500">Team</p>
        <h2 className="text-4xl font-bold">Meet Our Team</h2>
        <p className="text-lg font-medium">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {
                team.map(tem => <TeamCard
                    key={tem._id}
                    tem={tem}
                    ></TeamCard>)
            }
        </div>
        </section>
    );
};

export default Team;