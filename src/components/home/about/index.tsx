import { Component } from 'react';
import Image from 'next/image'
import styles from '@/styles/home/about/style.module.scss';

interface Props {
    user: any
}

class About extends Component<Props> {
    render() {
        const { describtion } = this.props.user;
        return (
            <section className={`${styles.about}`}>
                <div className={`container`}>
                    <h2 className="section_title">About me</h2>
                    <figure className={`figure grid grid-cols-2`}>
                        <Image src="/assets/images/user/about.jpg" width="400" height="400" alt="youssef" className="justify-self-center rounded-xl" />
                        <figcaption className={`figcaption justify-self-center`}>
                            <ul className="flex gap-4">
                                <li className="p-4 rounded-lg"></li>
                                <li className="p-4 rounded-lg"></li>
                                <li className="p-4 rounded-lg"></li>
                            </ul>
                            <p className="desc">{ describtion }</p>
                            <button className="btn fill"> About me </button>
                        </figcaption>
                    </figure>
                </div>
            </section>
        )
    }
}

export default About;