import React, { Component } from 'react';
import { H1 } from 'glamorous';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook-f';
import FaGithub from 'react-icons/lib/fa/github';

class Footer extends Component {
    render() { 
        return (  
            <section className="footer">
                <div className="footer-name">
                    <h1>Colin Smith</h1>
                </div>
                <div className="footer-copyright">
                    <p>Copyright (c) 2018</p>
                </div>
                <div className="social-media">
                    <a className="footer-link"><FaGithub/></a>
                    <a className="footer-link"><FaTwitter/></a>
                    <a className="footer-link"><FaFacebook/></a>
                </div>
            </section>
        );
    }
}
 
export default Footer;