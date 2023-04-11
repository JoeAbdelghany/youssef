import { Component, ReactNode } from 'react';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import ScrollBtn from './scrollBtn/scrollBtn';
interface Props {
    children: ReactNode,
    data: any,
}
class Layout extends Component<Props> {
    render() {
        const { data, children } = this.props;
        const { user, title} = data;
        const { social } = user;
        const { accounts } = social;
        return(
            <>
                <Header title={title} />
                <Main>
                    { children }
                </Main>
                <ScrollBtn />
                <Footer title={title} accounts={accounts}/>
            </>
        );
    }
}

export default Layout;