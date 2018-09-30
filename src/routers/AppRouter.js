import React from 'react';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import NewAbilitiesPage from '../components/NewAbilitiesPage';
import NewRacePage from '../components/NewRacePage';
import NewClassPage from '../components/NewClassPage';
import NewDetailsPage from '../components/NewDetailsPage';
import NewEquipPage from '../components/NewEquipPage';
import NewSpellPage from '../components/NewSpellPage';
import ViewCharacterPage from '../components/ViewCharacterPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/new-char-step-1" component={NewAbilitiesPage} />
                <Route path="/new-char-step-2/:id" component={NewRacePage} />
                <Route path="/new-char-step-3/:id" component={NewClassPage} />
                <Route path="/new-char-step-3.5/:id" component={NewSpellPage} />
                <Route path="/new-char-step-4/:id" component={NewDetailsPage} />
                <Route path="/new-char-step-5/:id" component={NewEquipPage} />
                <Route path="/view-char/:id" component={ViewCharacterPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;