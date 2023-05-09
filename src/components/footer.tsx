import Link from "next/link";
import config, { SocialMedia } from '~/config';
import Icon from './icons/icons';

const Footer = () => {
  return (
    <footer className="rounded-lg px-12 py-10 h-auto"> 
      <div className="visible md:invisible flex flex-wrap items-center justify-center gap-x-5">
          {config.socialMedia &&
          config.socialMedia.map(({ url, name }: SocialMedia, i) => (
            <li className="list-none mb-3" key={i}>
              <Link href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                <Icon name={name} />
              </Link>
            </li>
          ))}
      </div>    
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-5  md:flex-nowrap">
        <Link
          href="https:/github.com/k3ithloh/keith-portfolio" target="_blank"
          className="text-sm text-ebony hover:text-white"
        >
          Designed & Built by Keith Loh
        </Link>
      </div>
    </footer>
  );
};

export default Footer;