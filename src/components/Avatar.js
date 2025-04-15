import React from "react";
import styles from "../styles/Avatar.module.css";
import defaultProfileImage from "../assets/default_profile.jpg";

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src || defaultProfileImage}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;