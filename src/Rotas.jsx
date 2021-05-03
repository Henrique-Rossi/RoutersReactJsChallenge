import { Propriedades } from './templates/Propriedades';

import { Page404 } from './templates/Page404'

import { Detalhes } from './templates/Propriedades/Detalhes';
import { FilterBar } from './components/FilterBar';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './components/NavBar';

export function Rotas() {
    return (
        <BrowserRouter>
            <Navbar />

            <Switch>
                {/* Rotas agrupadas para reutilizar o componente filter  */}
                <Route path="/Propriedades">
                    <FilterBar />
                    <Route path="/Propriedades/:slug?" exact component={Propriedades} />
                    <Route path="/Propriedades/:id" exact component={Propriedades} />
                    <Route path="/Propriedades/Detalhes/:id" exact component={Detalhes} />

                  <Route path="/" component={Propriedades} exact />
                </Route>
              {/* Redirecionar para pagina do projeto   */}
                <Route path="/" component={Propriedades} exact >
                     <Redirect to="/Propriedades"/>  
                </Route>
                <Route path="*" component={Page404} />
            </Switch>
        </BrowserRouter>

    );
};


