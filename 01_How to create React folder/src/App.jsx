// App.jsx is the child of main.jsx means vo import karta hai elements ko using main.jsx
// function App(){
//   return 'hellooooo'
// }

const App = () => {
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App

// basically 
// index.html (Grand parent)
//   |
//   |
//  main.jsx  (parent)
//   |
//   | 
//  App.jsx (child)
