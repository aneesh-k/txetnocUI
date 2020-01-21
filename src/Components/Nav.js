import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Nav extends Component{

    constructor(){
        super();

        this.onLogOutClick = this.onLogOutClick.bind(this)
    }

    onLogOutClick(event){
        event.preventDefault();
        localStorage.clear();
        window.location.reload();
       
    }

    render(){
        return(
            <div>
                <ul className="nav justify-content-end bg-dark">
                
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/posts" >Posts</Link>
                    </li> 
                    <li className="nav-item">
                    <form><input type="submit" onClick={this.onLogOutClick} className="btn btn-outline-success my-2 my-sm-0" value="LogOut" />
                    </form>
                    </li>  
                                  
                </ul>
            </div>
        );
    }
}

export default Nav;