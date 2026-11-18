import React from "react";
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({
    selectedPlayers,
    setSelectedPlayers,
    coin,
    setCoin,
}) => {
    console.log(selectedPlayers);
    const handleDeleteSelectedPlayer = (player) => {
        console.log(player, "player");
        const filteredPlayers = selectedPlayers.filter(
            (selectedPlayer) => selectedPlayer.playerName != player.playerName,
        );
        console.log(filteredPlayers);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    };
    return (
        <div className="mb-20">
            {selectedPlayers.length === 0 ? (
                <div className="mx-10 flex flex-col justify-center items-center h-52">
                    <h2 className="font-semibold text-xl mb-2">
                        No players selected yet
                    </h2>
                    <p>Go to Available tap to select players</p>
                </div>
            ) : (
                selectedPlayers.map((player, ind) => {
                    return (
                        <div
                            key={ind}
                            className="flex justify-between border border-gray-400 rounded-lg mx-10 p-3 items-center mb-4"
                        >
                            <div className="flex gap-4 items-center">
                                <img
                                    src={player.playerImage}
                                    alt=""
                                    className="h-16 w-22 rounded-lg"
                                />
                                <div>
                                    <h2 className="font-bold text-[18px]">
                                        {player.playerName}
                                    </h2>
                                    <p>{player.playerType}</p>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="btn text-red-500"
                                    onClick={() =>
                                        handleDeleteSelectedPlayer(player)
                                    }
                                >
                                    <MdDelete></MdDelete>
                                </button>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default SelectedPlayers;
