import { Component } from 'react';
import Link from 'next/link';

interface Props {
    title: string,
}

class Logo extends Component<Props> {
    render() {
        const title = this.props.title;
        return (
            <Link href="/" className="logo flex items-center">
                <img src="/assets/images/logo/favicon-logo.png" className="bg-mc" alt={ title }/>
                <h1>{ title }</h1>
            </Link>
        );
    }
};


export default Logo;