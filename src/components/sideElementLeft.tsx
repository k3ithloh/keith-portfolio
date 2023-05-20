import React from "react";
import Link from "next/link";
import config, { type SocialMedia } from "~/config";
import Icon from "./icons/icons";

const SideElementLeft = () => {
  return (
    <div className=" flex h-full flex-col place-items-center justify-center">
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
      <div className="h-32 w-0.5 bg-ebony"></div>
    </div>
  );
};

export default SideElementLeft;
