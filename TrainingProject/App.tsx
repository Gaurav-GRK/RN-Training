import * as React from 'react';
import { AuthProvider } from './Code/Navigation/Context';
import StackNav from './Code/Navigation/StackNav';
function App() {
  return (
    <AuthProvider>
      <StackNav/>
    </AuthProvider>
  );
}

export default App;