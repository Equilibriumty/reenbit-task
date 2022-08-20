import React from 'react';
import styles from './Avatar.module.scss';
interface AvatarProps {
  src: string;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <div className={styles.userAvatarWrapper}>
      <img className={styles.userAvatar} src={src} alt='' />
    </div>
  );
};

export default Avatar;
