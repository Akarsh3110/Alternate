import React from 'react'
import "../Components/Banner.css"

function Banner() {
  return (
    <div>
         <div className='head'>
            <p>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</p>
         </div>
         <div>
          <img className='cover' src='design\src\fortnite-pictures-b5kfcchwazwiz3cs 1 (2).png' alt="cover"/>
         </div>
        <div className='description'>
            <p>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
        </div>
        <button className='btn'>Visit Website</button>
        <div className='row'>
            <div className='oneo'>
             <img className='one' src='Fortnite_20180630171046 1.png' alt='one'/>
             <p>Explore large, destructible environments where no two games are ever the same.</p>
            </div>
            <div className='twoo'>
             <img className='two'src='design\src\5daa24d7cc4a0a62650c6b28 1.png'alt='two '/>
             <p>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
            </div>
            <div className='thirdo'>
             <img className='Third' src='design\src\maxresdefault 1.png' alt='three'/>
              <p>Discover even more ways to play across thousands of creator-made game genres</p>
            </div>
        </div>
    </div>
  )
}

export default Banner