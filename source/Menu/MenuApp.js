import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';

class MenuApp extends Component {
    
    toggleClassExists(){
        var element = document.getElementsByClassName('page-wrapper');
        return element[0].classList.contains('toggled');
    }
    
    handleToggleSidebar(event){
        var element = document.getElementsByClassName('page-wrapper')[0];
        if(this.toggleClassExists()){
            element.classList.remove('toggled');
        }
        else{
            element.classList.add('toggled');
        }
    }
    
    render() {
        
        let menuLinks = this.props.routes.map(($link, index) => {
            return (
                <li key={`menu-${index++}`} className="sidebar-dropdown">
                    <Link to={$link.to}>
                        <i className="fa">{index++}</i>
                        <span>{$link.menu_name}</span>
                    </Link>
                </li>        
                )
        });
        
        let menuRoutes = this.props.routes.map(($route, index) => {
            
            let $exact = false;
            
            if($route.path === '/')
            {
                $exact = true;
            }
            
            
           return (
                    <Route key={`row-${index++}`}  exact={$exact}  path={$route.path} component={$route.component} />        
                  ); 
        });
    
        return (
             <div className="page-wrapper chiller-theme toggled">
                <a id="show-sidebar" onClick={this.handleToggleSidebar.bind(this)} className="btn btn-sm btn-dark" href="#">
                    <i className="fas fa-bars"></i>
                </a>
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-brand">
                            <a href="#">React Components</a>
                            <div id="close-sidebar" onClick={this.handleToggleSidebar.bind(this)}>
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                        {/*
                        <div className="sidebar-header">
                            
                        </div> */}
                        <div className="sidebar-search">
                            <div>
                                <div className="input-group">
                                    <input type="text" className="form-control search-menu" placeholder="Search..." />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul>{/*
                                <li className="header-menu">
                                    <span>General</span>
                                </li> */}
                                {/*
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="fa">1</i>
                                        <span>Dashboard</span>
                                        <span className="badge badge-pill badge-danger">New</span>
                                    </a>
                                    
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Dashboard 1
                                                    <span className="badge badge-pill badge-success">Pro</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">Dashboard 2</a>
                                            </li>
                                            <li>
                                                <a href="#">Dashboard 3</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>*/}
                                {menuLinks}
                            </ul>
                        </div>
                    </div>
                    {/*
                    <div className="sidebar-footer">
                        <a href="#">
                            <i className="fa fa-bell"></i>
                            <span className="badge badge-pill badge-warning notification">3</span>
                        </a>
                    </div>*/}
                </nav>
                <main className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="form-group col-md-12">
                                {menuRoutes}
                            </div>
                        </div>
                    </div>
                </main>
            </div>       
        );
    }
}

export default MenuApp;