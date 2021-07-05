import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export const GuildIcon: React.FC = () => {
  const uri =
    'https://freepikpsd.com/media/2019/11/discord-logo-transparent-Transparent-Images.png';
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
};
