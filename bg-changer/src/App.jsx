import { useState } from "react" 

function App(){
  const [color , setColor] = useState("green"); 
  return (

    <div className = "w-full h-screen duration-200"
      style ={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

    <button
    onClick={() => setColor("red")}
    className="flex items-center gap-4 rounded-full px-2 text-white"
    style={{backgroundColor: "red"}}
    >RED
    </button>
  
    <button
    onClick={() => setColor("green")}
    className="flex items-center gap-4 rounded-full px-2 text-white"
    style={{backgroundColor: "green"}}
    >GREEN
    </button>

    <button
    onClick={() => setColor("black")}
    className="flex items-center gap-4 rounded-full px-2 text-white"
    style={{backgroundColor: "black"}}
    >BLACK
    </button>

    <button
    onClick={() => setColor("white")}
    className="flex items-center gap-4 rounded-full px-2 text-black"
    style={{backgroundColor: "white"}}
    >WHITE
    </button>

    <button
    onClick={() => setColor("blue")}
    className="flex items-center gap-4 rounded-full px-2 text-white"
    style={{backgroundColor: "blue"}}
    >BLUE
    </button>


    <button
    onClick={() => setColor("olive")}
    className="flex items-center gap-4 rounded-full px-2 text-white"
    style={{backgroundColor: "olive"}}
    >OLIVE
    </button>


    <button
    onClick={() => setColor("grey")}
    className="flex items-center gap-4 rounded-full px-2 text-white"
    style={{backgroundColor: "grey"}}
    >GREY
    </button>

    <button
    onClick={() => setColor("yellow")}
    className="flex items-center gap-4 rounded-full px-2 text-black"
    style={{backgroundColor: "yellow"}}
    >YELLOW
    </button>

    <button
    onClick={() => setColor("pink")}
    className="flex items-center gap-4 rounded-full px-2 text-black"
    style={{backgroundColor: "pink"}}
    >PINK
    </button>

    <button
    onClick={() => setColor("purple")}
    className="flex items-center gap-4 rounded-full px-2 text-black"
    style={{backgroundColor: "purple"}}
    >PURPLE
    </button>

    <button
    onClick={() => setColor("lavender")}
    className="flex items-center gap-4 rounded-full px-2 text-black"
    style={{backgroundColor: "lavender"}}
    >LAVENDER
    </button>

    </div>
    </div>
    </div>
  )
}

export default App
