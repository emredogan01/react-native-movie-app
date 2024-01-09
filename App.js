import React from 'react';
import {AppNavigation} from './src/navigation/appNavigation';
import {AppProvider} from './src/providers/appProviders';

const App = () => {
  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  );
};

export default App;
