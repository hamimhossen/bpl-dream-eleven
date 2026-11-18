import React, { use, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
import { toast } from "react-toastify";
const Player = ({
    player,
    setCoin,
    coin,
    selectedPlayers,
    setSelectedPlayers,
}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () => {
        const newCoin = coin - player.price;
        if (newCoin >= 0) {
            setCoin(coin - player.price);
        } else {
            toast.error("Not enough coin to purchase this player");
            return;
        }
        toast.success(`${player.playerName} is selected`);
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers, player]);
        console.log(selectedPlayers);
    };
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className="pt-5 pl-5 pr-5 ">
                    <img
                        className="rounded-lg"
                        src={player.playerImage}
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h4 className="card-title">
                        <FaUser></FaUser> {player.playerName}
                    </h4>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <IoFlag></IoFlag>
                            <p>{player.playerCountry}</p>
                        </div>

                        <button className="btn btn-xs">
                            {player.playerType}
                        </button>
                    </div>
                    <div className="divider"></div>
                    <h2 className="font-bold">Rating: {player.rating}</h2>
                    <div className="flex justify-between">
                        <p className="font-semibold">{player.battingStyle}</p>
                        <p className="text-end">{player.bowlingStyle}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="font-medium">Price: ${player.price}</p>
                        <button
                            className="btn btn-xs"
                            onClick={handleChoosePlayer}
                            disabled={isSelected === true ? true : false}
                        >
                            {isSelected === true ? "Selected" : "Choose Player"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
