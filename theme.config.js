const YEAR = new Date().getFullYear();
import Image from "next/image";

export default {
  footer: (
    <footer className="text-white">
      <small>
        Made by Rongbin Gu. © <time>{YEAR}</time>
        <a href="/feed.xml">RSS</a>

        <a href="https://github.com/Rongbin99/" target="_blank" rel="noopener noreferrer"><Image src="/images/GitHub-Symbol.png" alt="GitHub" height={43} width={43} priority className="next-image" style={{marginRight: "15px"}}/></a>
        <a href="https://www.instagram.com/rongbin99/" target="_blank" rel="noopener noreferrer"><Image src="/images/Instagram_Glyph_Gradient.svg" alt="Instagram" height={25} width={25} priority className="next-image" style={{marginRight: "10px"}}/></a>
        <a href="https://twitter.com/rongbin99" target="_blank" rel="noopener noreferrer"><Image src="/images/sl_z_072523_61700_01.jpg" alt="X / Twitter" height={25} width={25} priority className="next-image" style={{marginRight: "20px"}}/></a>
        <a href="https://www.linkedin.com/in/rongbin99/" target="_blank" rel="noopener noreferrer"><Image src="/images/LI-In-Bug.png" alt="LinkedIn" height={30} width={30} priority className="next-image" style={{marginRight: "15px"}}/></a>

      </small>
      <style jsx>{`
        body {
          color: white !important;
        }
        footer {
          margin-top: 7rem;
          color: white;
        }
        a {
          float: right;
          color: white;
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
