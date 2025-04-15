
// import React from 'react';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />
//       <main className='p-6'>
//         <h1 className='text-3xl font-bold'>Welcome to InvestWise GreatStack</h1>
//         <p className='mt-2 text-lg text-gray-400'>Your trusted investment dashboard.</p>
//       </main>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      {/* Main Content */}
      <main className='flex-grow p-6'>
        <h1 className='text-3xl font-bold'>Welcome to InvestWise GreatStack</h1>
        <p className='mt-2 text-lg text-gray-400'>Your trusted investment dashboard.</p>
      </main>

      {/* Footer at the bottom */}
      <Footer/>
      
    </div>
  );
}

export default App;

