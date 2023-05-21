import Link from "next/link";
import config, { type SocialMedia } from "~/config";
import Icon from "./icons/icons";

const Footer = () => {
  return (
    <footer className="h-auto rounded-lg px-12 py-10">
      <div className="visible flex flex-wrap items-center justify-center gap-x-5 md:invisible">
        {config.socialMedia &&
          config.socialMedia.map(({ url, name }: SocialMedia, i) => (
            <li className="mb-3 list-none" key={i}>
              <Link
                href={url}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={name} />
              </Link>
            </li>
          ))}
      </div>
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-5  md:flex-nowrap">
        <Link
          href="https:/github.com/k3ithloh/keith-portfolio"
          target="_blank"
          className="text-sm text-ebony hover:text-white"
        >
          Designed & Built by Keith Loh
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
