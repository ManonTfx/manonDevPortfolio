import { GithubIcon, LinkedinIcon } from '@assets/imageComponent';

function SocialNetwork() {
  return (
    <div className="flex space-x-5 mt-5">
      <a href="https://www.linkedin.com/in/manon-tr%C3%A9foux/" target="blank">
        <LinkedinIcon
          width="2.5rem"
          height="2.5rem"
          fill="white"
          className="hvr-bob"
        />
      </a>
      <a href="https://github.com/ManonTfx" target="blank">
        <GithubIcon
          width="2.5rem"
          height="2.5rem"
          fill="white"
          className="hvr-bob"
        />
      </a>
    </div>
  );
}

export default SocialNetwork;
