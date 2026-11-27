import icon from './icons.tsx'

const ButtonProps = {
  
  default: `bg-purple-600 
  text-white font-bold 
  px-8 py-4 rounded-xl 
  transition-colors
  hover:bg-purple-400 cursor-pointer m-2
  active:scale-90  active:bg-purple-900`,

  loading: `bg-violet-800 
  text-white font-bold 
  px-8 py-4 rounded-xl 
  transition-colors
  m-2`


}

function Default({ startLoading }: { startLoading: () => void }) {
  return (
    <button style={{ fontFamily: "Cinzel" }} className={ButtonProps.default} onClick={startLoading}>
        {icon.dice} Roll Dice
    </button>
  )
}

function Loading() {
  return (
    <button style={{ fontFamily: "Cinzel" }} className={ButtonProps.loading}>
        {icon.spinner} Rolling Dice...
    </button>
  )
}

function Button({loading, startLoading}: {loading: boolean, startLoading: () => void}) {
  
  if (loading) {
    return <Loading />
  } else {
    return <Default startLoading={startLoading} />
  }

}

export default Button
