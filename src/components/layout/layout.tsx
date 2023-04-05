import { Component, ReactNode } from 'react';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import ScrollBtn from './scrollBtn/scrollBtn';
interface Props {
    children: ReactNode
}
class Layout extends Component<Props> {
    render() {
        return(
            <>
                <Header />
                <Main>
                    { this.props.children }
                </Main>
                <ScrollBtn />
                <Footer />
                {/* <script src="/assts/js/main.js"></script> */}
            </>
        );
    }
}

export default Layout;