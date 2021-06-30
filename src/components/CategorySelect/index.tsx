import React from 'react';
import { ScrollView } from 'react-native';
import { Category } from '../Category';
import { styles } from './styles';
import { categories } from '../../utils/categories';

interface Props {
  categorySelected: string;
}

export const CategorySelect: React.FC<Props> = ({ categorySelected }) => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.title}
          checked={category.id === categorySelected}
        />
      ))}
    </ScrollView>
  );
};
