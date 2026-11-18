import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise, setCoin, coin }) => {
    const players = use(playerPromise);
    console.log(players);
    const [selectedType, setSelectedType] = useState("available");
    console.log(selectedType, "selected");
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    return (
        <div>
            {/* <h2>{players.length}</h2> */}
            <div className="px-10 flex justify-between mb-4">
                {selectedType == "available" ? (
                    <h2 className="text-2xl font-bold">Available Players</h2>
                ) : (
                    <h2 className="text-2xl font-bold ">
                        Selected Players ({selectedPlayers.length}/
                        {players.length})
                    </h2>
                )}
                <div className="">
                    <button
                        onClick={() => setSelectedType("available")}
                        className={`btn ${selectedType == "available" ? "bg-[#E7FE29]" : "btn"} border border-r-0 rounded-lg rounded-r-none`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setSelectedType("selected")}
                        className={`btn ${selectedType == "selected" ? "bg-[#E7FE29]" : "btn"} border border-l-0 rounded-lg rounded-l-none`}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>
            {selectedType == "available" ? (
                <AvailablePlayers
                    players={players}
                    setCoin={setCoin}
                    coin={coin}
                    setSelectedPlayers={setSelectedPlayers}
                    selectedPlayers={selectedPlayers}
                ></AvailablePlayers>
            ) : (
                <SelectedPlayers
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    coin={coin}
                    setCoin={setCoin}
                ></SelectedPlayers>
            )}
        </div>
    );
};

export default Players;
