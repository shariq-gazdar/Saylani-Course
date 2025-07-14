import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3000/users").then((response) => {
  //     response.json().then((data) => {
  //       console.log(data);
  //     });
  //   });
  // });
  useEffect(() => {
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Ahmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  return (
    <div className="font-raleway">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
