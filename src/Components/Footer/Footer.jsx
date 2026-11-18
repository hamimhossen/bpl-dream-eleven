import React from "react";
import logoPng from "../../assets/logo-footer.png";

const Footer = () => {
    return (
        <div className="bg-black">
            <img src={logoPng} alt="" className="mx-auto pt-8" />
            <div className="md:flex px-10 grid md:grid-cols-3 grid-cols-1 justify-between items-baseline p-15">
                <div>
                    <h2 className="text-white mb-2">About Us</h2>
                    <p className="text-gray-600">
                        We are a passionate team dedicated <br /> to providing
                        the best services <br /> to our customers.
                    </p>
                </div>
                <div>
                    <h2 className="text-white mb-2">Quick Links</h2>
                    <ul className="text-gray-600">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white mb-2">Subscribe</h2>
                    <p className="text-gray-600 mb-3">
                        Subscribe to our newsletter for the <br /> latest
                        updates.
                    </p>
                    <form action="" className="flex">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="input rounded-lg rounded-r-none border-none"
                        />
                        <button className="border-none btn bg-gradient-to-r from-amber-200 to-rose-400 rounded-lg rounded-l-none">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="divider divider-neutral"></div>
            <p className="text-center text-gray-600 pb-8">
                @2026 Your Company All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
