import Button from './button.tsx';
import { Result } from './dice';
import ShowPhrase from './frases.tsx';
import { useState } from 'react';


function App() {
  const CSSProp = {
    background: `min-h-screen 
    bg-zinc-900 
    flex items-center justify-center`,

    base: `flex flex-col 
    items-center justify-center`,

    titulo: `text-6xl 
    bg-linear-to-l 
    from-rose-500 from-40% 
    to-purple-500 to-100% 
    bg-clip-text text-transparent
    [-webkit-text-stroke:1px_#18181b]
[paint-order:stroke_fill]
[filter:drop-shadow(2px_0_0_white)_drop-shadow(-2px_0_0_white)_drop-shadow(0_2px_0_white)_drop-shadow(0_-2px_0_white)]`,

    result: `aaa`,

    phrase: `aaa`,

    button: `aa`
  }
  
  function RandomNumber() {
    const number = Math.floor(Math.random() * 6);

    return number;
  }

  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(RandomNumber());

  function StartLoading() {
    setTimeout(() => {
      setNumber(RandomNumber());
      setLoading(false);
    }, 2000);

    setLoading(true);
  }
  
  return (
    <div className={CSSProp.background}>
      <div className={CSSProp.base}>
        <h1 style={{ fontFamily: "MedievalSharp" }} className={CSSProp.titulo}> Rolador de Dado </h1>
        <div className={CSSProp.result}>
        <Result loading={loading} randomNumber={RandomNumber} number={number} />
        </div>
        <div className={CSSProp.phrase}>
          <ShowPhrase loading={loading} number={number} />
        </div>
        <div className={CSSProp.button}>
          <Button loading={loading} startLoading={StartLoading} />
        </div> 
      </div>
    </div>
  );
}

export default App