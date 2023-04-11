import { Component } from "react";
import axios from 'axios';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

interface Props {
    accounts:any,
}
class SocialMedia extends Component<Props> {
    render () {
        const { businessAccounts, personalAccounts} = this.props.accounts;
        const { facebook, instagram, linkedin, github } = businessAccounts;
        return ( 
            <ul className="socialMediaIcons flex gap-4">
                <li className="socialMediaIcon"><a href={ facebook } className="facebook"  title="my facebook acount"  target="_blank"><IoLogoFacebook className="icon"/></a></li>
                <li className="socialMediaIcon"><a href={ instagram } className="instagram" title="my instagram acount" target="_blank"><IoLogoInstagram className="icon"/></a></li>
                <li className="socialMediaIcon"><a href={ linkedin } className="linkedin"  title="my linkedin acount"  target="_blank"><IoLogoLinkedin className="icon"/></a></li>
                <li className="socialMediaIcon"><a href={ github } className="github"    title="my github acount"    target="_blank"><IoLogoGithub className="icon"/></a></li>
            </ul>
        )
    }
}

export default SocialMedia;