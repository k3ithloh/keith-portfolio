import PropTypes from 'prop-types';
import IconTwitter from "./twitter";
import IconGithub from "./github";
import IconLinkedin from "./linkedin";
import React from 'react';


interface IconProps {
    name: string;
}

const Icon = ({ name }: IconProps) => {
    switch (name) {
        case "Twitter":
            return <IconTwitter />;
        case "GitHubGitHub":
            return <IconGithub />;
        case "Linkedin":
            return <IconLinkedin />;
        default:
            return null;
    }
    };

    Icon.propTypes = {
        name: PropTypes.string.isRequired,
      };
      
      export default Icon;