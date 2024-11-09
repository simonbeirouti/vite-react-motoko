import './index.css';
import motokoLogo from './assets/motoko_moving.png';
import motokoShadowLogo from './assets/motoko_shadow.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { useQueryCall, useUpdateCall } from '@ic-reactor/react';
import { Button } from './components/ui/button';

function App() {
  const { data: count, call: refetchCount } = useQueryCall({
    functionName: 'get',
  });

  const { call: increment, loading } = useUpdateCall({
    functionName: 'inc',
    onSuccess: () => {
      refetchCount();
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Vite + React + Motoko</h1>
      <div className="flex flex-col items-center justify-center">
        <Button onClick={increment} disabled={loading}>
          count is {count?.toString() ?? 'loading...'}
        </Button>
        <p>
          Edit <code>backend/Backend.mo</code> and save to test HMR
        </p>
      </div>
      <p>
        Click on the Vite, React, and Motoko logos to learn more
      </p>
    </div>
  );
}

export default App;
