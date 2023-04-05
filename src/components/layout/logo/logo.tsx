import { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';

class Logo extends Component {
    render() {
            axios.get('http://127.0.0.1:8000/api/youssef').then(res => {
                let data = res.data;
                let logos = document.querySelectorAll('.logo h1');
                logos.forEach( (ele:any) => (ele.innerHTML = data.title))
            })
        return (
            <Link href="/" className="logo flex items-center">
                <img src="/assets/images/logo/favicon-logo.png" className="bg-mc" alt="youssef"/>
                <h1>youssef</h1>
            </Link>
        );
    }
};


export default Logo;