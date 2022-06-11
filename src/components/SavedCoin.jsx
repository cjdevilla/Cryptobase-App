import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SavedCoin = () => {
    const [coins, setCoins] = useState([1])

  return (
    <div>
        {coins.length === 0 ? (        
        <p>You don't have any coins saved. Please save a coin to add it to your
          watch list. <Link to='/'>Click here to search coins.</Link> </p>): (
            <table>
                <thead>
                    <tr>
                        <th>Rank #</th>
                        <th>Coin</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin) => (
                        <tr key={coin.id}>
                            <td>{coin?.rank}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          )}
    </div>
  )
}

export default SavedCoin