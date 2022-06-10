import React from "react";
import { Link } from "react-router-dom";

const Currencies = (props) => {
    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Cardano", symbol: "ADA" },
        { name: "XRP", symbol: "XRP" },
        { name: "Avalanche", symbol: "AVAX" },
        { name: "Polkadot", symbol: "DOT" },
        { name: "Solana", symbol: "SOL" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Dodge", symbol: "DOGE" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },





    ];

    return (
        <div className="currencies">
            {currencies.map((coin) => {
                const { name, symbol } = coin;

                return (
                    <Link to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}
        </div>
    );
};

export default Currencies;