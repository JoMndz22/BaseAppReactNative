import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from '../myTabs';

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
export default Navigation;
