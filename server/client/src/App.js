import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Landing} />
        <Route path="/Header" component={Header} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/surveyNew" component={SurveyNew} />
      </Router>
    </>
  );
};

export default App;
