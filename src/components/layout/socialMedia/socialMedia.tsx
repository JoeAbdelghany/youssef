/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
// import styles from '@/styles/layout/socialMedia/socialMedia.module.scss';

class SocialMedia extends Component {
    render () {
        fetch("/youssef.json").then(res => res.json()).then(data => {
            let facebook = document.querySelector('a.facebook') as HTMLAnchorElement;
            let instagram = document.querySelector('a.instagram') as HTMLAnchorElement;
            let linkedin = document.querySelector('a.linkedin') as HTMLAnchorElement;
            let github = document.querySelector('a.github') as HTMLAnchorElement;
            facebook.href = data.user.social.socialMedia.facebook;
            instagram.href = data.user.social.socialMedia.instagram;
            linkedin.href = data.user.social.socialMedia.linkedin;
            github.href = data.user.social.socialMedia.github;
        })
        return ( 
            <ul className="socialMediaIcons flex gap-4">
                <li className="socialMediaIcon"><a className="facebook"  title="my facebook acount"  target="_blank"><IoLogoFacebook className="icon"/></a></li>
                <li className="socialMediaIcon"><a className="instagram" title="my instagram acount" target="_blank"><IoLogoInstagram className="icon"/></a></li>
                <li className="socialMediaIcon"><a className="linkedin"  title="my linkedin acount"  target="_blank"><IoLogoLinkedin className="icon"/></a></li>
                <li className="socialMediaIcon"><a className="github"    title="my github acount"    target="_blank"><IoLogoGithub className="icon"/></a></li>
            </ul>
        )
    }
}

export default SocialMedia;