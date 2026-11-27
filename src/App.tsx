import Button from './button.tsx';
import { Animation, Result } from './dice';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <div>
        <Result />
        <Animation />
      </div>
      
      <Button />
      
    </div>
  );
}

export default App