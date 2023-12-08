import { Provider } from 'react-redux';
import RootNavigator from './src/navigators/RootNavigator';
import { store } from './src/redux/app';



const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}


export default App