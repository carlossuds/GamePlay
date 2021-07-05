import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Appointment } from '../../components/Appointment';
import { styles } from './styles';

export const Home: React.FC = () => {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '12/07 às 20:30',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: false,
      },
      category: '1',
      date: '12/07 às 20:30',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ];

  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === category) setCategory('');
    else setCategory(categoryId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Appointment data={item} />}
            ItemSeparatorComponent={() => <ListDivider />}
            showsVerticalScrollIndicator={false}
            style={styles.list}
          />
        </View>
      </View>
    </View>
  );
};
