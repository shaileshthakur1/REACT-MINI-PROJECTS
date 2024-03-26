import { useState } from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react' ;

function App() {

  const [numberElligible, setNumberElligible] = useState(false);
  const [charElligible, setCharElligible] = useState(false)
  const [token, setToken] = useState("")
  const [length, setLength] = useState(8)

  const tokenRef = useRef(null)

  const tokenGenerator = useCallback(() => {
    let tokenBe = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberElligible) str += "0123456789"
    if (charElligible) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      tokenBe += str.charAt(char)
      
    }

    setToken(tokenBe)


  }, [length, numberElligible, charElligible, setToken])

  const copyTokenToClipboard = useCallback(() => {
    tokenRef.current?.select();
    tokenRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(token)
  }, [token])

  useEffect(() => {
    tokenGenerator()
  }, [length, numberElligible, charElligible, tokenGenerator])
  return (
    
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-20 bg-black text-gray-500">
      <h1 className='text-white text-center my-3'>ACCESS TOKEN GENERATOR 🔑</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={token}
            className="outline-none w-full py-1 px-3"
            placeholder="token"
            readOnly
            ref={tokenRef}
        />
        <button
        onClick={copyTokenToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >COPY
        </button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberElligible}
          id="numberInput"
          onChange={() => {
              setNumberElligible((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charElligible}
              id="characterInput"
              onChange={() => {
                  setCharElligible((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App