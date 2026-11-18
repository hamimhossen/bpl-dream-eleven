import React from "react";

import Player from "../Player/Player";

const AvailablePlayers = ({
    players,
    setCoin,
    coin,
    selectedPlayers,
    setSelectedPlayers,
}) => {
    console.log(players);
    return (
        <div className="px-10">
            {/* <h2 className="text-2xl font-bold mb-4">Available Players</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                {players.map((player, ind) => (
                    <Player
                        key={ind}
                        player={player}
                        setCoin={setCoin}
                        coin={coin}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                    ></Player>
                ))}
            </div>
        </div>
    );
};

export default AvailablePlayers;
