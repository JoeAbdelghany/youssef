import { Component, ReactNode } from 'react';
// import styles from '@/styles/layout/scrollBtn/scrollBtn.module.scss';

class ScrollBtn extends Component {
    scrollTop ()  {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    render():ReactNode {
       if (process.browser) {
        window.addEventListener('scroll', () => {
            let scrollBtn = document.querySelector('.scrollBtn') as HTMLElement;
            window.scrollY > window.innerHeight ? scrollBtn.classList.remove('hide') : scrollBtn.classList.add('hide') ;
        })
       }
        return (
            <button className="scrollBtn fixed rounded bg-mc wc right-8 p-2 hide" data-tooltip="scroll to top" type="button" onClick={this.scrollTop}>
                up
            </button>
        );
    }
}

export default ScrollBtn;