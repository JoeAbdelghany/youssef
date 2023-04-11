import { Component } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/home/about/style.module.scss';

interface Props {
    user: any,
}

class About extends Component<Props> {
    render() {
        const { user } = this.props;
        const { story, name } = user;
        const { title } = name;
        return (
            <section className={`${styles.about}`}>
                <div className={`container`}>
                    <h2 className="text-center pb-16"><span className="text-mc">About </span> me</h2>
                    <figure className={`figure grid grid-cols-2`}>
                        <Image src="/assets/images/user/about.jpg" width="350" height="350" alt="youssef" className="justify-self-center rounded-xl" />
                        <figcaption className={`figcaption justify-self-center`}>
                            <h1>Who is <span className="text-mc">{ title }</span> ?</h1>
                            <p className="desc">{ story.short }</p>
                            <button className="btn fill" type="button"><Link href="/about">About me</Link></button>
                        </figcaption>
                    </figure>
                </div>
            </section>
        )
    }
}

export default About;