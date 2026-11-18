import React from "react";
import dollarImg from "../../assets/dollar 1.png";
import logoPng from "../../assets/logo.png";

const Navbar = ({ coin }) => {
    return (
        <div className="navbar px-10 mb-3">
            <div className="flex-1">
                <img src={logoPng} alt="" />
            </div>
            <div className="flex">
                <ul className="md:flex hidden items-center ">
                    <li className="mr-7">
                        <a href="/">Home</a>
                    </li>
                    <li className="mr-7">
                        <a href="fixture">Fixture</a>
                    </li>
                    <li className="mr-7">
                        <a href="team">Teams</a>
                    </li>
                    <li className="mr-7">
                        <a href="schedules">Schedules</a>
                    </li>
                </ul>
                <button className="btn flex justify-between gap-2 items-center font-bold">
                    {coin} Coins
                    <img src={dollarImg} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
