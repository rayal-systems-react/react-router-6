1. What is the primary reason to use a nested route?
Whenever we have some shared UI between routes in our app.


2. What is a "Layout Route"?
It's the parent route of some nested routes that contains just
the portion of the UI that will be shared. It will use an Outlet
component.


3. What does the <Outlet /> component do? When do you use it?
We use it anytime we have a parent Route that's wrapping 
children routes. It renders the matching child route's
`element` prop given in its route definition


4. What is an "Index Route"?
It's the "default route" we want to render when the path
of the parent route matches. It gives us a chance to render
an element inside the parent's <Outlet /> at the same path
as the parent route.


html, body {
    margin: 0;
    padding: 10px;
}

a {
    color: #161616;
    text-decoration: none;
    padding: 15px
}

a:hover {
    font-weight: bold;
    text-decoration: underline;
}

nav > a:first-of-type {
    margin-left: -15px;
}

.my-link {
    color: red;
}
<NavLink to="/about" className={({isActive}) => isActive ? "my-link" : null }>About</NavLink>


or
html, body {
    margin: 0;
    padding: 10px;
}

a {
    color: #161616;
    text-decoration: none;
    padding: 15px
}

a:hover {
    font-weight: bold;
    text-decoration: underline;
    color: red;
    
}

nav > a:first-of-type {
    margin-left: -15px;
}

.my-link {
    color: red;
}
<NavLink to="/" style={({isActive}) => isActive ? activeStyle : null }>Home</NavLink>

----------------------------------
search Basic:
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useSearchParams } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" }
]

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  
  const displayedCharacters = typeFilter 
    ? swCharacters.filter(char => char.type.toLowerCase() === typeFilter)
    : swCharacters
  
  const charEls = displayedCharacters
    .map(char => (
      <div key={char.name}>
        <h3
          style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
        >
          Name: {char.name}
        </h3>
        <p>Type: {char.type}</p>
        <hr />
      </div>
    ))

  return (
    <main>
      <h2>Home</h2>
      {charEls}
    </main>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
------------------------------------------