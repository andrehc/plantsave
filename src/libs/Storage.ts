import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '../components/Button';

export interface PlantProps {
      id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string;
    }, 
  dateTimeNotification: Date;
}

interface StoragePlantProps {
  [id: string]: {
    data: PlantProps;
  }
}

export async function savePlant(plant: PlantProps) : Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPlants = {
      [plant.id]: {
        data: plant
      }
    }

    await AsyncStorage.setItem('@plantmanager:plants',
      JSON.stringify({
        ...newPlants,
        ...oldPlants
      })
    );

  } catch (error) {
    throw new Error(error);
  }

}