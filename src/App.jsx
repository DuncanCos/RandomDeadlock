import { useState, useEffect } from 'react'

function App() {
  const [reset, setReset] = useState(false)
  const [choosedHero, setChoosedHero] = useState(null)
  const [heroLists] = useState([
    { name: "Seven" }, { name: "Wraith" }, { name: "Warden" }, { name: "Vindicta" },
    { name: "McGinnis" }, { name: "Grey Talon" }, { name: "Mo & Krill" }, { name: "Kelvin" },
    { name: "Yamato" }, { name: "The Doorman" }, { name: "Billy" }, { name: "Infernus" },
    { name: "Lady Geist" }, { name: "Abrams" }, { name: "Paradox" }, { name: "Dynamo" },
    { name: "Haze" }, { name: "Holliday" }, { name: "Bebop" }, { name: "Shiv" },
    { name: "Ivy" }, { name: "Calico" }, { name: "Lash" }, { name: "Viscous" },
    { name: "Pocket" }, { name: "Mirage" }, { name: "Vyper" }, { name: "Sinclair" },
    { name: "Mina" }, { name: "Drifter" }, { name: "Victor" }, { name: "Paige" }
  ])

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroLists.length)
    setChoosedHero(heroLists[randomIndex])
  }, [reset])

  if (!choosedHero) return <p>Chargement...</p>

  // Nettoyer le nom pour qu’il corresponde au fichier
  const formattedName = choosedHero.name.replace(/\s+/g, '_') // ex: "Grey Talon" → "Grey_Talon"
  const heroImage = `/Deadlock_Render_Heroes/${formattedName}_Render.png`
  const heroName = `/deadlockTypo/120px-${formattedName}_name.png`
  return (
    <div className="flex max-h-screen bg-black text-white">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-1/3 p-4 overflow-y-auto">

        {heroLists.map(hero => (
          <div
            key={hero.name}
            className="relative"
            style={{ width: "88px", height: "119px" }}
          >
            {/* Nom en overlay */}
            <h2 className="absolute bottom-0 inset-x-0 w-full text-center text-white text-xs font-bold 
                     bg-black/50 py-1 z-10">
              {hero.name}
            </h2>

            {/* Image */}
            <img
              src={`/deadlockCards/88px-${hero.name.replace(/\s+/g, '_')}_card.png`}
              alt={hero.name}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
        ))}

      </div>


      <div className="relative flex-1 flex items-center justify-center">

        <img
          src={heroImage}
          alt={choosedHero.name}
          className="h-screen object-contain"
          onError={(e) => { e.target.style.display = 'none' }}
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none">
          <img className=" drop-shadow-lg"
            src={heroName}
          />

          <button
            className="btn btn-primary mt-6 pointer-events-auto"
            onClick={() => setReset(!reset)}
          >
            Choisir à nouveau
          </button>
        </div>

      </div>

    </div >



  )
}

export default App
