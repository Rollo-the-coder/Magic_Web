import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'
import { Button } from '../button';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            clicked: false, 
        };
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked,
        })
    }


    render() {
        return(
            <nav className="NavbarItems">
                <Link className="navbar-logo nav-title" to="/">Magic<i className="fab fa-react"></i></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                        return(
                            
                            <li key={index} >
                                {/* Link tages connected with array items  */}
                                
                                <Link className={item.cName} to={item.to} onClick={this.handleClick}>
                                    {item.title}
                                </Link>
                               
                            </li>
                            
                        )
                    })}
                   
                </ul>
                
                <Button>Register</Button>
            </nav>
        )
    }
}

export default Navbar