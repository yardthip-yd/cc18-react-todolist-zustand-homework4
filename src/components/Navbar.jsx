import React from "react";

export default function Navbar() {
    return (
        <nav className="p-4 bg-blue-200 flex flex-row justify-between">
            <p className="text-2xl font-bold">Navbar</p>
            <div>
                <button className="bg-yellow-50 rounded-lg p-1 px-2 mr-4 shadow-lg">Home</button>
                <button className="bg-yellow-50 rounded-lg p-1 px-2 mr-4 shadow-lg">About</button>
                <button className="bg-yellow-50 rounded-lg p-1 px-2 shadow-lg">Login</button>
            </div>
        </nav>
    )
}
