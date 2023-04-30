import React from 'react';
import Link from 'next/link';
import config, { SocialMedia } from '~/config';
import Icon from './icons/icons';

const SideElementLeft = () => {
    return (
        <div className=" flex flex-col justify-center place-items-center">
          {config.socialMedia &&
          config.socialMedia.map(({ url, name }: SocialMedia, i) => (
            <li className="list-none mb-3" key={i}>
              <Link href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                <Icon name={name} />
                
              </Link>
            </li>
          ))}
          <div className='h-32 bg-ebony w-0.5'>
            </div>
        </div>
        

    )
};

export default SideElementLeft;