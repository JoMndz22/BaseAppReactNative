import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from '../MyTabs';

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
export default Navigation;
