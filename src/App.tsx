import React from 'react'

import { Counter } from './features/counter/Counter';


function App() {
  return (
    <div className="w-screen h-screen">
      <header className='flex flex-col justify-center items-center h-full w-full
      '>
        <h2 className='text-5xl font-bold'>My Parcel Template</h2>
        <h3 className='text-2xl'>
          Parcel React Tailwindcss Typescript
        </h3>
        <Counter />
      </header>
    </div>
  );
}

export default App;
