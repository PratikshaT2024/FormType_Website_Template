import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Form from './assets/Pages/Form';

function App() {
  return (
    <div>

        
<BrowserRouter>

<Routes>
      <Route path="/" element={<Form/>} />

    

      {/* Add other routes as needed */}
    </Routes>
</BrowserRouter>
    
    </div>
  )
}

export default App