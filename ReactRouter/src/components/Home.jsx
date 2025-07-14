import React from "react";
import { useUser } from "../../context/UserContext";
function Home() {
  const { title } = useUser();
  return <div>{title}</div>;
}

export default Home;
