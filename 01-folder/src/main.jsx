// 
import { createRoot } from 'react-dom/client'
import './index.css' // index.css sae hum chije in karenge
import App from './App.jsx'

// yaha humney ek element ko select kiya root ko root bana hoga index.html mae
// aur humney yaha kya kiya hai ki root name kae div ko padak kae render kar diya hai
createRoot(document.getElementById('root')).render(<App />
)
