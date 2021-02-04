//import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import NotFound from './components/not-found';
import StudentDetails from './containers/student-details';
import AddStudent from './containers/add-student'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import promiseMW from 'redux-promise';
import './App.css';

const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
const App = () => {
    return (
        <Provider store={createStoreWithMW(reducers)}>
            <BrowserRouter>                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Switch>
                        <Route path="/" component={Home}><a className="navbar-brand" href="/">Home</a></Route>
                    </Switch>
                    
                    <a className="nav-link btn btn-outline-primary my-2 my-sm-0" data-toggle="modal" data-target="#modelId">Add Student</a>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" data-backdrop="static" data-keyboard="false" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Add Student</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                        </div>
                                        <div className="modal-body">
                                            <AddStudent/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/students/:id" component={StudentDetails} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    )
}
export default App