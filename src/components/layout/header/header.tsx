import { Component } from 'react';
import Link from 'next/link';
import Logo from '../logo/logo';

interface Props {
    title: string,
}

class Header extends Component<Props> {
    render() {
        const title = this.props.title;
       if (process.browser)  {
            window.addEventListener('scroll', () => {
                let header:Element = document.querySelector('header') as HTMLElement;
                window.scrollY === 0 ? header.classList.remove('shadow') : header.classList.add('shadow'); 
            });
            // const router = useRouter();
            let links = Array.from(document.querySelectorAll('a'));
            links.map((ele: HTMLAnchorElement) => {
                if (ele.href == location.href) {
                    ele.classList.add('active');
                }else {
                    ele.classList.remove('active');
                }
            })
       }
        return (
            <header className={`fixed top-0 left-0 w-full bg-lc`}>
                <div className="container flex justify-between items-center h-full">
                        <Logo title={ title }/>
                        <ul className={`flex`}>
                            <li>
                                <Link href="/">home</Link>
                            </li>
                            <li>
                                <Link href="/about">about</Link>
                            </li>
                            <li>
                                <Link href="/projects">projects</Link>
                            </li>
                            <li>
                                <Link href="/contact">contact</Link>
                            </li>
                            <li>
                                <Link href="/posts">posts</Link>
                            </li>
                        </ul>
                        <div className="flex items-center btns">
                            <Link href="/login" className="btn fill">login</Link>
                            <button className="btn empty" type="button">sign up</button>
                            {/* <div>
                                <img src="/images/users/user.png" alt="user" className="rounded-full b-mc pointer" width="50px" height="50px"/>
                            </div> */}
                        </div>
                </div>
            </header>
        );
    }
}

export default Header;