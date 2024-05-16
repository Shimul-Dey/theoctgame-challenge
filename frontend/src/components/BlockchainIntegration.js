import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const BlockchainIntegration = () => {
    
    const [networkStatus, setNetworkStatus] = useState('Disconnected');
    const [latestBlockNumber, setLatestBlockNumber] = useState(null);

    useEffect(() => {
        // Initialize Web3.js and connect to an Ethereum
        const initWeb3 = async () => {
            try {                
                const infuraUrl = "https://holesky.infura.io/v3/fa9ff49b7f2c4474bfd47ced75be49ff";

                const provider = new Web3.providers.HttpProvider(infuraUrl);
                const web3 = new Web3(provider);

                // Check connection

                web3.eth.getBlockNumber().then((blockNumber) => {
                    setNetworkStatus('Connected');
                    setLatestBlockNumber(blockNumber.toString());
                    console.log("Connected to Ethereum network. Current block number:", blockNumber);
                }).catch((error) => {
                    console.error("Error connecting to Ethereum node:", error);
                });
            } catch (error) {
                console.error('Error initializing Web3:', error);
            }
        };

        initWeb3();
    }, []);

    

    return (
        <div className="container mt-4">
            <h2>Blockchain Integration</h2>
            <p>Network Status: {networkStatus}</p>
            <p>Latest Block Number: {latestBlockNumber}</p>
        </div>
    );
};

export default BlockchainIntegration;
