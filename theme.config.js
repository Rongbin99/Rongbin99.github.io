const YEAR = new Date().getFullYear();
import { SocialIcon } from 'react-social-icons';

export default {
  footer: (
    <footer className="dark:text-white">
      <small>
        Made by Rongbin Gu. © <time>{YEAR}</time>

        <SocialIcon network='rss' url='/feed.xml' style={{float: 'right', marginRight: "10px", width: "30px", height: "30px"}}/>
        <SocialIcon url="https://github.com/Rongbin99/" style={{float: 'right', marginRight: "10px", width: "30px", height: "30px"}}/>
        <SocialIcon url="https://www.instagram.com/rongbin99/" style={{float: 'right', marginRight: "10px", width: "30px", height: "30px"}}/>
        <SocialIcon url="https://www.linkedin.com/in/rongbin99/" style={{float: 'right', marginRight: "10px", width: "30px", height: "30px"}}/>

      </small>
      <style jsx>{`
        footer {
          margin-top: 3rem;
          margin-bottom: -6rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
  navs: [
    {
      url: 'https://rongbin99.github.io/resume/',
      name: 'Resume →',
      target: '_blank',
      rel: 'noopener noreferrer',
      newWindow: true
    }
  ]
};
