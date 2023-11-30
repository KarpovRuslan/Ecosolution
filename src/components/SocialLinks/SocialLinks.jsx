import React from "react";
import icons from "../../utils/img/icons.svg";
import { LinkIcon, List } from "./SocialLinks.styled";

const SocialLinks = ({ color }) => {
  return (
    <List>
      <li>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <LinkIcon color={color}>
            <use href={icons + "#icon-facebook"} />
          </LinkIcon>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <LinkIcon color={color}>
            <use href={icons + "#icon-instagram"} />
          </LinkIcon>
        </a>
      </li>
    </List>
  );
};

export default SocialLinks;
