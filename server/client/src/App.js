import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions/";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

const SurveyNew = () => <h2>SurveyNew</h2>;

const App = () => {
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="container">
      <Router>
        <Header />
        <Route path="/" exact component={Landing} />
        <Route path="/surveys" exact component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </Router>
    </div>
  );
};

export default connect(null, fetchUser)(App);
