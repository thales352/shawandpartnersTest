import React from "react";

const App = ({ children }) => {
  return (
    <>
      <header>
        <h1>My Website</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <p>&copy; 2023 My Website</p>
      </footer>
    </>
  );
};

export default App;
