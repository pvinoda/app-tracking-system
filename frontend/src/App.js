import React, { useState, useEffect } from "react";
import ApplicationPage from "./application";
import LoginPage from "./login/LoginPage";
import $ from "jquery";

function App() {
  const [auth, setAuth] = useState(false);

  const getDataFunction = () => {
    $.ajax({
      url: "http://localhost:5000/getBoards",
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      credentials: "include",
      data: JSON.stringify({
        getData: "getData",
      }),
      success: (boards) => {
        console.log("BOARDS", boards);
      },
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setCurrentPage(
      <LoginPage
        side={() =>
          setCurrentPage(
            <ApplicationPage getData={getDataFunction} logout={handleLogout} />
          )
        }
      />
    );
    setAuth(false);
  };
  const [currentPage, setCurrentPage] = useState(
    <LoginPage
      side={() =>
        setCurrentPage(
          <ApplicationPage getData={getDataFunction} logout={handleLogout} />
        )
      }
    />
  );
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
      setCurrentPage(
        <ApplicationPage getData={getDataFunction} logout={handleLogout} />
      );
    }
  }, [auth]);

  return <div className="main-page">{currentPage}</div>;
}

export default App;
