import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-screen h-screen duration-200' style={{backgroundColor:color}}>
      <br />
    <div className=' fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3'>
        {/* onClick expect the function in it so we give him a call back function  */}
     <button onClick={() => setColor("blue")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  >
  Button
</button>

<button onClick={() => setColor("red")} class="bg-red-500  text-white font-bold py-2 px-4 rounded-full" >
  Button
</button>

<button onClick={() => setColor("green")} class="bg-green-500  text-white font-bold py-2 px-4 rounded-full" >
  Button
</button>
</div>
</div>
    </div>
  )
}

export default App
