import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export const ButtonIcon: React.FC<Props> = ({
  title,
  activeOpacity = 0.7,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={activeOpacity}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
