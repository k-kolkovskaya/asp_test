import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function App() {
  const navItems = [
      { id: 1, title: "Services", href: "/services" },
      { id: 2, title: "Expertise", href: "/" },
      { id: 3, title: "Team", href: "/" },
      { id: 4, title: "Vacancies", href: "/" },
      { id: 5, title: "Contact Us", href: "/" }
  ];

  return (
    <Router>
      <main>
        <Header navItems={navItems} />
        <Route exact path={"/"} component={Home} />
        <Route path={"/services"} component={Services} />
        <Footer navItems={navItems} />
      </main>
    </Router>
  );
}

export default App;
