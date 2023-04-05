import { Component } from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoGithub, IoSendOutline } from 'react-icons/io5';
import { FiArrowDownRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/home/landing/style.module.scss';

import SocialMedia from '@/components/layout/socialMedia/socialMedia';

interface Props {
    user: any
}

class Landing extends Component<Props> {
    render() {
        const { user } = this.props;
        const { name, social, job, describtion } = user;
        const { title } = name ;
        const { jobTitles } = job ;
        const { accounts } = social;
        const { facebook, instagram, linkedin, github } = accounts.businessAccounts;
        return(
            <section className={`${styles.landing} p-0`}>
                <div className={`${styles.container} container h-full grid items-center grid-cols-2 relative`}>
                    <div className={`${styles.landingContent} justify-self-end w-fit`}>
                        <h1 className="title">HI Iam <span className="text-mc">{ title } </span>!</h1>
                        <div className={`${styles.jobTitles} overflow-hidden flex gap-x-4`}>
                            <span>Iam a</span> 
                            <ul className={`${styles.jobTitlesList} pr-2 h-20`}> 
                                {
                                    jobTitles.map((jobTitle:any) => (
                                        <li className={`${styles.jobTitle} overflow-hidden text-smc relative h-full flex justify-content-start whitespace-nowrap`}> { jobTitle } </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <p className={`${styles.desc}`}>
                            { describtion }
                        </p>
                        <button type="button" className={`btn fill gap-3`}>Hire me <IoSendOutline className="icon -rotate-45"/></button>
                    </div>
                    <div className={`${styles.landingImage} justify-self-center`}></div>
                    <div className={`${styles.landingSocial} absolute right-0 bottom-8`}>
                        <SocialMedia />
                    </div>
                </div>
            </section>
        )
    }
}

export default Landing;